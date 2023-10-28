import { default as t } from '../../constants/index.js';
import { RouteResponse } from '../../utils/index.js';
import { DatabaseService } from '../../service/index.js';

class RegistrationMiddleware extends RouteResponse {
  constructor() {
    super();
    this.isValidEmailAddress = this.isValidEmailAddress.bind(this);
    this.isUniqueUserName = this.isUniqueUserName.bind(this);
    this.userService = new DatabaseService();
  }

  async isValidEmailAddress(req, res, next) {
    const { email } = req.body;

    if (!email) {
      return this.responseWithError(
          t.EMPTY_EMAIL_ERROR_MESSAGE,
          t.DEFAULT_VALIDATION_ERROR_CODE,
          res,
      );
    }

    const emailRegexString = t.EMAIL_ADDRESS_VALIDATION_REGEX_STRING;

    if (!emailRegexString.test(email)) {
      return this.responseWithError(
          t.BAD_EMAIL_ERROR_MESSAGE,
          t.DEFAULT_VALIDATION_ERROR_CODE,
          res,
      );
    }

    if (await this.userService.findOneByEmail(email)) {
      return this.responseWithError(
          t.DUPLICATE_EMAIL_ERROR_MESSAGE,
          t.DEFAULT_ERROR_CODE,
          res,
      );
    }

    next();
  }

  async isUniqueUserName(req, res, next) {
    const { username } = req.body;
    const user = await this.userService.findOneByUsername(username);
    if (user) {
      return this.responseWithError(
          t.DUPLICATE_USERNAME_ERROR_MESSAGE,
          t.DEFAULT_ERROR_CODE,
          res,
      );
    }
    next();
  }
}

export default RegistrationMiddleware;
