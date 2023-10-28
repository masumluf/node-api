//@ts-check
import express from "express";
import healthRoute from "./healthRoute.js";
import registrationRoute from './registrationRoute.js';


const routes = [...healthRoute, ...registrationRoute];

let router = express.Router();

routes.forEach((route) => {
  router[route.http](route.path, [...route?.middleware], route.handler);
});

export default router;
