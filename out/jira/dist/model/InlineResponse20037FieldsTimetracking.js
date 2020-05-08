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
 * The InlineResponse20037FieldsTimetracking model module.
 * @module model/InlineResponse20037FieldsTimetracking
 * @version 1.3.0
 */
var InlineResponse20037FieldsTimetracking = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsTimetracking</code>.
   * @alias module:model/InlineResponse20037FieldsTimetracking
   * @param originalEstimate {String} 
   * @param originalEstimateSeconds {Number} 
   * @param remainingEstimate {String} 
   * @param remainingEstimateSeconds {Number} 
   * @param timeSpent {String} 
   * @param timeSpentSeconds {Number} 
   */
  function InlineResponse20037FieldsTimetracking(originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds) {
    _classCallCheck(this, InlineResponse20037FieldsTimetracking);

    InlineResponse20037FieldsTimetracking.initialize(this, originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsTimetracking, null, [{
    key: "initialize",
    value: function initialize(obj, originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds) {
      obj['originalEstimate'] = originalEstimate;
      obj['originalEstimateSeconds'] = originalEstimateSeconds;
      obj['remainingEstimate'] = remainingEstimate;
      obj['remainingEstimateSeconds'] = remainingEstimateSeconds;
      obj['timeSpent'] = timeSpent;
      obj['timeSpentSeconds'] = timeSpentSeconds;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsTimetracking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsTimetracking} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsTimetracking} The populated <code>InlineResponse20037FieldsTimetracking</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsTimetracking();

        if (data.hasOwnProperty('originalEstimate')) {
          obj['originalEstimate'] = _ApiClient["default"].convertToType(data['originalEstimate'], 'String');
        }

        if (data.hasOwnProperty('originalEstimateSeconds')) {
          obj['originalEstimateSeconds'] = _ApiClient["default"].convertToType(data['originalEstimateSeconds'], 'Number');
        }

        if (data.hasOwnProperty('remainingEstimate')) {
          obj['remainingEstimate'] = _ApiClient["default"].convertToType(data['remainingEstimate'], 'String');
        }

        if (data.hasOwnProperty('remainingEstimateSeconds')) {
          obj['remainingEstimateSeconds'] = _ApiClient["default"].convertToType(data['remainingEstimateSeconds'], 'Number');
        }

        if (data.hasOwnProperty('timeSpent')) {
          obj['timeSpent'] = _ApiClient["default"].convertToType(data['timeSpent'], 'String');
        }

        if (data.hasOwnProperty('timeSpentSeconds')) {
          obj['timeSpentSeconds'] = _ApiClient["default"].convertToType(data['timeSpentSeconds'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037FieldsTimetracking;
}();
/**
 * @member {String} originalEstimate
 */


InlineResponse20037FieldsTimetracking.prototype['originalEstimate'] = undefined;
/**
 * @member {Number} originalEstimateSeconds
 */

InlineResponse20037FieldsTimetracking.prototype['originalEstimateSeconds'] = undefined;
/**
 * @member {String} remainingEstimate
 */

InlineResponse20037FieldsTimetracking.prototype['remainingEstimate'] = undefined;
/**
 * @member {Number} remainingEstimateSeconds
 */

InlineResponse20037FieldsTimetracking.prototype['remainingEstimateSeconds'] = undefined;
/**
 * @member {String} timeSpent
 */

InlineResponse20037FieldsTimetracking.prototype['timeSpent'] = undefined;
/**
 * @member {Number} timeSpentSeconds
 */

InlineResponse20037FieldsTimetracking.prototype['timeSpentSeconds'] = undefined;
var _default = InlineResponse20037FieldsTimetracking;
exports["default"] = _default;