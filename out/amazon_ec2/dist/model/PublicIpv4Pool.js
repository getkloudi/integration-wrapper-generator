"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PublicIpv4PoolRange = _interopRequireDefault(require("./PublicIpv4PoolRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PublicIpv4Pool model module.
 * @module model/PublicIpv4Pool
 * @version 1.0.0
 */
var PublicIpv4Pool =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PublicIpv4Pool</code>.
   * Describes an address pool.
   * @alias module:model/PublicIpv4Pool
   */
  function PublicIpv4Pool() {
    _classCallCheck(this, PublicIpv4Pool);

    PublicIpv4Pool.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicIpv4Pool, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PublicIpv4Pool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicIpv4Pool} obj Optional instance to populate.
     * @return {module:model/PublicIpv4Pool} The populated <code>PublicIpv4Pool</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicIpv4Pool();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('PoolAddressRanges')) {
          obj['PoolAddressRanges'] = _ApiClient["default"].convertToType(data['PoolAddressRanges'], [_PublicIpv4PoolRange["default"]]);
        }

        if (data.hasOwnProperty('PoolId')) {
          obj['PoolId'] = _ApiClient["default"].convertToType(data['PoolId'], 'String');
        }

        if (data.hasOwnProperty('TotalAddressCount')) {
          obj['TotalAddressCount'] = _ApiClient["default"].convertToType(data['TotalAddressCount'], 'Number');
        }

        if (data.hasOwnProperty('TotalAvailableAddressCount')) {
          obj['TotalAvailableAddressCount'] = _ApiClient["default"].convertToType(data['TotalAvailableAddressCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PublicIpv4Pool;
}();
/**
 * @member {String} Description
 */


PublicIpv4Pool.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/PublicIpv4PoolRange>} PoolAddressRanges
 */

PublicIpv4Pool.prototype['PoolAddressRanges'] = undefined;
/**
 * @member {String} PoolId
 */

PublicIpv4Pool.prototype['PoolId'] = undefined;
/**
 * @member {Number} TotalAddressCount
 */

PublicIpv4Pool.prototype['TotalAddressCount'] = undefined;
/**
 * @member {Number} TotalAvailableAddressCount
 */

PublicIpv4Pool.prototype['TotalAvailableAddressCount'] = undefined;
var _default = PublicIpv4Pool;
exports["default"] = _default;