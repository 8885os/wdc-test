import type { Metadata } from 'next'
import './globals.css'
import { inter } from './ui/fonts'
import { Navbar } from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { DisableDraftMode } from '@/components/DisableDraftMode'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<Sidebar />
				<div className='ml-[63px] '>
					<Navbar />
					{children}
					{(await draftMode()).isEnabled && (
						<>
							<VisualEditing />
							<DisableDraftMode />
						</>
					)}
				</div>
			</body>
		</html>
	)
}
