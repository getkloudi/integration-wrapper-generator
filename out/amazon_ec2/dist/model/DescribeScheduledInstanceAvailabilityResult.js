"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstanceAvailability = _interopRequireDefault(require("./ScheduledInstanceAvailability"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeScheduledInstanceAvailabilityResult model module.
 * @module model/DescribeScheduledInstanceAvailabilityResult
 * @version 1.0.0
 */
var DescribeScheduledInstanceAvailabilityResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeScheduledInstanceAvailabilityResult</code>.
   * Contains the output of DescribeScheduledInstanceAvailability.
   * @alias module:model/DescribeScheduledInstanceAvailabilityResult
   */
  function DescribeScheduledInstanceAvailabilityResult() {
    _classCallCheck(this, DescribeScheduledInstanceAvailabilityResult);

    DescribeScheduledInstanceAvailabilityResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeScheduledInstanceAvailabilityResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeScheduledInstanceAvailabilityResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeScheduledInstanceAvailabilityResult} obj Optional instance to populate.
     * @return {module:model/DescribeScheduledInstanceAvailabilityResult} The populated <code>DescribeScheduledInstanceAvailabilityResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeScheduledInstanceAvailabilityResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ScheduledInstanceAvailabilitySet')) {
          obj['ScheduledInstanceAvailabilitySet'] = _ApiClient["default"].convertToType(data['ScheduledInstanceAvailabilitySet'], [_ScheduledInstanceAvailability["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeScheduledInstanceAvailabilityResult;
}();
/**
 * @member {String} NextToken
 */


DescribeScheduledInstanceAvailabilityResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ScheduledInstanceAvailability>} ScheduledInstanceAvailabilitySet
 */

DescribeScheduledInstanceAvailabilityResult.prototype['ScheduledInstanceAvailabilitySet'] = undefined;
var _default = DescribeScheduledInstanceAvailabilityResult;
exports["default"] = _default;