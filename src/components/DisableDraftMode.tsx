'use client'

import { useEffect, useState } from 'react'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { disableDraftMode } from '@/app/actions'

export function DisableDraftMode() {
	const router = useRouter()
	const [pending, startTransition] = useTransition()
	const [isClient, setIsClient] = useState(false)

	// Ensure this logic only runs on the client-side
	useEffect(() => {
		setIsClient(true)
	}, [])

	// Guard clause to make sure we're in the client-side
	if (!isClient || window !== window.parent || !!window.opener) {
		return null
	}

	const disable = () =>
		startTransition(async () => {
			await disableDraftMode()
			router.refresh()
		})

	return (
		<div>
			{pending ? (
				'Disabling draft mode...'
			) : (
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white'>
					<div className='w-full h-full relative  p-4'>
						<button type='button' onClick={disable} className='p-4'>
							You are in draft mode. Click to disable
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
