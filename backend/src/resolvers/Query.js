const { forwardTo } = require('prisma-binding');
const Query = {
  projects: forwardTo('db'),
};

module.exports = Query;
