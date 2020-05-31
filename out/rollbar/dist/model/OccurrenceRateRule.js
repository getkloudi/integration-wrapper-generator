"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OccurrenceRateRule model module.
 * @module model/OccurrenceRateRule
 * @version 1.1.0
 */
var OccurrenceRateRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OccurrenceRateRule</code>.
   * @alias module:model/OccurrenceRateRule
   * @param trigger {String} {x} occurrences seen in {y} minutes
   */
  function OccurrenceRateRule(trigger) {
    _classCallCheck(this, OccurrenceRateRule);

    OccurrenceRateRule.initialize(this, trigger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OccurrenceRateRule, null, [{
    key: "initialize",
    value: function initialize(obj, trigger) {
      obj['trigger'] = trigger;
    }
    /**
     * Constructs a <code>OccurrenceRateRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OccurrenceRateRule} obj Optional instance to populate.
     * @return {module:model/OccurrenceRateRule} The populated <code>OccurrenceRateRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OccurrenceRateRule();

        if (data.hasOwnProperty('trigger')) {
          obj['trigger'] = _ApiClient["default"].convertToType(data['trigger'], 'String');
        }

        if (data.hasOwnProperty('filters')) {
          obj['filters'] = _ApiClient["default"].convertToType(data['filters'], [_Filter["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OccurrenceRateRule;
}();
/**
 * {x} occurrences seen in {y} minutes
 * @member {String} trigger
 * @default 'occurrence_rate'
 */


OccurrenceRateRule.prototype['trigger'] = 'occurrence_rate';
/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter>} filters
 */

OccurrenceRateRule.prototype['filters'] = undefined;
var _default = OccurrenceRateRule;
exports["default"] = _default;