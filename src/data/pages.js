import { gql } from '@apollo/client';

export const QUERY_ALL_PAGES = gql`
  {
    id
    pages: self {
      id
      edges: pages(limit: -1) {
        node: self {
          children: self {
            edges: childPages(limit: -1) {
              node: self {
                id
                slug
                uri: urlPath
                ... on Page {
                  id
                  title
                }
              }
            }
          }
          content
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
          menuOrder
          parent: parentPage {
            node: self {
              id
              slug
              uri: urlPath
              ... on Page {
                title
              }
            }
          }
          slug
          title
          uri: urlPath
        }
      }
    }
  }
`;

export const QUERY_PAGE_BY_URI = gql`
  query PageByUri($uri: ID!) {
    page: pageByPath(path: $uri) {
      children: self {
        edges: childPages(limit: -1) {
          node: self {
            id
            slug
            uri: urlPath
            ... on Page {
              id
              title
            }
          }
        }
      }
      content
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
      menuOrder
      parent: parentPage {
        node: self {
          id
          slug
          uri: urlPath
          ... on Page {
            title
          }
        }
      }
      slug
      title
      uri: urlPath
    }
  }
`;

export const QUERY_PAGE_SEO_BY_URI = gql`
  query PageSEOByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
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
