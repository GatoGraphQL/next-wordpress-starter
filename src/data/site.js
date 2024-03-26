import { WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import {
  QUERY_SITE_DATA as GATOGRAPHQL_QUERY_SITE_DATA,
  QUERY_SEO_DATA as GATOGRAPHQL_QUERY_SEO_DATA,
} from 'providers/gatographql/data/site';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_SITE_DATA,
          GATOGRAPHQL_QUERY_SEO_DATA,
        }
      : {}),
  });
};
