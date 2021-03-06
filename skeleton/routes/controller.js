module.exports = module => {
  /*
    Database module
    module.db.YOUR_MODEL_NAMES
    
    Mailer module
    module.mailer.nodemailer,
    module.mailer.transporter
  */

  class ${controllerName}Controller {
    constructor() {
      // Authentication expected.
      this.expected = [
        // Define like below.
        // {url: '/new', method: 'GET'}
      ];
      // Authentication required.
      this.required = [
        // Define like below.
        // {url: '/:id/', method: 'PUT'},
      ]
    }
    
    all(req, res, next) {
      req.app.set('views', __dirname + '/views/');
      // Authentication expected
      // common.exclude_authentication(this.expected, req, res);
      
      // Authentication required
      // common.require_authentication(this.required, req, res, \`/auth/new?path=$\{req.url\}\`);
      next();
    }
    
    // GET /
    index(req, res, next) {
      res.render('index'); 
    }
    
    // GET /new
    new(req, res, next) {
      res.render('new'); 
    }
    
    // POST /
    create(req, res, next) {
    }
    
    // GET /:id/edit
    edit(req, res, next) {
      res.render('edit'); 
    }
    
    // PUT /:id
    update(req, res, next) {
    }
    
    // DELETE /:id
    destroy(req, res, next) {
      res.status(200).json({});
    }
  }
  return new ${controllerName}Controller;
}
