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
 * The PublicIpv4PoolRange model module.
 * @module model/PublicIpv4PoolRange
 * @version 1.1.0
 */
var PublicIpv4PoolRange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PublicIpv4PoolRange</code>.
   * Describes an address range of an IPv4 address pool.
   * @alias module:model/PublicIpv4PoolRange
   */
  function PublicIpv4PoolRange() {
    _classCallCheck(this, PublicIpv4PoolRange);

    PublicIpv4PoolRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicIpv4PoolRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PublicIpv4PoolRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicIpv4PoolRange} obj Optional instance to populate.
     * @return {module:model/PublicIpv4PoolRange} The populated <code>PublicIpv4PoolRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicIpv4PoolRange();

        if (data.hasOwnProperty('AddressCount')) {
          obj['AddressCount'] = _ApiClient["default"].convertToType(data['AddressCount'], 'Number');
        }

        if (data.hasOwnProperty('AvailableAddressCount')) {
          obj['AvailableAddressCount'] = _ApiClient["default"].convertToType(data['AvailableAddressCount'], 'Number');
        }

        if (data.hasOwnProperty('FirstAddress')) {
          obj['FirstAddress'] = _ApiClient["default"].convertToType(data['FirstAddress'], 'String');
        }

        if (data.hasOwnProperty('LastAddress')) {
          obj['LastAddress'] = _ApiClient["default"].convertToType(data['LastAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PublicIpv4PoolRange;
}();
/**
 * @member {Number} AddressCount
 */


PublicIpv4PoolRange.prototype['AddressCount'] = undefined;
/**
 * @member {Number} AvailableAddressCount
 */

PublicIpv4PoolRange.prototype['AvailableAddressCount'] = undefined;
/**
 * @member {String} FirstAddress
 */

PublicIpv4PoolRange.prototype['FirstAddress'] = undefined;
/**
 * @member {String} LastAddress
 */

PublicIpv4PoolRange.prototype['LastAddress'] = undefined;
var _default = PublicIpv4PoolRange;
exports["default"] = _default;