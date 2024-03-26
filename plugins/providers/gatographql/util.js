const { gql } = require('@apollo/client');

const QUERY_ALL_POSTS = gql`
  {
    id
    posts: self {
      id
      edges: posts(pagination: { limit: -1 }) {
        node: self {
          title
          excerpt
          databaseId: id
          slug
          date: dateStr
          modified: modifiedDateStr
          author {
            node: self {
              name
            }
          }
          categories: self {
            edges: categories(pagination: { limit: -1 }) {
              node: self {
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
    id
    generalSettings: self {
      id
      description: optionValue(name: "blogdescription")
      language: optionValue(name: "WPLANG")
      title: optionValue(name: "blogname")
    }
  }
`;

const QUERY_ALL_PAGES = gql`
  {
    id
    pages: self {
      id
      edges: pages(pagination: { limit: -1 }) {
        node: self {
          slug
          modified: modifiedDateStr
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
