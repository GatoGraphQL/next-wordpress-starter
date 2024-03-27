import { QUERY_ALL_MENUS as GATOGRAPHQL_QUERY_ALL_MENUS } from './providers/gatographql/menus';

const { WORDPRESS_GRAPHQL_PROVIDER } = require('lib/provider');
module.exports = {
  ...(WORDPRESS_GRAPHQL_PROVIDER === 'gatographql'
    ? {
        QUERY_ALL_MENUS: GATOGRAPHQL_QUERY_ALL_MENUS,
      }
    : {}),
};
