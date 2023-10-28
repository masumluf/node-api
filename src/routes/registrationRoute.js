// @ts-check
// @ts-ignore
import {RegistrationClass} from '../controller/index.js';

import { RegistrationMiddleware } from '../middleware/index.js';

const registrationController = new RegistrationClass();

const registrationMiddleware = new RegistrationMiddleware();

const registrationRoute = [
  {
    http: 'post',
    path: '/signup',
    middleware: [
      registrationMiddleware.isValidEmailAddress,
      registrationMiddleware.isUniqueUserName,
    ],
    handler: async (req, res) => {
      return registrationController.registrationHandler(req, res);
    },
  },
];

export default registrationRoute;
