'use strict';

/**
 * tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag.tag');
