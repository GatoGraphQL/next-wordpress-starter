/**
 * getWordPressGraphQLProvider
 */

function getWordPressGraphQLProvider() {
  const providers = ['wpgraphql', 'gatographql'];
  const defaultProvider = 'wpgraphql';
  const selectedProvider = (process.env.WORDPRESS_GRAPHQL_PROVIDER || '').toLowerCase();

  if (!selectedProvider || !providers.includes(selectedProvider)) return defaultProvider;

  return selectedProvider;
}

const WORDPRESS_GRAPHQL_PROVIDER = getWordPressGraphQLProvider();

module.exports = {
  WORDPRESS_GRAPHQL_PROVIDER,
};
