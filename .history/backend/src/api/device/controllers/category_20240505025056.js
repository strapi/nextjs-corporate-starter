'use strict';

/**
 *  device controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::device.device');
