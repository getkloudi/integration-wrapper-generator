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
 * The ScheduledInstanceAvailability model module.
 * @module model/ScheduledInstanceAvailability
 * @version 1.1.0
 */
var ScheduledInstanceAvailability =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstanceAvailability</code>.
   * Describes a schedule that is available for your Scheduled Instances.
   * @alias module:model/ScheduledInstanceAvailability
   */
  function ScheduledInstanceAvailability() {
    _classCallCheck(this, ScheduledInstanceAvailability);

    ScheduledInstanceAvailability.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstanceAvailability, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstanceAvailability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstanceAvailability} obj Optional instance to populate.
     * @return {module:model/ScheduledInstanceAvailability} The populated <code>ScheduledInstanceAvailability</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstanceAvailability();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailableInstanceCount')) {
          obj['AvailableInstanceCount'] = _ApiClient["default"].convertToType(data['AvailableInstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('FirstSlotStartTime')) {
          obj['FirstSlotStartTime'] = _ApiClient["default"].convertToType(data['FirstSlotStartTime'], 'Date');
        }

        if (data.hasOwnProperty('HourlyPrice')) {
          obj['HourlyPrice'] = _ApiClient["default"].convertToType(data['HourlyPrice'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('MaxTermDurationInDays')) {
          obj['MaxTermDurationInDays'] = _ApiClient["default"].convertToType(data['MaxTermDurationInDays'], 'Number');
        }

        if (data.hasOwnProperty('MinTermDurationInDays')) {
          obj['MinTermDurationInDays'] = _ApiClient["default"].convertToType(data['MinTermDurationInDays'], 'Number');
        }

        if (data.hasOwnProperty('NetworkPlatform')) {
          obj['NetworkPlatform'] = _ApiClient["default"].convertToType(data['NetworkPlatform'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('PurchaseToken')) {
          obj['PurchaseToken'] = _ApiClient["default"].convertToType(data['PurchaseToken'], 'String');
        }

        if (data.hasOwnProperty('Recurrence')) {
          obj['Recurrence'] = _ScheduledInstanceRecurrence["default"].constructFromObject(data['Recurrence']);
        }

        if (data.hasOwnProperty('SlotDurationInHours')) {
          obj['SlotDurationInHours'] = _ApiClient["default"].convertToType(data['SlotDurationInHours'], 'Number');
        }

        if (data.hasOwnProperty('TotalScheduledInstanceHours')) {
          obj['TotalScheduledInstanceHours'] = _ApiClient["default"].convertToType(data['TotalScheduledInstanceHours'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstanceAvailability;
}();
/**
 * @member {String} AvailabilityZone
 */


ScheduledInstanceAvailability.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Number} AvailableInstanceCount
 */

ScheduledInstanceAvailability.prototype['AvailableInstanceCount'] = undefined;
/**
 * @member {Date} FirstSlotStartTime
 */

ScheduledInstanceAvailability.prototype['FirstSlotStartTime'] = undefined;
/**
 * @member {String} HourlyPrice
 */

ScheduledInstanceAvailability.prototype['HourlyPrice'] = undefined;
/**
 * @member {String} InstanceType
 */

ScheduledInstanceAvailability.prototype['InstanceType'] = undefined;
/**
 * @member {Number} MaxTermDurationInDays
 */

ScheduledInstanceAvailability.prototype['MaxTermDurationInDays'] = undefined;
/**
 * @member {Number} MinTermDurationInDays
 */

ScheduledInstanceAvailability.prototype['MinTermDurationInDays'] = undefined;
/**
 * @member {String} NetworkPlatform
 */

ScheduledInstanceAvailability.prototype['NetworkPlatform'] = undefined;
/**
 * @member {String} Platform
 */

ScheduledInstanceAvailability.prototype['Platform'] = undefined;
/**
 * @member {String} PurchaseToken
 */

ScheduledInstanceAvailability.prototype['PurchaseToken'] = undefined;
/**
 * @member {module:model/ScheduledInstanceRecurrence} Recurrence
 */

ScheduledInstanceAvailability.prototype['Recurrence'] = undefined;
/**
 * @member {Number} SlotDurationInHours
 */

ScheduledInstanceAvailability.prototype['SlotDurationInHours'] = undefined;
/**
 * @member {Number} TotalScheduledInstanceHours
 */

ScheduledInstanceAvailability.prototype['TotalScheduledInstanceHours'] = undefined;
var _default = ScheduledInstanceAvailability;
exports["default"] = _default;