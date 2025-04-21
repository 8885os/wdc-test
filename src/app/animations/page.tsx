import ImageSlider from '@/components/ImageSlider'
import React from 'react'

export default function page() {
	return (
		<div className='flex flex-col w-full '>
			<h1 className=''>Animations & Image Effects</h1>
			<div className='max-w-[1200px] w-[80%]'>
				<h2>1. Image Mask</h2>
				<div className='relative w-full h-[700px]'>
					<div className='absolute inset-0 bg-[url(/scenery.jpg)] bg-no-repeat bg-cover bg-center mask-no-repeat max-h-[70vh] mask-center mask-size-[70%] mask-[url(/mask-image.png)]'></div>
				</div>
			</div>
			<h2 className='mb-20'>2. Slider Animation</h2>
			<ImageSlider />
		</div>
	)
}
