import bcrypt from 'bcrypt';
import { default as t } from '../../constants/index.js';
import { RouteResponse } from '../../utils/index.js';
import { DatabaseService } from '../../service/index.js';

class LoginMiddleware extends RouteResponse {
  constructor() {
    super();
    this.checkCredential = this.checkCredential.bind(this);
    this.isValidEmailAddress = this.isValidEmailAddress.bind(this);
    this.userService = new DatabaseService();
  }

  isValidEmailAddress(req, res, next) {
    const { email } = req.body;
    const emailRegexString = t.EMAIL_ADDRESS_VALIDATION_REGEX_STRING;

    if (!emailRegexString.test(email)) {
      return this.responseWithError(
          t.BAD_EMAIL_ERROR_MESSAGE,
          t.DEFAULT_VALIDATION_ERROR_CODE,
          res,
      );
    }

    next();
  }

  async checkCredential(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await this.userService.findOneByEmail(email);
      if (!user) {
        return this.responseWithError(
            t.DEFAULT_RESOURCE_NOT_FOUND_MESSAGE,
            t.NOT_FOUND_ERROR_CODE,
            res,
        );
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return this.responseWithError(
            t.DEFAULT_CREDENTIAL_ERROR_MESSAGE,
            t.CREDENTIAL_ERROR_CODE,
            res,
        );
      }
      next();
    } catch (error) {
      console.log(error);
      this.responseWithErrorClass(
          t.UNKNOWN_ERROR_MESSAGE,
          t.DEFAULT_SERVER_ERROR_CODE,
          'CheckCredential_PASSWORD',
      );
    }
  }
}

export default LoginMiddleware;
