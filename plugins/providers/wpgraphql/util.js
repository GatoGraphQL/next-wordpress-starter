const { gql } = require('@apollo/client');

const QUERY_ALL_POSTS = gql`
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

const QUERY_SITE_METADATA = gql`
  {
    generalSettings {
      description
      language
      title
    }
  }
`;

const QUERY_ALL_PAGES = gql`
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

module.exports = {
  QUERY_ALL_POSTS,
  QUERY_SITE_METADATA,
  QUERY_ALL_PAGES,
};
