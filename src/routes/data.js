import express from 'express';
import path from 'path';

const router = express.Router();
const fs = require('fs');
/*
  /users
*/

router.get('/:requestId', (req, res) => {
  console.log('requestId', req.params);
  const file = fs.readFileSync(path.join(__dirname, '../../public/', req.params.requestId));
  res.json(JSON.parse(file));
});
module.exports = router;
