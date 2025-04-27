import { NextResponse, NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

// Define the expected webhook payload type
interface WebhookPayload {
	_type?: string
	slug?: { current?: string }
	isManual?: boolean
	secret?: string // Secret sent in payload body
}

// CORS headers
const corsHeaders = {
	'Access-Control-Allow-Origin': 'https://wdc-test.sanity.studio',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, x-sanity-webhook-secret',
}

// Handle preflight OPTIONS request
export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: corsHeaders,
	})
}

export async function POST(req: NextRequest) {
	const allowedOrigin = 'https://wdc-test.sanity.studio'
	const origin = req.headers.get('origin')
	if (origin && origin !== allowedOrigin) {
		return NextResponse.json(
			{ message: 'Origin not allowed' },
			{ status: 403, headers: corsHeaders }
		)
	}

	try {
		// Extract document data from webhook payload
		const body: WebhookPayload = await req.json()
		const { _type, slug, isManual, secret } = body

		// Verify webhook secret (from payload, not header)
		const isStaging = secret === process.env.SANITY_WEBHOOK_SECRET_STAGING
		const isProduction = secret === process.env.SANITY_WEBHOOK_SECRET_PRODUCTION

		if (!isStaging && !isProduction) {
			return NextResponse.json(
				{ message: 'Invalid secret' },
				{ status: 401, headers: corsHeaders }
			)
		}

		// If it's a manual revalidation request for production, revalidate all paths
		if (isManual && isProduction) {
			const allPaths = ['/case-studies', '/pages', '/categories', '/', '/about'] // Customize
			for (const path of allPaths) {
				revalidatePath(path)
				console.log(`Revalidated ${path} for production`)
			}

			return NextResponse.json(
				{ message: 'All paths revalidated for production' },
				{ status: 200, headers: corsHeaders }
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
			{ status: 200, headers: corsHeaders }
		)
	} catch (err) {
		console.error('Revalidation failed:', err)
		return NextResponse.json(
			{ message: 'Revalidation failed' },
			{ status: 500, headers: corsHeaders }
		)
	}
}
