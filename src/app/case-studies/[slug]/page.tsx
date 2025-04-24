import { draftMode } from 'next/headers'
import { client } from '@/sanity/client'
import Image from 'next/image'
import { urlFor } from '@/lib/utils/image'
import { CURRENT_STUDY_QUERY } from '@/lib/utils/queries'

// Do not export revalidate globally, we'll control it per request.

export async function generateStaticParams() {
	const caseStudies = await client.fetch<{ slug: string }[]>(
		`*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }`,
		{},
		{ perspective: 'published', useCdn: true }
	)
	return caseStudies.map((cs) => ({ slug: cs.slug }))
}

const query = CURRENT_STUDY_QUERY

export async function generateMetadata() {
	return {
		// add SEO info if needed
	}
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { isEnabled } = await draftMode()
	const { slug } = params

	const data = await client.fetch(
		query,
		{ slug },
		isEnabled
			? {
					perspective: 'previewDrafts',
					useCdn: false,
					stega: true,
			  }
			: {
					perspective: 'published',
					useCdn: true,
			  }
	)

	// Return headers dynamically to control caching
	if (!isEnabled) {
		// Set Cache-Control to revalidate every 60 seconds
		// Only if the page is in published mode
		const headers = new Headers()
		headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate')
	}

	return (
		<div>
			<h1>{data.title}</h1>
			<div className='h-[200px] w-[300px]'>
				{data.image ? (
					<Image
						width={300}
						height={200}
						src={urlFor(data.image).url()}
						alt='Case study thumbnail'
						style={{ objectFit: 'cover' }}
					/>
				) : null}
			</div>
		</div>
	)
}
