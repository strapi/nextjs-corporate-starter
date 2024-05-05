'use strict';

/**
 * page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::page.page', {
  config: {
    find: {
      middlewares: ["api::page.page-populate-middleware"]
    },
    findOne: {
      middlewares: ["api::page.page-populate-middleware"]
    },
  }
});
