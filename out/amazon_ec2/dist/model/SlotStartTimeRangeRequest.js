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
 * The SlotStartTimeRangeRequest model module.
 * @module model/SlotStartTimeRangeRequest
 * @version 1.1.0
 */
var SlotStartTimeRangeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SlotStartTimeRangeRequest</code>.
   * Describes the time period for a Scheduled Instance to start its first schedule.
   * @alias module:model/SlotStartTimeRangeRequest
   */
  function SlotStartTimeRangeRequest() {
    _classCallCheck(this, SlotStartTimeRangeRequest);

    SlotStartTimeRangeRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SlotStartTimeRangeRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SlotStartTimeRangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlotStartTimeRangeRequest} obj Optional instance to populate.
     * @return {module:model/SlotStartTimeRangeRequest} The populated <code>SlotStartTimeRangeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SlotStartTimeRangeRequest();

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

  return SlotStartTimeRangeRequest;
}();
/**
 * @member {Date} EarliestTime
 */


SlotStartTimeRangeRequest.prototype['EarliestTime'] = undefined;
/**
 * @member {Date} LatestTime
 */

SlotStartTimeRangeRequest.prototype['LatestTime'] = undefined;
var _default = SlotStartTimeRangeRequest;
exports["default"] = _default;