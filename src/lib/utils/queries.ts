export const CASE_STUDIES_QUERY = `*[_type == "post"] | order(_createdAt desc)
{
  _id,
  title,
  body,
  image {
    asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  }
}`
