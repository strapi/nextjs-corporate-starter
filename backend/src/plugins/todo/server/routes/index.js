module.exports = [
  {
    method: "GET",
    path: "/find",
    handler: "todo.find",
    config: {
      policies: [],
    },
  },

  {
    method: "POST",
    path: "/create",
    handler: "todo.create",
    config: {
      policies: [],
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "todo.delete",
    config: {
      policies: [],
    },
  },

  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "todo.toggle",
    config: {
      policies: [],
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "todo.update",
    config: {
      policies: [],
    },
  },
];
