const Authentication = require('./controllers/authentication');

module.exports = (app) => {
  // app.get('/', (req, res, next) => {
  //   res.send(['foo', 'bar', 'dumdum']);
  // });
  app.post('/signup', Authentication.signup);
}

