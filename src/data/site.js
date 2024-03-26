import { WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL, WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from './providers/providers';

import {
  QUERY_SITE_DATA as WPGRAPHQL_QUERY_SITE_DATA,
  QUERY_SEO_DATA as WPGRAPHQL_QUERY_SEO_DATA,
} from './providers/wpgraphql/site';

import {
  QUERY_SITE_DATA as GATOGRAPHQL_QUERY_SITE_DATA,
  QUERY_SEO_DATA as GATOGRAPHQL_QUERY_SEO_DATA,
} from './providers/gatographql/site';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL
      ? {
          WPGRAPHQL_QUERY_SITE_DATA,
          WPGRAPHQL_QUERY_SEO_DATA,
        }
      : {}),
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_SITE_DATA,
          GATOGRAPHQL_QUERY_SEO_DATA,
        }
      : {}),
  });
};
