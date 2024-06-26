import {
  PAGE_FIELDS as GATOGRAPHQL_PAGE_FIELDS,
  QUERY_ALL_PAGES_INDEX as GATOGRAPHQL_QUERY_ALL_PAGES_INDEX,
  QUERY_ALL_PAGES_ARCHIVE as GATOGRAPHQL_QUERY_ALL_PAGES_ARCHIVE,
  QUERY_ALL_PAGES as GATOGRAPHQL_QUERY_ALL_PAGES,
  QUERY_PAGE_BY_URI as GATOGRAPHQL_QUERY_PAGE_BY_URI,
  QUERY_PAGE_SEO_BY_URI as GATOGRAPHQL_QUERY_PAGE_SEO_BY_URI,
} from './providers/gatographql/pages';

const { WORDPRESS_GRAPHQL_PROVIDER } = require('lib/provider');
module.exports = {
  ...(WORDPRESS_GRAPHQL_PROVIDER === 'gatographql'
    ? {
        PAGE_FIELDS: GATOGRAPHQL_PAGE_FIELDS,
        QUERY_ALL_PAGES_INDEX: GATOGRAPHQL_QUERY_ALL_PAGES_INDEX,
        QUERY_ALL_PAGES_ARCHIVE: GATOGRAPHQL_QUERY_ALL_PAGES_ARCHIVE,
        QUERY_ALL_PAGES: GATOGRAPHQL_QUERY_ALL_PAGES,
        QUERY_PAGE_BY_URI: GATOGRAPHQL_QUERY_PAGE_BY_URI,
        QUERY_PAGE_SEO_BY_URI: GATOGRAPHQL_QUERY_PAGE_SEO_BY_URI,
      }
    : {}),
};
