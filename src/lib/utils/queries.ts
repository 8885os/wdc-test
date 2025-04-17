export const CASE_STUDIES_QUERY = `*[_type == "post"] | order(_createdAt desc)
{
  _id,
  title,
  slug,
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

export const CURRENT_STUDY_QUERY = `*[_type == "post" && slug.current == $slug][0]
{
  _id,
  title,
  slug,
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
