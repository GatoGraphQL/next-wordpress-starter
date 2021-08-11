import { gql } from '@apollo/client';

export const QUERY_ALL_CATEGORIES = gql`
  {
    id
    categories: self {
      id
      edges: postCategories(limit: -1) {
        node: self {
          databaseId: id
          description
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_BY_SLUG = gql`
  query CategoryBySlug($slug: String!) {
    category: postCategoryBySlug(slug: $slug) {
      databaseId: id
      description
      id
      name
      slug
    }
  }
`;

export const QUERY_CATEGORY_SEO_BY_SLUG = gql`
  query CategorySEOBySlug($slug: String!) {
    category: postCategoryBySlug(slug: $slug) {
      id
      seo {
        #TODO: This field is not yet supported
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
