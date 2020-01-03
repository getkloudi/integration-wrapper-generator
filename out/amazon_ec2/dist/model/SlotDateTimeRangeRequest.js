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
 * The SlotDateTimeRangeRequest model module.
 * @module model/SlotDateTimeRangeRequest
 * @version 1.0.0
 */
var SlotDateTimeRangeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SlotDateTimeRangeRequest</code>.
   * Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
   * @alias module:model/SlotDateTimeRangeRequest
   * @param earliestTime {Date} 
   * @param latestTime {Date} 
   */
  function SlotDateTimeRangeRequest(earliestTime, latestTime) {
    _classCallCheck(this, SlotDateTimeRangeRequest);

    SlotDateTimeRangeRequest.initialize(this, earliestTime, latestTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SlotDateTimeRangeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, earliestTime, latestTime) {
      obj['EarliestTime'] = earliestTime;
      obj['LatestTime'] = latestTime;
    }
    /**
     * Constructs a <code>SlotDateTimeRangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlotDateTimeRangeRequest} obj Optional instance to populate.
     * @return {module:model/SlotDateTimeRangeRequest} The populated <code>SlotDateTimeRangeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SlotDateTimeRangeRequest();

        if (data.hasOwnProperty('EarliestTime')) {
          obj['EarliestTime'] = _ApiClient["default"].convertToType(data['EarliestTime'], 'Date');
        }

        if (data.hasOwnProperty('LatestTime')) {
          obj['LatestTime'] = _ApiClient["default"].convertToType(data['LatestTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SlotDateTimeRangeRequest;
}();
/**
 * @member {Date} EarliestTime
 */


SlotDateTimeRangeRequest.prototype['EarliestTime'] = undefined;
/**
 * @member {Date} LatestTime
 */

SlotDateTimeRangeRequest.prototype['LatestTime'] = undefined;
var _default = SlotDateTimeRangeRequest;
exports["default"] = _default;