//@ts-check
// @ts-ignore
import express, { Response, NextFunction } from "express";
import { RegistrationClass } from "../controller/index.js";

import  RegistrationMiddleware  from '../utils/class/registrationMiddleware.js';

const registrationController = new RegistrationClass();

const registrationMiddleware = new RegistrationMiddleware();

const registrationRoute = [
  {
    http: "post",
    path: "/signup",
    middleware: [registrationMiddleware.isValidEmailAddress, registrationMiddleware.isUniqueUserName],
    handler: async (req, res) => {
      return registrationController.registrationHandler(req, res);
    }
  }
];

export default registrationRoute;
