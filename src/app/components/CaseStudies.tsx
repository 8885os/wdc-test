import { urlFor } from '@/lib/utils/image'
import { PortableText, SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'

const CaseStudies = ({ caseStudies }: { caseStudies: SanityDocument[] }) => {
	return (
		<div className='flex flex-col gap-5'>
			{caseStudies.map((caseStudy) => (
				<div key={caseStudy._id} className='flex'>
					<div className='relative w-[300px] h-[300px] min-w-[300px]'>
						<Image
							fill
							src={urlFor(caseStudy.image).url()}
							alt='Case study thumbnail'
							style={{ objectFit: 'cover' }}
						/>
					</div>

					<div className='flex flex-col ml-4 prose'>
						<h1>{caseStudy.title}</h1>
						<PortableText value={caseStudy.body} />
					</div>
				</div>
			))}
		</div>
	)
}

export default CaseStudies
