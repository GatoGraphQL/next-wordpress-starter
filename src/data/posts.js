import { gql } from '@apollo/client';

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    id
    posts: self {
      id
      edges: posts(pagination: { limit: -1 }) {
        node: self {
          author {
            node: self {
              avatar {
                height: size
                url: src
                width: size
              }
              id
              name
              slug
            }
          }
          id
          categories: self {
            edges: categories(limit: -1) {
              node: self {
                databaseId: id
                id
                name
                slug
              }
            }
          }
          content
          date: dateAsString
          excerpt
          featuredImage {
            node: self {
              altText
              caption
              sourceUrl: src
              srcSet
              sizes
              id
            }
          }
          modified: modifiedAsString
          databaseId: id
          title
          slug
          isSticky
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post: postBySlug(slug: $slug) {
      author {
        node: self {
          avatar {
            height: size
            url: src
            width: size
          }
          id
          name
          slug
        }
      }
      id
      categories: self {
        edges: categories(limit: -1) {
          node: self {
            databaseId: id
            id
            name
            slug
          }
        }
      }
      content
      date: dateAsString
      excerpt
      featuredImage {
        node: self {
          altText
          caption
          sourceUrl: src
          srcSet
          sizes
          id
        }
      }
      modified: modifiedAsString
      databaseId: id
      title
      slug
      isSticky
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  query PostsByCategoryId($categoryId: Int!) {
    id
    posts: self {
      id
      edges: posts(categoryIDs: [$categoryId], limit: -1) {
        node: self {
          author {
            node: self {
              avatar {
                height: size
                url: src
                width: size
              }
              id
              name
              slug
            }
          }
          id
          categories: self {
            edges: categories(limit: -1) {
              node: self {
                databaseId: id
                id
                name
                slug
              }
            }
          }
          content
          date: dateAsString
          excerpt
          featuredImage {
            node: self {
              altText
              caption
              id
              sizes
              sourceUrl: src
              srcSet
            }
          }
          modified: modifiedAsString
          databaseId: id
          title
          slug
          isSticky
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  query PostByAuthorSlug($slug: String!) {
    id
    posts: self {
      id
      edges: posts(authorSlug: $slug, limit: -1) {
        node: self {
          categories: self {
            edges: categories(limit: -1) {
              node: self {
                databaseId: id
                id
                name
                slug
              }
            }
          }
          date: dateAsString
          excerpt
          featuredImage {
            node: self {
              altText
              caption
              id
              sizes
              sourceUrl: src
              srcSet
            }
          }
          id
          modified: modifiedAsString
          databaseId: id
          slug
          title
          isSticky
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
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
        readingTime
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

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    id
    allSettings: self {
      id
      readingSettingsPostsPerPage: option(name: "posts_per_page")
    }
  }
`;
