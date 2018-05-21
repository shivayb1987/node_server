'use strict';

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var level = process.env.LOG_LEVEL || 'info';

var logger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    level: level,
    timestamp: function timestamp() {
      return new Date().toISOString();
    }
  })]
});

module.exports = logger;
//# sourceMappingURL=logger.js.map