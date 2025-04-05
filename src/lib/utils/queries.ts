export const CASE_STUDIES_QUERY = `*[_type == "post"]{ _id, title, body, image, "slug": slug.current }`
