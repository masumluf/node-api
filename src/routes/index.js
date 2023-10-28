// @ts-check
import express from 'express';
import healthRoute from './healthRoute.js';
import registrationRoute from './registrationRoute.js';
import loginRoute from './loginRoute.js';

const routes = [...healthRoute, ...registrationRoute, ...loginRoute];

const router = express.Router();

routes.forEach((route) => {
  router[route.http](route.path, [...route?.middleware], route.handler);
});

export default router;
