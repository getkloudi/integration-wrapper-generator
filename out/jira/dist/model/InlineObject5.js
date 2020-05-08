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
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.3.0
 */
var InlineObject5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject5</code>.
   * @alias module:model/InlineObject5
   */
  function InlineObject5() {
    _classCallCheck(this, InlineObject5);

    InlineObject5.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject5, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject5();

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

  return InlineObject5;
}();
/**
 * The unit of time that will be applied to logged time by default.
 * @member {module:model/InlineObject5.DefaultUnitEnum} defaultUnit
 */


InlineObject5.prototype['defaultUnit'] = undefined;
/**
 * The format that will appear on an issue's Time Spent field.
 * @member {module:model/InlineObject5.TimeFormatEnum} timeFormat
 */

InlineObject5.prototype['timeFormat'] = undefined;
/**
 * The number of days in a working week (for example, 5.5). This value is specified in days.
 * @member {Number} workingDaysPerWeek
 */

InlineObject5.prototype['workingDaysPerWeek'] = undefined;
/**
 * The number of hours in a working day (for example, 7.6). This value is specified in hours.
 * @member {Number} workingHoursPerDay
 */

InlineObject5.prototype['workingHoursPerDay'] = undefined;
/**
 * Allowed values for the <code>defaultUnit</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject5['DefaultUnitEnum'] = {
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

InlineObject5['TimeFormatEnum'] = {
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
var _default = InlineObject5;
exports["default"] = _default;