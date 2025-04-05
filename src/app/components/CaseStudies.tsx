import { urlFor } from '@/lib/utils/image'
import { PortableText, SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'

const CaseStudies = ({ caseStudies }: { caseStudies: SanityDocument[] }) => {
	return (
		<div className='flex flex-col gap-5'>
			{caseStudies.map((caseStudy) => (
				<div key={caseStudy._id} className='flex flex-col md:flex-row'>
					<div className='relative h-[100px] w-[200px] md:h-[200px] md:min-w-[250px] max-h-[200px]'>
						<Image
							fill
							src={urlFor(caseStudy.image).url()}
							alt='Case study thumbnail'
							style={{ objectFit: 'cover' }}
						/>
					</div>

					<div className='flex flex-col pr-4  md:w-3/4 md:pl-4'>
						<h1>{caseStudy.title}</h1>
						<div className=' max-w-[95%] md:max-w-[80%]'>
							<PortableText value={caseStudy.body} />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CaseStudies
