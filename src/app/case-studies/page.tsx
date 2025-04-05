import React from 'react'
import CaseStudies from '../components/CaseStudies'
import { SanityDocument } from 'next-sanity'
import { getClient } from '@/sanity/client'
import { CASE_STUDIES_QUERY } from '@/lib/utils/queries'
import { token } from '@/lib/utils/token'
type PageProps = {
	caseStudies: SanityDocument[]
	draftMode: boolean
	token: string | undefined
}

export default async function caseStudy() {
	const draftMode = true // Set this dynamically if needed

	const client = getClient(draftMode ? token : undefined)
	const caseStudies = await client.fetch<SanityDocument[]>(CASE_STUDIES_QUERY)

	// ✅ Pass props as usual
	const props: PageProps = {
		caseStudies,
		draftMode,
		token: draftMode ? token : '',
	}
	return (
		<div>
			<h1>Case Studies</h1>
			<div className='pt-4 pl-4 md:pt-8 md:pl-8'>
				<CaseStudies {...props} />
			</div>
		</div>
	)
}
