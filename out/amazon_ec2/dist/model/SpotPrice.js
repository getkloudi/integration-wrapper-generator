"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _RIProductDescription = _interopRequireDefault(require("./RIProductDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotPrice model module.
 * @module model/SpotPrice
 * @version 1.0.0
 */
var SpotPrice =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotPrice</code>.
   * Describes the maximum price per hour that you are willing to pay for a Spot Instance.
   * @alias module:model/SpotPrice
   */
  function SpotPrice() {
    _classCallCheck(this, SpotPrice);

    SpotPrice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotPrice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotPrice} obj Optional instance to populate.
     * @return {module:model/SpotPrice} The populated <code>SpotPrice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotPrice();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('ProductDescription')) {
          obj['ProductDescription'] = _RIProductDescription["default"].constructFromObject(data['ProductDescription']);
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SpotPrice;
}();
/**
 * @member {String} AvailabilityZone
 */


SpotPrice.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

SpotPrice.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/RIProductDescription} ProductDescription
 */

SpotPrice.prototype['ProductDescription'] = undefined;
/**
 * @member {String} SpotPrice
 */

SpotPrice.prototype['SpotPrice'] = undefined;
/**
 * @member {Date} Timestamp
 */

SpotPrice.prototype['Timestamp'] = undefined;
var _default = SpotPrice;
exports["default"] = _default;