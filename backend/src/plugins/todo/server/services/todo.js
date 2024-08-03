"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.documents("plugin::todo.todo").findMany(query);
  },

  async delete(id) {
    return await strapi.documents("plugin::todo.todo").delete({
      documentId: id
    });
  },

  async create(data) {
    return await strapi.documents("plugin::todo.todo").create(data);
  },

  async update(id, data) {
    return await strapi.documents("plugin::todo.todo").update({
      documentId: id,
      data
    });
  },

  async toggle(id) {
    const result = await strapi.documents("plugin::todo.todo").findOne({
      documentId: id
    });

    return await strapi.documents("plugin::todo.todo").update({
      documentId: id,
      data: { isDone: !result.isDone }
    });
  },
});
