import { gql } from '@apollo/client';

export const PAGE_FIELDS = gql`
  fragment PageFields on Page {
    children: self {
      edges: children(pagination: { limit: -1 }) {
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
    id
    menuOrder
    parent {
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
`;

export const QUERY_ALL_PAGES_INDEX = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages: self {
      id
      edges: pages(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES_ARCHIVE = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    pages: self {
      id
      edges: pages(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PageFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PAGES = gql`
  ${PAGE_FIELDS}
  query AllPagesIndex {
    id
    pages: self {
      id
      edges: pages(filter: { hasPassword: false }, pagination: { limit: -1 }) {
        node: self {
          ...PageFields
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
        }
      }
    }
  }
`;

export const QUERY_PAGE_BY_URI = gql`
  query PageByUri($uri: ID!) {
    page: page(by: { path: $uri }) {
      children: self {
        edges: children(pagination: { limit: -1 }) {
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
      parent: parent {
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
    page(by: { id: $uri }) {
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
