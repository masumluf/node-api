import { default as t } from "../../constants/index.js";
export class CustomError extends Error {
  constructor(
    errorMessage = t.UNKNOWN_ERROR_MESSAGE,
    errorCode = t.DEFAULT_SERVER_ERROR_CODE,
    errorType = t.UNKNOWN_ERROR_TYPE
  ) {
    const isObject = typeof errorMessage === "object";
    super(isObject ? JSON.stringify(errorMessage) : errorMessage);
    this.name = errorType;
    this.jsonBody = isObject ? errorMessage : undefined;
    this.errorCode = errorCode;
  }
}