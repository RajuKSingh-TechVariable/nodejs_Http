/* eslint-disable max-classes-per-file */
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  UNAUTHORISED,
  NOT_FOUND,
  NO_CONTENT,
  OK,
  CREATED,
} = require('./constants/httpStatusCodes');
const httpStatusCodes = require('./constants/httpStatusCodes');
/**
 * @module ErrorResponses
 */
/**
 * class to create a HttpErrorBase object
 */

class HttpErrorBase {
  /**
   * @param {number} statusCode - Http Error Response Status Code
   * @param {string} message - Http Error message
   * @returns {void}
   */
  constructor(statusCode, message) {
    /**
     * @property {number} statusCode - Http response status code
     */
    this.statusCode = statusCode;
    /**
     * @property {string} message - Http error message
     */
    this.message = message;
  }
}

/**
 * HttpBadRequest
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpBadRequest object
 */

class HttpBadRequest extends HttpErrorBase {
  /**
   * @param {string} message - Http Error message
   * @param {Object} error
   * @returns {void}
   */
  constructor(message, error) {
    /**
     * @param {number} BAD_REQUEST
     * @param {string} message
     */
    super(BAD_REQUEST, message);
    /**
     * @property {Object} error
     */
    this.error = error;
  }
}

/**
 * HttpInternalServerError
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpInternalServer object
 */
class HttpInternalServer extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} INTERNAL_SERVER_ERROR
     * @param {string} message
     * @returns {void}
     */
    super(INTERNAL_SERVER_ERROR, message);
  }
}
/**
 * HttpNotFound
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpNotFound object
 */

class HttpNotFound extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} NOT_FOUND
     * @param {string} message
     * @returns {void}
     */
    super(NOT_FOUND, message);
  }
}
/**
 * HttpUnauthorised
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpUnauthorised object
 */

class HttpUnauthorised extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} UNAUTHORISED
     * @param {string} message
     * @returns {void}
     */
    super(UNAUTHORISED, message);
  }
}

/**
 * @module SuccesResponses
 */
/**
 * class to create a HttpSuccesBase object
 */
class HttpSuccesBase {
  /**
   * @param {number} statusCode - Http Response Status Code
   * @returns {void}
   */
  constructor(statusCode) {
    /**
     * @property {number} statusCode - Http response status code
     */

    this.statusCode = statusCode;
  }
}

/**
 * HttpAvatar
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpAvatar object
 */

class HttpFileOk extends HttpSuccesBase {
  /**
   * @param {Object} payload - Response Payload
   * @returns {void}
   */
  constructor(payload) {
    /**
     * @param {number} OK
     * @returns {void}
     */
    super(OK);
    /**
     * @property {Object} payload - Http response status code
     */
    this.payload = payload;
  }
}
/**
 * HttpSuccesCreated
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpSuccesCreated object
 */
class HttpSuccesCreated extends HttpSuccesBase {
  /**
   * @param {Object} payload - Response Payload
   * @returns {void}
   */
  constructor(payload) {
    /**
     * @param {number} CREATED
     * @returns {void}
     */
    super(CREATED);
    /**
     * @property {Object} payload - Http response status code
     */
    this.payload = payload;
  }
}

/**
 * HttpNoContent
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpNoContent object
 */

class HttpNoContent extends HttpSuccesBase {
  /**
   * @param {void}
   * @returns {void}
   */
  constructor() {
    /**
     * @param {number} NO_CONTENT
     * @returns {void}
     */
    super(NO_CONTENT);
  }
}

/**
 * HttpSuccesOK
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpSuccesOK object
 */

class HttpSuccesOK extends HttpSuccesBase {
  /**
   * @param {Object} payload - Response Payload
   * @returns {void}
   */
  constructor(payload) {
    /**
     * @param {number} OK
     * @returns {void}
     */
    super(OK);
    /**
     * @property {Object} payload - Http response status code
     */
    this.payload = payload;
  }
}

module.exports = {
  HttpErrorBase,
  HttpBadRequest,
  HttpInternalServer,
  HttpNotFound,
  HttpUnauthorised,
  HttpSuccesOK,
  HttpSuccesBase,
  HttpFileOk,
  HttpNoContent,
  HttpSuccesCreated,
  httpStatusCodes,
};
