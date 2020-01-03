"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceInterruptionBehavior = _interopRequireDefault(require("./InstanceInterruptionBehavior"));

var _RequestSpotLaunchSpecification = _interopRequireDefault(require("./RequestSpotLaunchSpecification"));

var _SpotInstanceType = _interopRequireDefault(require("./SpotInstanceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestSpotInstancesRequest model module.
 * @module model/RequestSpotInstancesRequest
 * @version 1.0.0
 */
var RequestSpotInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RequestSpotInstancesRequest</code>.
   * Contains the parameters for RequestSpotInstances.
   * @alias module:model/RequestSpotInstancesRequest
   */
  function RequestSpotInstancesRequest() {
    _classCallCheck(this, RequestSpotInstancesRequest);

    RequestSpotInstancesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSpotInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestSpotInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotInstancesRequest} obj Optional instance to populate.
     * @return {module:model/RequestSpotInstancesRequest} The populated <code>RequestSpotInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSpotInstancesRequest();

        if (data.hasOwnProperty('AvailabilityZoneGroup')) {
          obj['AvailabilityZoneGroup'] = _ApiClient["default"].convertToType(data['AvailabilityZoneGroup'], 'String');
        }

        if (data.hasOwnProperty('BlockDurationMinutes')) {
          obj['BlockDurationMinutes'] = _ApiClient["default"].convertToType(data['BlockDurationMinutes'], 'Number');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
          obj['InstanceInterruptionBehavior'] = _InstanceInterruptionBehavior["default"].constructFromObject(data['InstanceInterruptionBehavior']);
        }

        if (data.hasOwnProperty('LaunchGroup')) {
          obj['LaunchGroup'] = _ApiClient["default"].convertToType(data['LaunchGroup'], 'String');
        }

        if (data.hasOwnProperty('LaunchSpecification')) {
          obj['LaunchSpecification'] = _RequestSpotLaunchSpecification["default"].constructFromObject(data['LaunchSpecification']);
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
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

  return RequestSpotInstancesRequest;
}();
/**
 * @member {String} AvailabilityZoneGroup
 */


RequestSpotInstancesRequest.prototype['AvailabilityZoneGroup'] = undefined;
/**
 * @member {Number} BlockDurationMinutes
 */

RequestSpotInstancesRequest.prototype['BlockDurationMinutes'] = undefined;
/**
 * @member {String} ClientToken
 */

RequestSpotInstancesRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RequestSpotInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} InstanceCount
 */

RequestSpotInstancesRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

RequestSpotInstancesRequest.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {String} LaunchGroup
 */

RequestSpotInstancesRequest.prototype['LaunchGroup'] = undefined;
/**
 * @member {module:model/RequestSpotLaunchSpecification} LaunchSpecification
 */

RequestSpotInstancesRequest.prototype['LaunchSpecification'] = undefined;
/**
 * @member {String} SpotPrice
 */

RequestSpotInstancesRequest.prototype['SpotPrice'] = undefined;
/**
 * @member {module:model/SpotInstanceType} Type
 */

RequestSpotInstancesRequest.prototype['Type'] = undefined;
/**
 * @member {Date} ValidFrom
 */

RequestSpotInstancesRequest.prototype['ValidFrom'] = undefined;
/**
 * @member {Date} ValidUntil
 */

RequestSpotInstancesRequest.prototype['ValidUntil'] = undefined;
var _default = RequestSpotInstancesRequest;
exports["default"] = _default;