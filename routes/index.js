const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  app.use('/API/products', productsRouter);
  app.use('/API/users', usersRouter);
  app.use('/API/categories', categoriesRouter);
}

module.exports = routerApi;
