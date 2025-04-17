import { draftMode } from 'next/headers'
import { client } from '@/sanity/client'
import Image from 'next/image'
import { urlFor } from '@/lib/utils/image'
import { CURRENT_STUDY_QUERY } from '@/lib/utils/queries'

const query = CURRENT_STUDY_QUERY

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const { isEnabled } = await draftMode()

	const data = await client.fetch(
		query,
		{ slug },
		isEnabled
			? {
					perspective: 'previewDrafts',
					useCdn: false,
					stega: true,
				}
			: undefined
	)

	return (
		<div className=''>
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
				) : (
					''
				)}
			</div>
		</div>
	)
}
