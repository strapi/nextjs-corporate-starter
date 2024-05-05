'use strict';

/**
 * device service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::device.device');
