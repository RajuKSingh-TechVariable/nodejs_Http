/**
 * @module httpStatusCodes
 */
/**
 * 200 OK
 * @type {number}
 */
const OK = 200;
/**
 * @type {number}
 */
const CREATED = 201;
/**
 * @type {number}
 */
const NO_CONTENT = 204;
/**
 * @type {number}
 */
const BAD_REQUEST = 400;
/**
 * @type {number}
 */
const UNAUTHORISED = 401;
/**
 * @type {number}
 */
const NOT_FOUND = 404;
/**
 * @type {number}
 */
const INTERNAL_SERVER_ERROR = 500;

module.exports = {
  OK,
  CREATED,
  NO_CONTENT,

  BAD_REQUEST,
  UNAUTHORISED,
  NOT_FOUND,

  INTERNAL_SERVER_ERROR,
};
