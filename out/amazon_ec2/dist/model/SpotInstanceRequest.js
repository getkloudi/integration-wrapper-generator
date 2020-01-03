"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceInterruptionBehavior = _interopRequireDefault(require("./InstanceInterruptionBehavior"));

var _LaunchSpecification = _interopRequireDefault(require("./LaunchSpecification"));

var _RIProductDescription = _interopRequireDefault(require("./RIProductDescription"));

var _SpotInstanceState = _interopRequireDefault(require("./SpotInstanceState"));

var _SpotInstanceStateFault = _interopRequireDefault(require("./SpotInstanceStateFault"));

var _SpotInstanceStatus = _interopRequireDefault(require("./SpotInstanceStatus"));

var _SpotInstanceType = _interopRequireDefault(require("./SpotInstanceType"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotInstanceRequest model module.
 * @module model/SpotInstanceRequest
 * @version 1.0.0
 */
var SpotInstanceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotInstanceRequest</code>.
   * Describes a Spot Instance request.
   * @alias module:model/SpotInstanceRequest
   */
  function SpotInstanceRequest() {
    _classCallCheck(this, SpotInstanceRequest);

    SpotInstanceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotInstanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotInstanceRequest} obj Optional instance to populate.
     * @return {module:model/SpotInstanceRequest} The populated <code>SpotInstanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotInstanceRequest();

        if (data.hasOwnProperty('ActualBlockHourlyPrice')) {
          obj['ActualBlockHourlyPrice'] = _ApiClient["default"].convertToType(data['ActualBlockHourlyPrice'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneGroup')) {
          obj['AvailabilityZoneGroup'] = _ApiClient["default"].convertToType(data['AvailabilityZoneGroup'], 'String');
        }

        if (data.hasOwnProperty('BlockDurationMinutes')) {
          obj['BlockDurationMinutes'] = _ApiClient["default"].convertToType(data['BlockDurationMinutes'], 'Number');
        }

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('Fault')) {
          obj['Fault'] = _SpotInstanceStateFault["default"].constructFromObject(data['Fault']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
          obj['InstanceInterruptionBehavior'] = _InstanceInterruptionBehavior["default"].constructFromObject(data['InstanceInterruptionBehavior']);
        }

        if (data.hasOwnProperty('LaunchGroup')) {
          obj['LaunchGroup'] = _ApiClient["default"].convertToType(data['LaunchGroup'], 'String');
        }

        if (data.hasOwnProperty('LaunchSpecification')) {
          obj['LaunchSpecification'] = _LaunchSpecification["default"].constructFromObject(data['LaunchSpecification']);
        }

        if (data.hasOwnProperty('LaunchedAvailabilityZone')) {
          obj['LaunchedAvailabilityZone'] = _ApiClient["default"].convertToType(data['LaunchedAvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('ProductDescription')) {
          obj['ProductDescription'] = _RIProductDescription["default"].constructFromObject(data['ProductDescription']);
        }

        if (data.hasOwnProperty('SpotInstanceRequestId')) {
          obj['SpotInstanceRequestId'] = _ApiClient["default"].convertToType(data['SpotInstanceRequestId'], 'String');
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _SpotInstanceState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _SpotInstanceStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _SpotInstanceType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('ValidFrom')) {
          obj['ValidFrom'] = _ApiClient["default"].convertToType(data['ValidFrom'], 'Date');
        }

        if (data.hasOwnProperty('ValidUntil')) {
          obj['ValidUntil'] = _ApiClient["default"].convertToType(data['ValidUntil'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SpotInstanceRequest;
}();
/**
 * @member {String} ActualBlockHourlyPrice
 */


SpotInstanceRequest.prototype['ActualBlockHourlyPrice'] = undefined;
/**
 * @member {String} AvailabilityZoneGroup
 */

SpotInstanceRequest.prototype['AvailabilityZoneGroup'] = undefined;
/**
 * @member {Number} BlockDurationMinutes
 */

SpotInstanceRequest.prototype['BlockDurationMinutes'] = undefined;
/**
 * @member {Date} CreateTime
 */

SpotInstanceRequest.prototype['CreateTime'] = undefined;
/**
 * @member {module:model/SpotInstanceStateFault} Fault
 */

SpotInstanceRequest.prototype['Fault'] = undefined;
/**
 * @member {String} InstanceId
 */

SpotInstanceRequest.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

SpotInstanceRequest.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {String} LaunchGroup
 */

SpotInstanceRequest.prototype['LaunchGroup'] = undefined;
/**
 * @member {module:model/LaunchSpecification} LaunchSpecification
 */

SpotInstanceRequest.prototype['LaunchSpecification'] = undefined;
/**
 * @member {String} LaunchedAvailabilityZone
 */

SpotInstanceRequest.prototype['LaunchedAvailabilityZone'] = undefined;
/**
 * @member {module:model/RIProductDescription} ProductDescription
 */

SpotInstanceRequest.prototype['ProductDescription'] = undefined;
/**
 * @member {String} SpotInstanceRequestId
 */

SpotInstanceRequest.prototype['SpotInstanceRequestId'] = undefined;
/**
 * @member {String} SpotPrice
 */

SpotInstanceRequest.prototype['SpotPrice'] = undefined;
/**
 * @member {module:model/SpotInstanceState} State
 */

SpotInstanceRequest.prototype['State'] = undefined;
/**
 * @member {module:model/SpotInstanceStatus} Status
 */

SpotInstanceRequest.prototype['Status'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

SpotInstanceRequest.prototype['Tags'] = undefined;
/**
 * @member {module:model/SpotInstanceType} Type
 */

SpotInstanceRequest.prototype['Type'] = undefined;
/**
 * @member {Date} ValidFrom
 */

SpotInstanceRequest.prototype['ValidFrom'] = undefined;
/**
 * @member {Date} ValidUntil
 */

SpotInstanceRequest.prototype['ValidUntil'] = undefined;
var _default = SpotInstanceRequest;
exports["default"] = _default;