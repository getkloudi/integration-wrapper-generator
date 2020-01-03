"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpotDatafeedSubscription = _interopRequireDefault(require("./SpotDatafeedSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeSpotDatafeedSubscriptionResult model module.
 * @module model/DescribeSpotDatafeedSubscriptionResult
 * @version 1.0.0
 */
var DescribeSpotDatafeedSubscriptionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotDatafeedSubscriptionResult</code>.
   * Contains the output of DescribeSpotDatafeedSubscription.
   * @alias module:model/DescribeSpotDatafeedSubscriptionResult
   */
  function DescribeSpotDatafeedSubscriptionResult() {
    _classCallCheck(this, DescribeSpotDatafeedSubscriptionResult);

    DescribeSpotDatafeedSubscriptionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotDatafeedSubscriptionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSpotDatafeedSubscriptionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotDatafeedSubscriptionResult} obj Optional instance to populate.
     * @return {module:model/DescribeSpotDatafeedSubscriptionResult} The populated <code>DescribeSpotDatafeedSubscriptionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotDatafeedSubscriptionResult();

        if (data.hasOwnProperty('SpotDatafeedSubscription')) {
          obj['SpotDatafeedSubscription'] = _SpotDatafeedSubscription["default"].constructFromObject(data['SpotDatafeedSubscription']);
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotDatafeedSubscriptionResult;
}();
/**
 * @member {module:model/SpotDatafeedSubscription} SpotDatafeedSubscription
 */


DescribeSpotDatafeedSubscriptionResult.prototype['SpotDatafeedSubscription'] = undefined;
var _default = DescribeSpotDatafeedSubscriptionResult;
exports["default"] = _default;