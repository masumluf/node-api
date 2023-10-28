import User from "../../models/user.js";
import { RouteResponse } from '../../utils/index.js';
import { default as t } from "../../constants/index.js";
class DatabaseService extends RouteResponse {

  async findOneByUsername(username = null) {
    try {
      return await User.findOne({ username });
    } catch (error) {
      return this.responseWithErrorClass(t.DEFAULT_DB_ERROR_MESSAGE, t.DEFAULT_SERVER_ERROR_CODE, 'DB');
    }
  }
  async findOneByUserId(_id = null) {}
  async findOneByEmail(email = null) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      return this.responseWithErrorClass(
        t.DEFAULT_DB_ERROR_MESSAGE,
        t.DEFAULT_SERVER_ERROR_CODE,
        "DB"
      );
    }
  }
  async createUser(payload) {
    const user = new User(payload);
    await user.save();
    return true;
  }
}

export default DatabaseService;
