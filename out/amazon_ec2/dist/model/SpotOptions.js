"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpotAllocationStrategy = _interopRequireDefault(require("./SpotAllocationStrategy"));

var _SpotInstanceInterruptionBehavior = _interopRequireDefault(require("./SpotInstanceInterruptionBehavior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotOptions model module.
 * @module model/SpotOptions
 * @version 1.0.0
 */
var SpotOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotOptions</code>.
   * Describes the configuration of Spot Instances in an EC2 Fleet.
   * @alias module:model/SpotOptions
   */
  function SpotOptions() {
    _classCallCheck(this, SpotOptions);

    SpotOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotOptions} obj Optional instance to populate.
     * @return {module:model/SpotOptions} The populated <code>SpotOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotOptions();

        if (data.hasOwnProperty('AllocationStrategy')) {
          obj['AllocationStrategy'] = _SpotAllocationStrategy["default"].constructFromObject(data['AllocationStrategy']);
        }

        if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
          obj['InstanceInterruptionBehavior'] = _SpotInstanceInterruptionBehavior["default"].constructFromObject(data['InstanceInterruptionBehavior']);
        }

        if (data.hasOwnProperty('InstancePoolsToUseCount')) {
          obj['InstancePoolsToUseCount'] = _ApiClient["default"].convertToType(data['InstancePoolsToUseCount'], 'Number');
        }

        if (data.hasOwnProperty('MaxTotalPrice')) {
          obj['MaxTotalPrice'] = _ApiClient["default"].convertToType(data['MaxTotalPrice'], 'String');
        }

        if (data.hasOwnProperty('MinTargetCapacity')) {
          obj['MinTargetCapacity'] = _ApiClient["default"].convertToType(data['MinTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('SingleAvailabilityZone')) {
          obj['SingleAvailabilityZone'] = _ApiClient["default"].convertToType(data['SingleAvailabilityZone'], 'Boolean');
        }

        if (data.hasOwnProperty('SingleInstanceType')) {
          obj['SingleInstanceType'] = _ApiClient["default"].convertToType(data['SingleInstanceType'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SpotOptions;
}();
/**
 * @member {module:model/SpotAllocationStrategy} AllocationStrategy
 */


SpotOptions.prototype['AllocationStrategy'] = undefined;
/**
 * @member {module:model/SpotInstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

SpotOptions.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {Number} InstancePoolsToUseCount
 */

SpotOptions.prototype['InstancePoolsToUseCount'] = undefined;
/**
 * @member {String} MaxTotalPrice
 */

SpotOptions.prototype['MaxTotalPrice'] = undefined;
/**
 * @member {Number} MinTargetCapacity
 */

SpotOptions.prototype['MinTargetCapacity'] = undefined;
/**
 * @member {Boolean} SingleAvailabilityZone
 */

SpotOptions.prototype['SingleAvailabilityZone'] = undefined;
/**
 * @member {Boolean} SingleInstanceType
 */

SpotOptions.prototype['SingleInstanceType'] = undefined;
var _default = SpotOptions;
exports["default"] = _default;