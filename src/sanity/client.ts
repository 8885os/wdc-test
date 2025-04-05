// ./sanity/lib/client.ts

import type { SanityClient } from 'next-sanity'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export function getClient(previewToken?: string): SanityClient {
	return createClient({
		projectId: projectId || '', // Ensure it's not undefined
		dataset: dataset || 'production',
		useCdn: !previewToken, // ✅ Use CDN only for public content
		perspective: previewToken ? 'previewDrafts' : 'published',
		apiVersion: '2024-04-01',
		stega: {
			studioUrl: '/studio',
		},
		token: previewToken || process.env.SANITY_API_READ_TOKEN, // ✅ Use the environment token
	})
}
