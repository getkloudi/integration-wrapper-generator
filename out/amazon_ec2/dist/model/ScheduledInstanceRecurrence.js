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
 * The ScheduledInstanceRecurrence model module.
 * @module model/ScheduledInstanceRecurrence
 * @version 1.0.0
 */
var ScheduledInstanceRecurrence =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstanceRecurrence</code>.
   * Describes the recurring schedule for a Scheduled Instance.
   * @alias module:model/ScheduledInstanceRecurrence
   */
  function ScheduledInstanceRecurrence() {
    _classCallCheck(this, ScheduledInstanceRecurrence);

    ScheduledInstanceRecurrence.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstanceRecurrence, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstanceRecurrence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstanceRecurrence} obj Optional instance to populate.
     * @return {module:model/ScheduledInstanceRecurrence} The populated <code>ScheduledInstanceRecurrence</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstanceRecurrence();

        if (data.hasOwnProperty('Frequency')) {
          obj['Frequency'] = _ApiClient["default"].convertToType(data['Frequency'], 'String');
        }

        if (data.hasOwnProperty('Interval')) {
          obj['Interval'] = _ApiClient["default"].convertToType(data['Interval'], 'Number');
        }

        if (data.hasOwnProperty('OccurrenceDaySet')) {
          obj['OccurrenceDaySet'] = _ApiClient["default"].convertToType(data['OccurrenceDaySet'], ['Number']);
        }

        if (data.hasOwnProperty('OccurrenceRelativeToEnd')) {
          obj['OccurrenceRelativeToEnd'] = _ApiClient["default"].convertToType(data['OccurrenceRelativeToEnd'], 'Boolean');
        }

        if (data.hasOwnProperty('OccurrenceUnit')) {
          obj['OccurrenceUnit'] = _ApiClient["default"].convertToType(data['OccurrenceUnit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstanceRecurrence;
}();
/**
 * @member {String} Frequency
 */


ScheduledInstanceRecurrence.prototype['Frequency'] = undefined;
/**
 * @member {Number} Interval
 */

ScheduledInstanceRecurrence.prototype['Interval'] = undefined;
/**
 * @member {Array.<Number>} OccurrenceDaySet
 */

ScheduledInstanceRecurrence.prototype['OccurrenceDaySet'] = undefined;
/**
 * @member {Boolean} OccurrenceRelativeToEnd
 */

ScheduledInstanceRecurrence.prototype['OccurrenceRelativeToEnd'] = undefined;
/**
 * @member {String} OccurrenceUnit
 */

ScheduledInstanceRecurrence.prototype['OccurrenceUnit'] = undefined;
var _default = ScheduledInstanceRecurrence;
exports["default"] = _default;