'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Cta() {
	const router = useRouter()
	return (
		<div className='w-full h-auto p-2'>
			<div className='md:w-[50%]'>
				<h2>Lorem Ipsum Dolor</h2>
				<p className='mb-3'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ad
					error totam veritatis eaque repudiandae harum voluptatum illum
					deserunt animi minus blanditiis doloribus delectus, labore eveniet at
					officia! Numquam, laborum? Tenetur nobis deleniti architecto!
				</p>
				<button
					onClick={() => router.push('/contact')}
					className='cursor-pointer p-2 bg-[#30485e] text-white rounded-full'>
					Get in touch
				</button>
			</div>
		</div>
	)
}
