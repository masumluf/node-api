import { RouteResponse } from "../../utils/index.js";
import { DatabaseService } from "../../service/index.js";

export class RegistrationClass {
  constructor() {
    this.routeResponse = new RouteResponse();
  }
  async registrationHandler(req, res) {
   try {
     const userClassService = new DatabaseService();
     await userClassService.createUser(req.body);
     return this.routeResponse.responseWithData(res, req.body);
   } catch (error) {
      console.log(error, 'error registration');
      // return this.routeResponse.responseWithError();
   }
  }
}
