//@ts-check
import { default as t } from "../../constants";
import { combineError } from "../index.js";
class RouteResponse {
  applicationHealth(res) {
    return res
      .status(t.OK_STATUS_CODE)
      .json({ data: t.APPLICATION_HEALTH_RESPONSE })
      .end();
  }

  responseWithData(res, data = null) {
    return res.status(t.OK_STATUS_CODE).json({ data }).end();
  }

  responseWithError(
    errorMessage = t.UNKNOWN_ERROR_MESSAGE,
    errorCode = t.DEFAULT_ERROR_CODE,
    res
  ) {
    return res.status(errorCode).json({ data: errorMessage }).end();
  }

  responseWithErrorClass(errorType, errorMessage, errorCode) {
    const payload = { errorType, errorMessage, errorCode };
    return combineError.combineErrorHandler(payload);
  }
}

export default RouteResponse;
