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
 * The OperationMessage model module.
 * @module model/OperationMessage
 * @version 1.4.0
 */
var OperationMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OperationMessage</code>.
   * @alias module:model/OperationMessage
   * @param message {String} The human-readable message that describes the result.
   * @param statusCode {Number} The status code of the response.
   */
  function OperationMessage(message, statusCode) {
    _classCallCheck(this, OperationMessage);

    OperationMessage.initialize(this, message, statusCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OperationMessage, null, [{
    key: "initialize",
    value: function initialize(obj, message, statusCode) {
      obj['message'] = message;
      obj['statusCode'] = statusCode;
    }
    /**
     * Constructs a <code>OperationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationMessage} obj Optional instance to populate.
     * @return {module:model/OperationMessage} The populated <code>OperationMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OperationMessage();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('statusCode')) {
          obj['statusCode'] = _ApiClient["default"].convertToType(data['statusCode'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OperationMessage;
}();
/**
 * The human-readable message that describes the result.
 * @member {String} message
 */


OperationMessage.prototype['message'] = undefined;
/**
 * The status code of the response.
 * @member {Number} statusCode
 */

OperationMessage.prototype['statusCode'] = undefined;
var _default = OperationMessage;
exports["default"] = _default;