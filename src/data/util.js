import { WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import {
  QUERY_ALL_POSTS as GATOGRAPHQL_QUERY_ALL_POSTS,
  QUERY_SITE_METADATA as GATOGRAPHQL_QUERY_SITE_METADATA,
  QUERY_ALL_PAGES as GATOGRAPHQL_QUERY_ALL_PAGES,
} from 'providers/gatographql/data/util';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_ALL_POSTS,
          GATOGRAPHQL_QUERY_SITE_METADATA,
          GATOGRAPHQL_QUERY_ALL_PAGES,
        }
      : {}),
  });
};
