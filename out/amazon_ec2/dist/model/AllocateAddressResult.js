"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DomainType = _interopRequireDefault(require("./DomainType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AllocateAddressResult model module.
 * @module model/AllocateAddressResult
 * @version 1.0.0
 */
var AllocateAddressResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AllocateAddressResult</code>.
   * @alias module:model/AllocateAddressResult
   */
  function AllocateAddressResult() {
    _classCallCheck(this, AllocateAddressResult);

    AllocateAddressResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AllocateAddressResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AllocateAddressResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllocateAddressResult} obj Optional instance to populate.
     * @return {module:model/AllocateAddressResult} The populated <code>AllocateAddressResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllocateAddressResult();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('CustomerOwnedIp')) {
          obj['CustomerOwnedIp'] = _ApiClient["default"].convertToType(data['CustomerOwnedIp'], 'String');
        }

        if (data.hasOwnProperty('CustomerOwnedIpv4Pool')) {
          obj['CustomerOwnedIpv4Pool'] = _ApiClient["default"].convertToType(data['CustomerOwnedIpv4Pool'], 'String');
        }

        if (data.hasOwnProperty('Domain')) {
          obj['Domain'] = _DomainType["default"].constructFromObject(data['Domain']);
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }

        if (data.hasOwnProperty('PublicIpv4Pool')) {
          obj['PublicIpv4Pool'] = _ApiClient["default"].convertToType(data['PublicIpv4Pool'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AllocateAddressResult;
}();
/**
 * @member {String} AllocationId
 */


AllocateAddressResult.prototype['AllocationId'] = undefined;
/**
 * @member {String} CustomerOwnedIp
 */

AllocateAddressResult.prototype['CustomerOwnedIp'] = undefined;
/**
 * @member {String} CustomerOwnedIpv4Pool
 */

AllocateAddressResult.prototype['CustomerOwnedIpv4Pool'] = undefined;
/**
 * @member {module:model/DomainType} Domain
 */

AllocateAddressResult.prototype['Domain'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

AllocateAddressResult.prototype['NetworkBorderGroup'] = undefined;
/**
 * @member {String} PublicIp
 */

AllocateAddressResult.prototype['PublicIp'] = undefined;
/**
 * @member {String} PublicIpv4Pool
 */

AllocateAddressResult.prototype['PublicIpv4Pool'] = undefined;
var _default = AllocateAddressResult;
exports["default"] = _default;