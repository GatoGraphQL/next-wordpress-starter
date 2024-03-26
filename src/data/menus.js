import { WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import { QUERY_ALL_MENUS as GATOGRAPHQL_QUERY_ALL_MENUS } from 'providers/gatographql/data/menus';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_ALL_MENUS,
        }
      : {}),
  });
};
