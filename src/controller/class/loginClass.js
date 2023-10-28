import { RouteResponse } from '../../utils/index.js';
import { DatabaseService } from '../../service/index.js';
import { default as t } from '../../constants/index.js';

export class LoginClass {
  constructor() {
    this.routeResponse = new RouteResponse();
    this.userService = new DatabaseService();
  }
  async loginHandler(req, res) {
    try {
      const { email } = req.body;
      const user = await this.userService.findOneByEmail(email);
      const userProfile = this.decorateUserInfo(user);
      return this.routeResponse.responseWithData(res, userProfile);
    } catch (error) {
      return this.routeResponse.responseWithError(error.message, t.DEFAULT_SERVER_ERROR_CODE, res);
    }
  }
  decorateUserInfo(user={}) {
    return {
      fullName: user.name,
      userId: user._id,
      username: user.username,
    };
  }
}
