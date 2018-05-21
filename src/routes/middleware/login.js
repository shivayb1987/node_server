import logger from '../../logger';

const authMiddleware = (req, res, next) => {
  // do any checks you want to in here
  logger.debug('Inside authMiddleware', req.path);
  const nonSecurePaths = ['/login'];
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // if (nonSecurePaths.indexOf(req.path) > -1) {
  //   next();
  //   return;
  // } else if (req.user) {
  //   // you can do this however you want with whatever variables you set up
  //   next();
  //   return;
  // }
  // // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
  // res.redirect('/login');
  next();
};

module.exports = authMiddleware;
