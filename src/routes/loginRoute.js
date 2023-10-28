// @ts-check
import { LoginClass } from '../controller/index.js';

import { LoginMiddleware } from '../middleware/index.js';

const loginController = new LoginClass();

const loginMiddleware = new LoginMiddleware();

const loginRoute = [
  {
    http: 'post',
    path: '/login',
    middleware: [
      loginMiddleware.isValidEmailAddress,
      loginMiddleware.checkCredential,
    ],
    handler: async (req, res) => {
      return loginController.loginHandler(req, res);
    },
  },
];

export default loginRoute;
