import { gql } from '@apollo/client';

export const QUERY_ALL_MENUS = gql`
  {
    menus: self {
      edges: menus {
        node: self {
          id
          menuItems: items {
            edges: self {
              node: self {
                cssClasses: classes
                id
                parentId: parentID
                label
                title
                target
                path: localURLPath
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
