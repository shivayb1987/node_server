'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// middleware that is specific to this router
router.use(function (req, res, next) {
  // middleware
  next();
});

// define the about route
router.get('/', function (req, res) {
  res.render('login.html', { title: 'World' });
});

router.post('/', _passport2.default.authenticate('local-login', {
  successRedirect: '/users/2',
  failureRedirect: '/login'
}));

module.exports = router;
//# sourceMappingURL=auth.js.map