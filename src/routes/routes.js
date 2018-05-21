import users from './users';
import data from './data';
import auth from './auth';
import logout from './logout';
import authMiddleware from './middleware/login';

export default class AppRouting {
  constructor(app) {
    this.app = app;
  }
  routes() {
    this.app.all('*', authMiddleware);
    this.app.use('/login', auth);
    this.app.use('/logout', logout);
    this.app.use('/users', users);
    this.app.use('/data', data);
  }
}
