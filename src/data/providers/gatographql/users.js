import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query AllUsers {
    id
    users: self {
      id
      edges: users(pagination: { limit: -1 }) {
        node: self {
          avatar {
            height: size
            width: size
            url: src
          }
          description
          id
          name
          roles: self {
            nodes: roles {
              name
            }
          }
          slug
        }
      }
    }
  }
`;

export const QUERY_ALL_USERS_SEO = gql`
  query AllUsersSeo {
    users: self {
      edges: users(pagination: { limit: -1 }) {
        node: self {
          id
          seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            social {
              youTube
              wikipedia
              twitter
              soundCloud
              pinterest
              mySpace
              linkedIn
              instagram
              facebook
            }
          }
        }
      }
    }
  }
`;
