'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var users = [{
  id: 1,
  username: 'parmodkumar',
  firstName: 'parmod',
  lastName: 'kumar'
}, {
  id: 2,
  username: 'shivaky',
  firstName: 'shiva',
  lastName: 'kumar'
}, {
  id: 3,
  username: 'nagaraju',
  firstName: 'naga',
  lastName: 'raju'
}];

/*
  /users
*/

router.get('/', function (req, res) {
  res.json(users);
});

router.get('/:userId', function (req, res) {
  res.json(users[0]);
});

module.exports = router;
//# sourceMappingURL=users.js.map