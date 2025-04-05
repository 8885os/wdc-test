import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
	return (
		<div className='z-40 bg-[#30485e] h-[70px] static left-[61px] top-auto text-nowrap'>
			<nav
				role='navigation'
				className='items-center h-[70px] pl-0 pr-[31px] flex float-right relative'>
				<div className='mt-4 ml-auto mr-[24px] top-auto bottom-auto float-right cursor-pointer active:bg-[#0000] select-none p-4 text-[24px] hidden relative'>
					<Image
						width='24'
						height='24'
						src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/5f7afc3ab00edc3b1a34481e_Close_Icon.svg'
						alt='Close icon'
						className='close-icon'
					/>
				</div>
				<a
					href='/about-us'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					About us
				</a>
				<a
					id='services-nav-link'
					href='/services'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					Services
				</a>
				<a
					href='/our-work'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					Work
				</a>
				<a
					href='/sustainable-design'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					Sustainable design
				</a>
				<a
					href='/insights'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					Insights
				</a>
				<a
					href='/contact'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover: #aab8b3 rounded-none visited:#aab8b3'>
					Contact
				</a>
				<div className=' sm:ml-10'>
					<form action='/search' className='items-center mb-0 flex'>
						<input
							className='text-[#30485e] rounded-[20px] h-[28px] mb-0 p-2 text-[12px] leading-[14px] w-[180px] align-middle border-[1px] border-[#ccc]'
							maxLength={256}
							placeholder='Search WDC Creative'
							type='search'
							id='search'
							required
						/>
						<input
							type='submit'
							aria-label='Search'
							className='border-[#aab8b3] border-[1px] w-button bg-[url(https://cdn.prod.website-files.com/5dfa188…/62ff4fc…_search-btn.svg)] bg-[12px] bg-no-repeat rounded-[100px] w-[30px] h-[30px] ml-[5px] p-[4px]'
							value=''
						/>
					</form>
				</div>
			</nav>
			<div className='h-full px-[15px] py-[20px] hidden'>
				<div className='invert w-auto h-auto pt-[6px] hidden'></div>
				<Image
					src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/5dfa2151bfe8d09a7c7f2463_Menu%20Hamburger.svg'
					loading='lazy'
					width='20'
					height='14'
					alt='Hamburger menu icon'
					className='image-15'
				/>
			</div>
		</div>
	)
}
