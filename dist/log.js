'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rotatingFileStream = require('rotating-file-stream');

var _rotatingFileStream2 = _interopRequireDefault(_rotatingFileStream);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logDirectory = _path2.default.join(__dirname, '../log');
if (!_fs2.default.existsSync(logDirectory)) {
  _fs2.default.mkdirSync(logDirectory);
}

var pad = function pad(num) {
  return (num > 9 ? '' : '0') + num;
};

var generator = function generator(time, index) {
  if (!time) {
    return 'file.log';
  }
  var month = time.getFullYear() + ' ' + pad(time.getMonth() + 1);
  var day = pad(time.getDate());
  var hour = pad(time.getHours());
  var minute = pad(time.getMinutes());

  return month + '/' + month + day + '-' + hour + minute + '-' + index + '-file.log';
};

var stream = (0, _rotatingFileStream2.default)(generator, {
  path: logDirectory,
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  compress: 'gzip' // compress rotated files
});

exports.default = (0, _morgan2.default)('dev', { stream: stream });
//# sourceMappingURL=log.js.map