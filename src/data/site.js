import { gql } from '@apollo/client';

export const QUERY_SITE_DATA = gql`
  {
    id
    generalSettings: self {
      id
      description: option(name: "blogdescription")
      language: option(name: "WPLANG")
      title: option(name: "blogname")
    }
  }
`;

export const QUERY_SEO_DATA = gql`
  {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
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
  }
`;
