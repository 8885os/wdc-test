import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Define the expected webhook payload type
interface WebhookPayload {
	_type: string
	slug?: { current: string }
}

export async function POST(req: NextRequest) {
	// Verify webhook secret
	const secret = req.headers.get('x-sanity-webhook-secret')
	const isStaging = secret === process.env.SANITY_WEBHOOK_SECRET_STAGING
	const isProduction = secret === process.env.SANITY_WEBHOOK_SECRET_PRODUCTION

	if (!isStaging && !isProduction) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}

	try {
		// Extract document data from webhook payload
		const body: WebhookPayload = await req.json()
		const { _type, slug } = body

		// Revalidate relevant paths based on document type
		if (_type === 'post' && slug?.current) {
			const path = `/case-studies/${slug.current}`
			revalidatePath(path)
			console.log(
				`Revalidated ${path} for ${isStaging ? 'staging' : 'production'}`
			)

			const listPath = '/case-studies'
			revalidatePath(listPath)
			console.log(
				`Revalidated ${listPath} for ${isStaging ? 'staging' : 'production'}`
			)
		}

		return NextResponse.json(
			{ message: 'Revalidation triggered' },
			{ status: 200 }
		)
	} catch (err) {
		console.error('Revalidation failed:', err)
		return NextResponse.json(
			{ message: 'Revalidation failed' },
			{ status: 500 }
		)
	}
}
