'use client'

import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { disableDraftMode } from '@/app/actions'

export function DisableDraftMode() {
	const router = useRouter()
	const [pending, startTransition] = useTransition()
	const [shouldRender, setShouldRender] = useState(true)

	useEffect(() => {
		if (window !== window.parent || !!window.opener) {
			setShouldRender(false)
		}
	}, [])

	if (!shouldRender) {
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
