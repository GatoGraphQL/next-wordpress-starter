import { WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL, WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from './providers/providers';

/**
 * getProvider
 */

export async function getProvider() {
  const providers = [WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL, WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL];
  const defaultProvider = WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL;
  const selectedProvider = (process.env.WORDPRESS_GRAPHQL_PROVIDER || '').toLowerCase();
  if (!selectedProvider || !providers.includes(selectedProvider)) return defaultProvider;

  return selectedProvider;
}
