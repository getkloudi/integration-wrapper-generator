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
 * The SpotOptionsRequest model module.
 * @module model/SpotOptionsRequest
 * @version 1.1.0
 */
var SpotOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotOptionsRequest</code>.
   * Describes the configuration of Spot Instances in an EC2 Fleet request.
   * @alias module:model/SpotOptionsRequest
   */
  function SpotOptionsRequest() {
    _classCallCheck(this, SpotOptionsRequest);

    SpotOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotOptionsRequest} obj Optional instance to populate.
     * @return {module:model/SpotOptionsRequest} The populated <code>SpotOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotOptionsRequest();

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

  return SpotOptionsRequest;
}();
/**
 * @member {module:model/SpotAllocationStrategy} AllocationStrategy
 */


SpotOptionsRequest.prototype['AllocationStrategy'] = undefined;
/**
 * @member {module:model/SpotInstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

SpotOptionsRequest.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {Number} InstancePoolsToUseCount
 */

SpotOptionsRequest.prototype['InstancePoolsToUseCount'] = undefined;
/**
 * @member {String} MaxTotalPrice
 */

SpotOptionsRequest.prototype['MaxTotalPrice'] = undefined;
/**
 * @member {Number} MinTargetCapacity
 */

SpotOptionsRequest.prototype['MinTargetCapacity'] = undefined;
/**
 * @member {Boolean} SingleAvailabilityZone
 */

SpotOptionsRequest.prototype['SingleAvailabilityZone'] = undefined;
/**
 * @member {Boolean} SingleInstanceType
 */

SpotOptionsRequest.prototype['SingleInstanceType'] = undefined;
var _default = SpotOptionsRequest;
exports["default"] = _default;