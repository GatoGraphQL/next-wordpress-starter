const { gql } = require('@apollo/client');

export const QUERY_ALL_POSTS = gql`
  {
    posts(first: 10000) {
      edges {
        node {
          title
          excerpt
          databaseId
          slug
          date
          modified
          author {
            node {
              name
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_SITE_METADATA = gql`
  {
    generalSettings {
      description
      language
      title
    }
  }
`;

export const QUERY_ALL_PAGES = gql`
  {
    pages(first: 10000) {
      edges {
        node {
          slug
          modified
        }
      }
    }
  }
`;
