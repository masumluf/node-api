import { RouteResponse } from '../../utils/index.js';
import { DatabaseService } from '../../service/index.js';
import { default as t } from '../../constants';

export class RegistrationClass {
  constructor() {
    this.routeResponse = new RouteResponse();
  }
  async registrationHandler(req, res) {
    try {
      const userClassService = new DatabaseService();
      await userClassService.createUser(req.body);
      return this.routeResponse.responseWithData(res, t.REGISTRATION_SUCCESS_MESSAGE);
    } catch (error) {
      return this.routeResponse.responseWithError(error.message, t.DEFAULT_SERVER_ERROR_CODE, res);
    }
  }
}
