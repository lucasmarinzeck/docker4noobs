/* eslint-disable prefer-destructuring */
class AuthenticationError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'AuthenticationError';
    this.errorCode = args[1];
    this.errorMessage = args[0];
    this.message = 'Failed to authenticate';
    Error.captureStackTrace(this, AuthenticationError);
  }
}

module.exports = AuthenticationError;
