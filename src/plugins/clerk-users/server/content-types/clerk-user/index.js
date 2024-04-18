"use strict";

module.exports = {
  kind: "collectionType",
  collectionName: "clerkusers",
  info: {
    singularName: "clerkuser",
    pluralName: "clerkusers",
    displayName: "Clerk Users",
  },
  pluginOptions: {
    "content-manager": {
      visible: true,
    },

    "content-type-builder": {
      visible: false,
    },
  },
  options: {
    draftAndPublish: false,
    comment: "",
  },
  attributes: {
    clerkId: {
      type: "text",
    },
    email: {
      type: "email",
    },
  },
};
