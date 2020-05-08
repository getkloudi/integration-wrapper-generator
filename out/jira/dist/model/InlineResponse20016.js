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
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 1.1.0
 */
var InlineResponse20016 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20016</code>.
   * 
   * @alias module:model/InlineResponse20016
   * @param defaultUnit {String} 
   * @param timeFormat {String} 
   * @param workingDaysPerWeek {Number} 
   * @param workingHoursPerDay {Number} 
   */
  function InlineResponse20016(defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) {
    _classCallCheck(this, InlineResponse20016);

    InlineResponse20016.initialize(this, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20016, null, [{
    key: "initialize",
    value: function initialize(obj, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) {
      obj['defaultUnit'] = defaultUnit;
      obj['timeFormat'] = timeFormat;
      obj['workingDaysPerWeek'] = workingDaysPerWeek;
      obj['workingHoursPerDay'] = workingHoursPerDay;
    }
    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20016();

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

  return InlineResponse20016;
}();
/**
 * @member {String} defaultUnit
 */


InlineResponse20016.prototype['defaultUnit'] = undefined;
/**
 * @member {String} timeFormat
 */

InlineResponse20016.prototype['timeFormat'] = undefined;
/**
 * @member {Number} workingDaysPerWeek
 */

InlineResponse20016.prototype['workingDaysPerWeek'] = undefined;
/**
 * @member {Number} workingHoursPerDay
 */

InlineResponse20016.prototype['workingHoursPerDay'] = undefined;
var _default = InlineResponse20016;
exports["default"] = _default;