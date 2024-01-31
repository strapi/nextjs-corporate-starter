"use strict";

/**
 * writer service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::writer.writer");
