const { gql } = require('@apollo/client');

export const QUERY_ALL_POSTS = gql`
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

export const QUERY_SITE_METADATA = gql`
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

export const QUERY_ALL_PAGES = gql`
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
