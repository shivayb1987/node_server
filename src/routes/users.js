import express from 'express';
import users from '../data/users.json';

const router = express.Router();
const fs = require('fs');
/*
  /users
*/

router.get('/', () => {

}, (req, res) => {
  res.json(users);
});

router.get('/:userId', (req, res) => {
  res.json(users[0]);
});

module.exports = router;
