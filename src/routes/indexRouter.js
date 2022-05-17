const userRoutes = require('./userRoutes.js');

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(202).send('Bem vindo!');
  });

  app.use(userRoutes);
};

module.exports = routes;
