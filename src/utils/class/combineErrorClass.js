import {CustomError} from './customErrorClass.js';
import {default as t} from '../../constants/index.js';

const combineErrorHandler = (payload) => {
  const {errorType, errorMessage, errorCode} = payload;
  if (!errorType) {
    throw new Error(
        t.UNKNOWN_ERROR_MESSAGE,
        t.DEFAULT_SERVER_ERROR_CODE,
        t.UNKNOWN_ERROR_TYPE,
    );
  }
  throw new CustomError(errorType, errorMessage, errorCode);
};

export default {combineErrorHandler};
