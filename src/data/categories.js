import { WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import {
  QUERY_ALL_CATEGORIES as GATOGRAPHQL_QUERY_ALL_CATEGORIES,
  QUERY_CATEGORY_BY_SLUG as GATOGRAPHQL_QUERY_CATEGORY_BY_SLUG,
  QUERY_CATEGORY_SEO_BY_SLUG as GATOGRAPHQL_QUERY_CATEGORY_SEO_BY_SLUG,
} from 'providers/gatographql/data/categories';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_ALL_CATEGORIES,
          GATOGRAPHQL_QUERY_CATEGORY_BY_SLUG,
          GATOGRAPHQL_QUERY_CATEGORY_SEO_BY_SLUG,
        }
      : {}),
  });
};
