import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Set up the Sanity client
const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: '2024-04-01',
	useCdn: true,
})

// Create an image URL builder
const builder = imageUrlBuilder(client)

// Helper function to get the image URL
export function urlFor(source: SanityImageSource) {
	return builder.image(source)
}
