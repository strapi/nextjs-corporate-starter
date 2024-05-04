'use strict';

/**
 * code-composer-studio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-composer-studio.code-composer-studio');
