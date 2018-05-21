'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _logout = require('./logout');

var _logout2 = _interopRequireDefault(_logout);

var _login = require('./middleware/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRouting = function () {
  function AppRouting(app) {
    _classCallCheck(this, AppRouting);

    this.app = app;
  }

  _createClass(AppRouting, [{
    key: 'routes',
    value: function routes() {
      this.app.all('*', _login2.default);
      this.app.use('/login', _auth2.default);
      this.app.use('/logout', _logout2.default);
      this.app.use('/users', _users2.default);
    }
  }]);

  return AppRouting;
}();

exports.default = AppRouting;
//# sourceMappingURL=routes.js.map