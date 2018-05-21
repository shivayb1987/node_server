import express from 'express';
import ejs from 'ejs';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import helmet from 'helmet';
import redis from 'connect-redis';

import httpMiddlewareLog from './log';
import logger from './logger';
import AppRouting from './routes/routes';
import Security from './security/passport';
// routes

class Server {
  constructor() {
    this.config = this.config.bind(this);
    this.setup = this.setup.bind(this);
    this.template = this.template.bind(this);
    this.security = this.security.bind(this);
    this.routes = this.routes.bind(this);
    this.setup();
  }

  setup() {
    this.app = express();
    this.app.use(httpMiddlewareLog);
    this.config();
  }

  start(port) {
    this.app.listen(port, () => {
      logger.debug('listening on port', port);
    });
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // this.app.use('/data', express.static('public'));

    // const RedisStore = redis(session);
    // this.app.use(session({
    //   store: new RedisStore({
    //     host: '127.0.0.1',
    //     port: 6379,
    //   }),
    //   secret: 'this_is_session_secret_key',
    //   resave: false,
    //   rolling: true,
    //   saveUninitialized: false,
    //   cookie: { expires: 3600000 },
    // }));
    this.app.use(session({
      secret: 'this_is_session_secret_key',
      cookie: { expires: 3600000 },
      resave: false,
      saveUninitialized: false
    }));
    this.template();
    this.security();
    this.routes();
  }

  template() {
    this.app.engine('html', ejs.renderFile);
    this.app.set('view engine', 'html');
  }

  security() {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(helmet());
    Security.configure();
  }

  routes() {
    const router = new AppRouting(this.app);
    router.routes();
  }
}

const server = new Server();
server.start(4000);
