import { SanityDocument } from 'next-sanity'

import { getClient } from '@/sanity/client'
import CaseStudies from './components/CaseStudies'
import { CASE_STUDIES_QUERY } from '@/lib/utils/queries'
import { token } from '@/lib/utils/token'
import Sidebar from './components/Sidebar'
import { Navbar } from './components/Navbar'
import './globals.css'

type PageProps = {
	caseStudies: SanityDocument[]
	draftMode: boolean
	token: string | undefined
}

export default async function Home() {
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
			<Sidebar />
			<div className='ml-[63px]'>
				<Navbar />
				<div className='pt-16 pl-16'>
					<CaseStudies {...props} />
				</div>
			</div>
		</div>
	)
}
