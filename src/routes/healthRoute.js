// @ts-check

import {HealthApiClass} from '../controller/index.js';


const healthController = new HealthApiClass();

const healthRoute = [
  {
    http: 'get',
    path: '/health',
    middleware: [],
    handler: async (_req, res) => {
      return healthController.healthHandler(res);
    },
  },
];

export default healthRoute;
