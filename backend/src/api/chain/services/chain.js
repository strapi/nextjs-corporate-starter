'use strict';

/**
 * chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chain.chain');
