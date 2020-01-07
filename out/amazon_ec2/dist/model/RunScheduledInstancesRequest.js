"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstancesLaunchSpecification = _interopRequireDefault(require("./ScheduledInstancesLaunchSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RunScheduledInstancesRequest model module.
 * @module model/RunScheduledInstancesRequest
 * @version 1.1.0
 */
var RunScheduledInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RunScheduledInstancesRequest</code>.
   * Contains the parameters for RunScheduledInstances.
   * @alias module:model/RunScheduledInstancesRequest
   * @param launchSpecification {module:model/ScheduledInstancesLaunchSpecification} 
   * @param scheduledInstanceId {String} 
   */
  function RunScheduledInstancesRequest(launchSpecification, scheduledInstanceId) {
    _classCallCheck(this, RunScheduledInstancesRequest);

    RunScheduledInstancesRequest.initialize(this, launchSpecification, scheduledInstanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RunScheduledInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, launchSpecification, scheduledInstanceId) {
      obj['LaunchSpecification'] = launchSpecification;
      obj['ScheduledInstanceId'] = scheduledInstanceId;
    }
    /**
     * Constructs a <code>RunScheduledInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunScheduledInstancesRequest} obj Optional instance to populate.
     * @return {module:model/RunScheduledInstancesRequest} The populated <code>RunScheduledInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RunScheduledInstancesRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('LaunchSpecification')) {
          obj['LaunchSpecification'] = _ScheduledInstancesLaunchSpecification["default"].constructFromObject(data['LaunchSpecification']);
        }

        if (data.hasOwnProperty('ScheduledInstanceId')) {
          obj['ScheduledInstanceId'] = _ApiClient["default"].convertToType(data['ScheduledInstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RunScheduledInstancesRequest;
}();
/**
 * @member {String} ClientToken
 */


RunScheduledInstancesRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RunScheduledInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} InstanceCount
 */

RunScheduledInstancesRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/ScheduledInstancesLaunchSpecification} LaunchSpecification
 */

RunScheduledInstancesRequest.prototype['LaunchSpecification'] = undefined;
/**
 * @member {String} ScheduledInstanceId
 */

RunScheduledInstancesRequest.prototype['ScheduledInstanceId'] = undefined;
var _default = RunScheduledInstancesRequest;
exports["default"] = _default;