/**
 * getWordPressGraphQLProvider
 */

function getWordPressGraphQLProvider() {
  const provider = (process.env.WORDPRESS_GRAPHQL_PROVIDER || '').toLowerCase();
  const defaultProvider = 'gatographql';
  if (!provider) return defaultProvider;

  const providers = ['gatographql'];
  if (!providers.includes(provider)) {
    throw new Error(`There is no provider '${provider}'. Options are: '${providers.join("', '")}'`);
  }

  return provider;
}

const WORDPRESS_GRAPHQL_PROVIDER = getWordPressGraphQLProvider();

module.exports = {
  WORDPRESS_GRAPHQL_PROVIDER,
};
