'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// logout routes
router.get('/', function (req, res) {
  req.session.destroy(function () {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
//# sourceMappingURL=logout.js.map