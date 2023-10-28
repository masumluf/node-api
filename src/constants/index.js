// @ts-check
import 'dotenv/config';
require('dotenv').config();
export default {
  APPLICATION_HEALTH_RESPONSE: 'Application is up and running...',
  OK_STATUS_CODE: 200,
  DEFAULT_ERROR_CODE: 400,
  DEFAULT_VALIDATION_ERROR_CODE: 422,
  DEFAULT_SERVER_ERROR_CODE: 500,
  NOT_FOUND_ERROR_CODE: 404,
  CREDENTIAL_ERROR_CODE: 401,
  UNKNOWN_ERROR_MESSAGE: 'Unknown error occurred',
  UNKNOWN_ERROR_TYPE: 'UnknownError',
  BAD_REQUEST: 'Bad Request',
  DEFAULT_MONGODB_URL: process.env.MONGODB_URL,
  EMPTY_EMAIL_ERROR_MESSAGE: 'Email Address required.',
  BAD_EMAIL_ERROR_MESSAGE: 'Invalid Email Address.',
  EMPTY_USERNAME_ERROR_MESSAGE: 'Username is required.',
  DUPLICATE_EMAIL_ERROR_MESSAGE:
    'Duplicate Email Found.Email address should be unique.',
  DUPLICATE_USERNAME_ERROR_MESSAGE:
    'Duplicate Username Found.Username should be unique.',
  EMPTY_NAME_ERROR_MESSAGE: 'Name field is required.',
  EMPTY_PASSWORD_ERROR_MESSAGE: 'Password field is required.',
  EMAIL_ADDRESS_VALIDATION_REGEX_STRING:
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  DEFAULT_DB_ERROR_MESSAGE: 'Database Service Error',
};
