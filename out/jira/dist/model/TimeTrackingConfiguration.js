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
 * The TimeTrackingConfiguration model module.
 * @module model/TimeTrackingConfiguration
 * @version 1.4.0
 */
var TimeTrackingConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeTrackingConfiguration</code>.
   * Details of the time tracking configuration.
   * @alias module:model/TimeTrackingConfiguration
   * @param defaultUnit {module:model/TimeTrackingConfiguration.DefaultUnitEnum} The default unit of time applied to logged time.
   * @param timeFormat {module:model/TimeTrackingConfiguration.TimeFormatEnum} The format that will appear on an issue's *Time Spent* field.
   * @param workingDaysPerWeek {Number} The number of days in a working week.
   * @param workingHoursPerDay {Number} The number of hours in a working day.
   */
  function TimeTrackingConfiguration(defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) {
    _classCallCheck(this, TimeTrackingConfiguration);

    TimeTrackingConfiguration.initialize(this, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeTrackingConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) {
      obj['defaultUnit'] = defaultUnit;
      obj['timeFormat'] = timeFormat;
      obj['workingDaysPerWeek'] = workingDaysPerWeek;
      obj['workingHoursPerDay'] = workingHoursPerDay;
    }
    /**
     * Constructs a <code>TimeTrackingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTrackingConfiguration} obj Optional instance to populate.
     * @return {module:model/TimeTrackingConfiguration} The populated <code>TimeTrackingConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeTrackingConfiguration();

        if (data.hasOwnProperty('defaultUnit')) {
          obj['defaultUnit'] = _ApiClient["default"].convertToType(data['defaultUnit'], 'String');
        }

        if (data.hasOwnProperty('timeFormat')) {
          obj['timeFormat'] = _ApiClient["default"].convertToType(data['timeFormat'], 'String');
        }

        if (data.hasOwnProperty('workingDaysPerWeek')) {
          obj['workingDaysPerWeek'] = _ApiClient["default"].convertToType(data['workingDaysPerWeek'], 'Number');
        }

        if (data.hasOwnProperty('workingHoursPerDay')) {
          obj['workingHoursPerDay'] = _ApiClient["default"].convertToType(data['workingHoursPerDay'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TimeTrackingConfiguration;
}();
/**
 * The default unit of time applied to logged time.
 * @member {module:model/TimeTrackingConfiguration.DefaultUnitEnum} defaultUnit
 */


TimeTrackingConfiguration.prototype['defaultUnit'] = undefined;
/**
 * The format that will appear on an issue's *Time Spent* field.
 * @member {module:model/TimeTrackingConfiguration.TimeFormatEnum} timeFormat
 */

TimeTrackingConfiguration.prototype['timeFormat'] = undefined;
/**
 * The number of days in a working week.
 * @member {Number} workingDaysPerWeek
 */

TimeTrackingConfiguration.prototype['workingDaysPerWeek'] = undefined;
/**
 * The number of hours in a working day.
 * @member {Number} workingHoursPerDay
 */

TimeTrackingConfiguration.prototype['workingHoursPerDay'] = undefined;
/**
 * Allowed values for the <code>defaultUnit</code> property.
 * @enum {String}
 * @readonly
 */

TimeTrackingConfiguration['DefaultUnitEnum'] = {
  /**
   * value: "minute"
   * @const
   */
  "minute": "minute",

  /**
   * value: "hour"
   * @const
   */
  "hour": "hour",

  /**
   * value: "day"
   * @const
   */
  "day": "day",

  /**
   * value: "week"
   * @const
   */
  "week": "week"
};
/**
 * Allowed values for the <code>timeFormat</code> property.
 * @enum {String}
 * @readonly
 */

TimeTrackingConfiguration['TimeFormatEnum'] = {
  /**
   * value: "pretty"
   * @const
   */
  "pretty": "pretty",

  /**
   * value: "days"
   * @const
   */
  "days": "days",

  /**
   * value: "hours"
   * @const
   */
  "hours": "hours"
};
var _default = TimeTrackingConfiguration;
exports["default"] = _default;