import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
	return (
		<div className='z-50 bg-white flex-col flex justify-around h-[100vh] mt-0 fixed top-0 left-0 bottom-0'>
			<nav className='bg-white flex-col flex-1 justify-between self-stretch items-center w-16 mt-0 mb-0 pt-4 pb-5 flex'>
				<Link
					href='/'
					aria-current='page'
					className='w-inline-block w--current'>
					<Image
						src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/673e476262a86522818bbfd5_logo-mono.svg'
						loading='eager'
						width='20'
						height='189'
						alt='WDC Creative logo'
						aria-label='WDC Creative logo'
					/>
				</Link>
				<div className='flex-initial flex-col flex p-0 mt-auto self-center justify-between h-auto'>
					<a
						href='https://www.linkedin.com/company/wdc-creative'
						target='_blank'
						className='mb-2 flex'>
						<Image
							src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/674092ec13b6fd270fe5978d_5f733a2209119fdd843532b4_LINKEDIN_ICON_DARK.svg'
							width='30'
							height='30'
							loading='eager'
							alt='LinkedIn logo'
							title='WDC Creative LinkedIn'
						/>
					</a>
					<a
						href='https://www.instagram.com/wdc.creative/?hl=en'
						target='_blank'
						className='justify-center max-w-full mt-1 mb-2 p-0 flex'>
						<Image
							src='https://cdn.prod.website-files.com/5dfa188ac967d247add76ec4/674092ec5bb4a69b5110ae09_5f733a230a3c20d7583ba3ea_INSTAGRAM_ICON_DARK.svg'
							width='30'
							height='30'
							loading='eager'
							alt='Instagram logo'
							title='WDC Creative Instagram'
						/>
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Sidebar
