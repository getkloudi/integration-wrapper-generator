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
 * The CoipAddressUsage model module.
 * @module model/CoipAddressUsage
 * @version 1.1.0
 */
var CoipAddressUsage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CoipAddressUsage</code>.
   * Describes address usage for a customer-owned address pool.
   * @alias module:model/CoipAddressUsage
   */
  function CoipAddressUsage() {
    _classCallCheck(this, CoipAddressUsage);

    CoipAddressUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoipAddressUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoipAddressUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoipAddressUsage} obj Optional instance to populate.
     * @return {module:model/CoipAddressUsage} The populated <code>CoipAddressUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoipAddressUsage();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('AwsAccountId')) {
          obj['AwsAccountId'] = _ApiClient["default"].convertToType(data['AwsAccountId'], 'String');
        }

        if (data.hasOwnProperty('AwsService')) {
          obj['AwsService'] = _ApiClient["default"].convertToType(data['AwsService'], 'String');
        }

        if (data.hasOwnProperty('CoIp')) {
          obj['CoIp'] = _ApiClient["default"].convertToType(data['CoIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CoipAddressUsage;
}();
/**
 * @member {String} AllocationId
 */


CoipAddressUsage.prototype['AllocationId'] = undefined;
/**
 * @member {String} AwsAccountId
 */

CoipAddressUsage.prototype['AwsAccountId'] = undefined;
/**
 * @member {String} AwsService
 */

CoipAddressUsage.prototype['AwsService'] = undefined;
/**
 * @member {String} CoIp
 */

CoipAddressUsage.prototype['CoIp'] = undefined;
var _default = CoipAddressUsage;
exports["default"] = _default;