"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErrorError model module.
 * @module model/ErrorError
 * @version 1.0.0
 */
var ErrorError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias module:model/ErrorError
   * @param message {String} 
   */
  function ErrorError(message) {
    _classCallCheck(this, ErrorError);

    ErrorError.initialize(this, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorError, null, [{
    key: "initialize",
    value: function initialize(obj, message) {
      obj['message'] = message;
    }
    /**
     * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorError} obj Optional instance to populate.
     * @return {module:model/ErrorError} The populated <code>ErrorError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorError();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorError;
}();
/**
 * Optional structured data that is endpoint-specific.
 * @member {Object} data
 */


ErrorError.prototype['data'] = undefined;
/**
 * @member {String} detail
 */

ErrorError.prototype['detail'] = undefined;
/**
 * @member {String} message
 */

ErrorError.prototype['message'] = undefined;
var _default = ErrorError;
exports["default"] = _default;