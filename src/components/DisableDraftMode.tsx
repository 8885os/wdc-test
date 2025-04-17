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
				<button type='button' onClick={disable}>
					Disable draft mode
				</button>
			)}
		</div>
	)
}
