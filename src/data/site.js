import {
  QUERY_SITE_DATA as WPGRAPHQL_QUERY_SITE_DATA,
  QUERY_SEO_DATA as WPGRAPHQL_QUERY_SEO_DATA,
} from './providers/wpgraphql/site';

import {
  QUERY_SITE_DATA as GATOGRAPHQL_QUERY_SITE_DATA,
  QUERY_SEO_DATA as GATOGRAPHQL_QUERY_SEO_DATA,
} from './providers/gatographql/site';

const { WORDPRESS_GRAPHQL_PROVIDER } = require('lib/provider');
module.exports = {
  ...(WORDPRESS_GRAPHQL_PROVIDER === 'wpgraphql'
    ? {
        QUERY_SITE_DATA: WPGRAPHQL_QUERY_SITE_DATA,
        QUERY_SEO_DATA: WPGRAPHQL_QUERY_SEO_DATA,
      }
    : {}),
  ...(WORDPRESS_GRAPHQL_PROVIDER === 'gatographql'
    ? {
        QUERY_SITE_DATA: GATOGRAPHQL_QUERY_SITE_DATA,
        QUERY_SEO_DATA: GATOGRAPHQL_QUERY_SEO_DATA,
      }
    : {}),
};
