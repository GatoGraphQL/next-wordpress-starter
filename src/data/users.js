import { WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import {
  QUERY_ALL_USERS as GATOGRAPHQL_QUERY_ALL_USERS,
  QUERY_ALL_USERS_SEO as GATOGRAPHQL_QUERY_ALL_USERS_SEO,
} from 'providers/gatographql/data/users';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_ALL_USERS,
          GATOGRAPHQL_QUERY_ALL_USERS_SEO,
        }
      : {}),
  });
};
