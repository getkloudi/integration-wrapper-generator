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
 * The GetPasswordDataResult model module.
 * @module model/GetPasswordDataResult
 * @version 1.1.0
 */
var GetPasswordDataResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetPasswordDataResult</code>.
   * @alias module:model/GetPasswordDataResult
   */
  function GetPasswordDataResult() {
    _classCallCheck(this, GetPasswordDataResult);

    GetPasswordDataResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPasswordDataResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPasswordDataResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPasswordDataResult} obj Optional instance to populate.
     * @return {module:model/GetPasswordDataResult} The populated <code>GetPasswordDataResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPasswordDataResult();

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('PasswordData')) {
          obj['PasswordData'] = _ApiClient["default"].convertToType(data['PasswordData'], 'String');
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return GetPasswordDataResult;
}();
/**
 * @member {String} InstanceId
 */


GetPasswordDataResult.prototype['InstanceId'] = undefined;
/**
 * @member {String} PasswordData
 */

GetPasswordDataResult.prototype['PasswordData'] = undefined;
/**
 * @member {Date} Timestamp
 */

GetPasswordDataResult.prototype['Timestamp'] = undefined;
var _default = GetPasswordDataResult;
exports["default"] = _default;