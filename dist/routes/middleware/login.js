'use strict';

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authMiddleware = function authMiddleware(req, res, next) {
  // do any checks you want to in here
  _logger2.default.debug('Inside authMiddleware', req.path);
  var nonSecurePaths = ['/login'];
  if (nonSecurePaths.indexOf(req.path) > -1) {
    next();
    return;
  } else if (req.user) {
    // you can do this however you want with whatever variables you set up
    next();
    return;
  }
  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
  res.redirect('/login');
};

module.exports = authMiddleware;
//# sourceMappingURL=login.js.map