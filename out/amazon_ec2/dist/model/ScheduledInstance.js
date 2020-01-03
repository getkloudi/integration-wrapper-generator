"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstanceRecurrence = _interopRequireDefault(require("./ScheduledInstanceRecurrence"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInstance model module.
 * @module model/ScheduledInstance
 * @version 1.0.0
 */
var ScheduledInstance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstance</code>.
   * Describes a Scheduled Instance.
   * @alias module:model/ScheduledInstance
   */
  function ScheduledInstance() {
    _classCallCheck(this, ScheduledInstance);

    ScheduledInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstance} obj Optional instance to populate.
     * @return {module:model/ScheduledInstance} The populated <code>ScheduledInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstance();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('CreateDate')) {
          obj['CreateDate'] = _ApiClient["default"].convertToType(data['CreateDate'], 'Date');
        }

        if (data.hasOwnProperty('HourlyPrice')) {
          obj['HourlyPrice'] = _ApiClient["default"].convertToType(data['HourlyPrice'], 'String');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('NetworkPlatform')) {
          obj['NetworkPlatform'] = _ApiClient["default"].convertToType(data['NetworkPlatform'], 'String');
        }

        if (data.hasOwnProperty('NextSlotStartTime')) {
          obj['NextSlotStartTime'] = _ApiClient["default"].convertToType(data['NextSlotStartTime'], 'Date');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('PreviousSlotEndTime')) {
          obj['PreviousSlotEndTime'] = _ApiClient["default"].convertToType(data['PreviousSlotEndTime'], 'Date');
        }

        if (data.hasOwnProperty('Recurrence')) {
          obj['Recurrence'] = _ScheduledInstanceRecurrence["default"].constructFromObject(data['Recurrence']);
        }

        if (data.hasOwnProperty('ScheduledInstanceId')) {
          obj['ScheduledInstanceId'] = _ApiClient["default"].convertToType(data['ScheduledInstanceId'], 'String');
        }

        if (data.hasOwnProperty('SlotDurationInHours')) {
          obj['SlotDurationInHours'] = _ApiClient["default"].convertToType(data['SlotDurationInHours'], 'Number');
        }

        if (data.hasOwnProperty('TermEndDate')) {
          obj['TermEndDate'] = _ApiClient["default"].convertToType(data['TermEndDate'], 'Date');
        }

        if (data.hasOwnProperty('TermStartDate')) {
          obj['TermStartDate'] = _ApiClient["default"].convertToType(data['TermStartDate'], 'Date');
        }

        if (data.hasOwnProperty('TotalScheduledInstanceHours')) {
          obj['TotalScheduledInstanceHours'] = _ApiClient["default"].convertToType(data['TotalScheduledInstanceHours'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstance;
}();
/**
 * @member {String} AvailabilityZone
 */


ScheduledInstance.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Date} CreateDate
 */

ScheduledInstance.prototype['CreateDate'] = undefined;
/**
 * @member {String} HourlyPrice
 */

ScheduledInstance.prototype['HourlyPrice'] = undefined;
/**
 * @member {Number} InstanceCount
 */

ScheduledInstance.prototype['InstanceCount'] = undefined;
/**
 * @member {String} InstanceType
 */

ScheduledInstance.prototype['InstanceType'] = undefined;
/**
 * @member {String} NetworkPlatform
 */

ScheduledInstance.prototype['NetworkPlatform'] = undefined;
/**
 * @member {Date} NextSlotStartTime
 */

ScheduledInstance.prototype['NextSlotStartTime'] = undefined;
/**
 * @member {String} Platform
 */

ScheduledInstance.prototype['Platform'] = undefined;
/**
 * @member {Date} PreviousSlotEndTime
 */

ScheduledInstance.prototype['PreviousSlotEndTime'] = undefined;
/**
 * @member {module:model/ScheduledInstanceRecurrence} Recurrence
 */

ScheduledInstance.prototype['Recurrence'] = undefined;
/**
 * @member {String} ScheduledInstanceId
 */

ScheduledInstance.prototype['ScheduledInstanceId'] = undefined;
/**
 * @member {Number} SlotDurationInHours
 */

ScheduledInstance.prototype['SlotDurationInHours'] = undefined;
/**
 * @member {Date} TermEndDate
 */

ScheduledInstance.prototype['TermEndDate'] = undefined;
/**
 * @member {Date} TermStartDate
 */

ScheduledInstance.prototype['TermStartDate'] = undefined;
/**
 * @member {Number} TotalScheduledInstanceHours
 */

ScheduledInstance.prototype['TotalScheduledInstanceHours'] = undefined;
var _default = ScheduledInstance;
exports["default"] = _default;