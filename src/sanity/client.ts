import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
	projectId: projectId,
	dataset: dataset || 'production',
	useCdn: true,
	apiVersion: '2024-04-01',
	stega: {
		studioUrl: process.env.SANITY_STUDIO_URL,
	},
	token: process.env.SANITY_API_READ_TOKEN,
})
