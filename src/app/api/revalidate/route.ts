import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Define the expected webhook payload type
interface WebhookPayload {
	_type: string
	slug?: { current: string }
	isManual?: boolean // To check if it's a manual revalidation request
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
		const { _type, slug, isManual } = body

		// If it's a manual revalidation request for production, revalidate all paths
		if (isManual && isProduction) {
			// Assuming you have a list of all paths to revalidate (you may need to dynamically fetch them)
			const allPaths = ['/case-studies', '/other-path', '/another-path'] // Add other paths as necessary
			for (const path of allPaths) {
				revalidatePath(path)
				console.log(`Revalidated ${path} for production`)
			}

			return NextResponse.json(
				{ message: 'All paths revalidated for production' },
				{ status: 200 }
			)
		}

		// Revalidate paths for individual documents if it's not a manual request
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
