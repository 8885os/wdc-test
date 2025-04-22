'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import '../app/animations.css'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)
	const [isClosing, setIsClosing] = useState(false)
	const pathname = usePathname()

	const closeMenu = () => {
		setIsClosing(true)

		setTimeout(() => {
			setIsOpen(false)
			setIsClosing(false)
		}, 400)
	}

	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		setIsOpen(false)
	}, [pathname])
	return (
		<div className='z-40 bg-[#30485e] min-h-[70px] static left-[61px] top-auto text-nowrap'>
			<nav
				role='navigation'
				className='items-center h-[70px] pl-0 pr-[31px] hidden lg:flex float-right relative'>
				<div className='mt-4 ml-auto mr-[24px] top-auto bottom-auto float-right cursor-pointer active:bg-[#0000] select-none p-4 text-[24px] hidden relative'>
					<Image
						width='24'
						height='24'
						src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/5f7afc3ab00edc3b1a34481e_Close_Icon.svg'
						alt='Close icon'
						className='close-icon'
					/>
				</div>
				<Link
					href='/animations'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover:text-[#aab8b3] rounded-none visited:#aab8b3'>
					Animations
				</Link>
				<Link
					href='/case-studies'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover:text-[#aab8b3] rounded-none visited:#aab8b3'>
					Case Studies
				</Link>
				<Link
					href='/contact'
					className='text-white h-6 mt-0 pl-[13px] pr-[13px] no-underline hover:text-[#aab8b3] rounded-none visited:#aab8b3'>
					Contact Us
				</Link>
				<div className='sm:ml-10'>
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
							className='border-[#aab8b3] border-[1px] w-button bg-[12px] bg-no-repeat rounded-[100px] w-[30px] h-[30px] ml-[5px] p-[4px]'
							value=''
						/>
					</form>
				</div>
			</nav>
			<div className='h-full relative ml-[1px] flex lg:hidden'>
				{!isOpen ? (
					<svg
						onClick={() => setIsOpen(!isOpen)}
						xmlns='http://www.w3.org/2000/svg'
						id='Menu_Hamburger'
						data-name='Menu Hamburger'
						width='30'
						height='30'
						viewBox='0 0 58 42'
						className='ml-auto cursor-pointer z-51 p-0.5 mr-4 mt-4'>
						<path
							id='Menu'
							d='M2,42a2,2,0,0,1-2-2v-.435a2,2,0,0,1,2-2H56a2,2,0,0,1,2,2V40a2,2,0,0,1-2,2ZM2,23.217a2,2,0,0,1-2-2v-.435a2,2,0,0,1,2-2H56a2,2,0,0,1,2,2v.435a2,2,0,0,1-2,2ZM2,4.434a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H56a2,2,0,0,1,2,2v.435a2,2,0,0,1-2,2Z'
							fill='#ffffff'
						/>
					</svg>
				) : (
					<svg
						fill='#ffffff'
						className='ml-auto cursor-pointer z-51 p-0.5 mr-4 mt-4'
						width='30'
						onClick={() => closeMenu()}
						height='30'
						version='1.1'
						id='Layer_1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'>
						<g id='SVGRepo_bgCarrier'></g>
						<g id='SVGRepo_tracerCarrier'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<g>
								{' '}
								<g>
									{' '}
									<polygon points='512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 '></polygon>{' '}
								</g>{' '}
							</g>{' '}
						</g>
					</svg>
				)}
				{hasMounted && isOpen && (
					<div
						className={`absolute top-[60px] h-screen p-4 w-full bg-[#30485e] text-white z-50 flex flex-col gap-2 ${
							!isClosing
								? 'animate-[var(--slide-left)]'
								: 'animate-[var(--slide-right)]'
						}`}>
						<Link href='/'>Home</Link>
						<Link href='/animations'>Animations</Link>
						<Link href='/about'>About</Link>
						<Link href='/case-studies'>Case studies</Link>
						<Link href='/contact'>Contact</Link>
					</div>
				)}
			</div>
		</div>
	)
}
