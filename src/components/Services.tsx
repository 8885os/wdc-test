import React from 'react'
import Accordion, { AccordionItem } from './Accordion'

export default function Services() {
	return (
		<div className='flex flex-col w-full bg-[#f1ebe7] justify-center items-center pt-10'>
			<div className='flex flex-col w-full p-5 md:p-10 max-w-[1200px]'>
				<h2>Our Services</h2>
				<p className='mb-10'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
					harum sequi unde labore qui delectus esse sed nam recusandae natus
					minima beatae, molestias aliquid saepe facilis deserunt pariatur vitae
					iste!
				</p>
				<div className='w-full flex justify-center'>
					<Accordion className='text-[#30485e] md:w-[600px] w-full justify-center'>
						<AccordionItem value='1' trigger='Brand Strategy'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							impedit quidem deserunt, repudiandae ipsa pariatur.
						</AccordionItem>
						<AccordionItem value='2' trigger='Interior design'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							impedit quidem deserunt, repudiandae ipsa pariatur.
						</AccordionItem>
						<AccordionItem value='3' trigger='Brand communications'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							impedit quidem deserunt, repudiandae ipsa pariatur.
						</AccordionItem>
						<AccordionItem value='4' trigger='Web design' border='false'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							impedit quidem deserunt, repudiandae ipsa pariatur.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	)
}
