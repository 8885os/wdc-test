import Image from 'next/image'
import React from 'react'

export default function ImageSlider() {
	return (
		<div className='carousel'>
			<div className='list'>
				<div className='item'>
					<Image
						fill
						className='carousel-img'
						src='/animals/img1.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='author'>SLIDER (NOT FINISHED)</div>
						<div className='title'>DESIGN SLIDER</div>
						<div className='topic'>ANIMAL</div>
						<div className='des'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
							sequi, rem magnam nesciunt minima placeat, itaque eum neque
							officiis unde, eaque optio ratione aliquid assumenda facere ab et
							quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
							nisi reprehenderit tempora at laborum natus unde. Ut,
							exercitationem eum aperiam illo illum laudantium?
						</div>
						<div className='buttons'>
							<button>SEE MORE</button>
							<button>SUBSCRIBE</button>
						</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='carousel-img'
						src='/animals/img2.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='author'>SLIDER</div>
						<div className='title'>DESIGN SLIDER</div>
						<div className='topic'>ANIMAL</div>
						<div className='des'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
							sequi, rem magnam nesciunt minima placeat, itaque eum neque
							officiis unde, eaque optio ratione aliquid assumenda facere ab et
							quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
							nisi reprehenderit tempora at laborum natus unde. Ut,
							exercitationem eum aperiam illo illum laudantium?
						</div>
						<div className='buttons'>
							<button>SEE MORE</button>
							<button>SUBSCRIBE</button>
						</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='carousel-img'
						src='/animals/img3.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='author'>SLIDER</div>
						<div className='title'>DESIGN SLIDER</div>
						<div className='topic'>ANIMAL</div>
						<div className='des'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
							sequi, rem magnam nesciunt minima placeat, itaque eum neque
							officiis unde, eaque optio ratione aliquid assumenda facere ab et
							quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
							nisi reprehenderit tempora at laborum natus unde. Ut,
							exercitationem eum aperiam illo illum laudantium?
						</div>
						<div className='buttons'>
							<button>SEE MORE</button>
							<button>SUBSCRIBE</button>
						</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='carousel-img'
						src='/animals/img4.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='author'>SLIDER</div>
						<div className='title'>DESIGN SLIDER</div>
						<div className='topic'>ANIMAL</div>
						<div className='des'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
							sequi, rem magnam nesciunt minima placeat, itaque eum neque
							officiis unde, eaque optio ratione aliquid assumenda facere ab et
							quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
							nisi reprehenderit tempora at laborum natus unde. Ut,
							exercitationem eum aperiam illo illum laudantium?
						</div>
						<div className='buttons'>
							<button>SEE MORE</button>
							<button>SUBSCRIBE</button>
						</div>
					</div>
				</div>
			</div>
			<div className='thumbnail'>
				<div className='item'>
					<Image
						fill
						className='thumbnail-img'
						src='/animals/img1.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='title'>Name Slider</div>
						<div className='description'>Description</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='thumbnail-img'
						src='/animals/img2.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='title'>Name Slider</div>
						<div className='description'>Description</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='thumbnail-img'
						src='/animals/img3.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='title'>Name Slider</div>
						<div className='description'>Description</div>
					</div>
				</div>
				<div className='item'>
					<Image
						fill
						className='thumbnail-img'
						src='/animals/img4.jpg'
						alt='img'
					/>
					<div className='content'>
						<div className='title'>Name Slider</div>
						<div className='description'>Description</div>
					</div>
				</div>
			</div>

			<div className='arrows'>
				<button id='prev'>{'<'}</button>
				<button id='next'>{'>'}</button>
			</div>
			<div className='time'></div>
		</div>
	)
}
