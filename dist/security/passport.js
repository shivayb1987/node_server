'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStrategy = _passportLocal2.default.Strategy;

var Security = function () {
  function Security() {
    _classCallCheck(this, Security);
  }

  _createClass(Security, null, [{
    key: 'configure',
    value: function configure() {
      _passport2.default.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      }, function (req, username, password, done) {
        _logger2.default.debug('Inside local-login with username: ', username);
        if (username === 'admin' && password === 'password') {
          return done(null, {
            username: 'admin',
            author: 'auther',
            id: 2
          });
        }
        return done(null, false, { message: 'Incorrect username/password.' });
      }));
      _passport2.default.serializeUser(function (user, done) {
        done(null, user.id);
      });

      _passport2.default.deserializeUser(function (id, done) {
        done(null, {
          id: 2,
          name: 'parmod'
        });
      });
    }
  }]);

  return Security;
}();

exports.default = Security;
//# sourceMappingURL=passport.js.map