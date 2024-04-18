'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('clerk-users')
      .service('myService')
      .getWelcomeMessage();
  },
});
