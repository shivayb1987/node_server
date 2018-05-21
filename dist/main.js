'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _connectRedis = require('connect-redis');

var _connectRedis2 = _interopRequireDefault(_connectRedis);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

var _passport3 = require('./security/passport');

var _passport4 = _interopRequireDefault(_passport3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// routes

var Server = function () {
  function Server() {
    _classCallCheck(this, Server);

    this.config = this.config.bind(this);
    this.setup = this.setup.bind(this);
    this.template = this.template.bind(this);
    this.security = this.security.bind(this);
    this.routes = this.routes.bind(this);
    this.setup();
  }

  _createClass(Server, [{
    key: 'setup',
    value: function setup() {
      this.app = (0, _express2.default)();
      this.app.use(_log2.default);
      this.config();
    }
  }, {
    key: 'start',
    value: function start(port) {
      this.app.listen(port, function () {
        _logger2.default.debug('listening on port', port);
      });
    }
  }, {
    key: 'config',
    value: function config() {
      this.app.use(_bodyParser2.default.json());
      this.app.use((0, _cookieParser2.default)());
      this.app.use(_bodyParser2.default.urlencoded({ extended: false }));
      var RedisStore = (0, _connectRedis2.default)(_expressSession2.default);
      this.app.use((0, _expressSession2.default)({
        store: new RedisStore({
          host: '127.0.0.1',
          port: 6379
        }),
        secret: 'this_is_session_secret_key',
        resave: false,
        rolling: true,
        saveUninitialized: false,
        cookie: { expires: 3600000 }
      }));
      this.template();
      this.security();
      this.routes();
    }
  }, {
    key: 'template',
    value: function template() {
      this.app.engine('html', _ejs2.default.renderFile);
      this.app.set('view engine', 'html');
    }
  }, {
    key: 'security',
    value: function security() {
      this.app.use(_passport2.default.initialize());
      this.app.use(_passport2.default.session());
      this.app.use((0, _helmet2.default)());
      _passport4.default.configure();
    }
  }, {
    key: 'routes',
    value: function routes() {
      var router = new _routes2.default(this.app);
      router.routes();
    }
  }]);

  return Server;
}();

var server = new Server();
server.start(4000);
//# sourceMappingURL=main.js.map