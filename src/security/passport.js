import passport from 'passport';
import pl from 'passport-local';
import logger from '../logger';

const LocalStrategy = pl.Strategy;
export default class Security {
  static configure() {
    passport.use('local-login', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    }, (req, username, password, done) => {
      logger.debug('Inside local-login with username: ', username);
      if (username === 'admin' && password === 'password') {
        return done(null, {
          username: 'admin',
          author: 'auther',
          id: 2,
        });
      }
      return done(null, false, { message: 'Incorrect username/password.' });
    }));
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      done(null, {
        id: 2,
        name: 'parmod',
      });
    });
  }
}
