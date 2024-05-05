'use strict';

/**
 * author router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

'use strict';

module.exports = {
  async find(ctx) {
    // Hent alle enheter fra databasen
    const devices = await strapi.query('device').find();

    // Returner enhetene som respons
    return devices;
  },

  async create(ctx) {
    // Opprett en ny enhet i databasen basert på dataene i forespørselen
    const device = await strapi.query('device').create(ctx.request.body);

    // Returner den opprettede enheten som respons
    return device;
  },
};
