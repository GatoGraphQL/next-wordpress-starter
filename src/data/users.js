import {
  QUERY_ALL_USERS as GATOGRAPHQL_QUERY_ALL_USERS,
  QUERY_ALL_USERS_SEO as GATOGRAPHQL_QUERY_ALL_USERS_SEO,
} from './providers/gatographql/users';

const { WORDPRESS_GRAPHQL_PROVIDER } = require('lib/provider');
module.exports = {
  ...(WORDPRESS_GRAPHQL_PROVIDER === 'gatographql'
    ? {
        QUERY_ALL_USERS: GATOGRAPHQL_QUERY_ALL_USERS,
        QUERY_ALL_USERS_SEO: GATOGRAPHQL_QUERY_ALL_USERS_SEO,
      }
    : {}),
};
