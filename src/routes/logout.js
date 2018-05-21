import express from 'express';

const router = express.Router();

// logout routes
router.get('/', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
