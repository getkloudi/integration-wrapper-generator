"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AssignedPrivateIpAddress = _interopRequireDefault(require("./AssignedPrivateIpAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AssignPrivateIpAddressesResult model module.
 * @module model/AssignPrivateIpAddressesResult
 * @version 1.0.0
 */
var AssignPrivateIpAddressesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssignPrivateIpAddressesResult</code>.
   * @alias module:model/AssignPrivateIpAddressesResult
   */
  function AssignPrivateIpAddressesResult() {
    _classCallCheck(this, AssignPrivateIpAddressesResult);

    AssignPrivateIpAddressesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssignPrivateIpAddressesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssignPrivateIpAddressesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignPrivateIpAddressesResult} obj Optional instance to populate.
     * @return {module:model/AssignPrivateIpAddressesResult} The populated <code>AssignPrivateIpAddressesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignPrivateIpAddressesResult();

        if (data.hasOwnProperty('AssignedPrivateIpAddresses')) {
          obj['AssignedPrivateIpAddresses'] = _ApiClient["default"].convertToType(data['AssignedPrivateIpAddresses'], [_AssignedPrivateIpAddress["default"]]);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssignPrivateIpAddressesResult;
}();
/**
 * @member {Array.<module:model/AssignedPrivateIpAddress>} AssignedPrivateIpAddresses
 */


AssignPrivateIpAddressesResult.prototype['AssignedPrivateIpAddresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

AssignPrivateIpAddressesResult.prototype['NetworkInterfaceId'] = undefined;
var _default = AssignPrivateIpAddressesResult;
exports["default"] = _default;