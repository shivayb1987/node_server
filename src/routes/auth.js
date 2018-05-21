import express from 'express';
import passport from 'passport';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  // middleware
  // Website you wish to allow to connect
  next();
});

// define the about route
// router.get('/', (req, res) => {
//   res.render('login.html', { title: 'World' });
// });

router.post('/', passport.authenticate('local-login', {
  successRedirect: '/users/2',
  failureRedirect: '/login',
}));

module.exports = router;
