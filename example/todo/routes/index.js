var express = require('express');
var router = express.Router();

module.exports = module => {
  var controller = require('./controller')(module);
  
  /*
    Database module
    module.db.YOUR_MODEL_NAMES
    
    Mailer module
    module.mailer.nodemailer,
    module.mailer.transporter
  */
  
  // Every methods go through this function.
  // You can use it for before filter like checking authentication.
  router.all('*',  (req, res, next) => {
    controller.all(req, res, next);
  });

  // GET /
  // Show index page
  router.get('/', (req, res, next) => {
    controller.index(req, res, next);
  });

  // POST 
  // Create something.
  router.post('/', (req, res, next) => {
    controller.create(req, res, next);
  });

  // DELETE /:id
  // Delete something.
  router.delete('/:id', (req, res, next) => {
    controller.destroy(req, res, next);
  });
  
  return router;
}
