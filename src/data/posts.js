import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories: self {
      edges: categories(pagination: { limit: -1 }) {
        node: self {
          databaseId: id
          id
          name
          slug
        }
      }
    }
    databaseId: id
    date: dateStr
    isSticky
    postId: id
    slug
    title
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts: self {
      id
      edges: posts(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts: self {
      id
      edges: posts(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
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
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts: self {
      id
      edges: posts(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
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
          content
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
          modified: modifiedDateStr
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post: post(by: { slug: $slug }) {
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
        edges: categories(pagination: { limit: -1 }) {
          node: self {
            databaseId: id
            id
            name
            slug
          }
        }
      }
      content
      date: dateStr
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
      modified: modifiedDateStr
      databaseId: id
      title
      slug
      isSticky
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, categoryIDs: [$categoryId] }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, categoryIDs: [$categoryId] }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
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
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, categoryIDs: [$categoryId] }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
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
          content
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
          modified: modifiedDateStr
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, authorSlug: $slug }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, authorSlug: $slug }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    id
    posts: self {
      id
      edges: posts(filter: { hasPassword: false, authorSlug: $slug }, pagination: { limit: -1 }) {
        node: self {
          ...PostFields
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
          modified: modifiedDateStr
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(by: { id: $slug }) {
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
      readingSettingsPostsPerPage: optionValue(name: "posts_per_page")
    }
  }
`;
