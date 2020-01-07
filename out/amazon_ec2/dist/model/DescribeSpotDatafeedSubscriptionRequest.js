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
 * The DescribeSpotDatafeedSubscriptionRequest model module.
 * @module model/DescribeSpotDatafeedSubscriptionRequest
 * @version 1.1.0
 */
var DescribeSpotDatafeedSubscriptionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotDatafeedSubscriptionRequest</code>.
   * Contains the parameters for DescribeSpotDatafeedSubscription.
   * @alias module:model/DescribeSpotDatafeedSubscriptionRequest
   */
  function DescribeSpotDatafeedSubscriptionRequest() {
    _classCallCheck(this, DescribeSpotDatafeedSubscriptionRequest);

    DescribeSpotDatafeedSubscriptionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotDatafeedSubscriptionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSpotDatafeedSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotDatafeedSubscriptionRequest} obj Optional instance to populate.
     * @return {module:model/DescribeSpotDatafeedSubscriptionRequest} The populated <code>DescribeSpotDatafeedSubscriptionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotDatafeedSubscriptionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotDatafeedSubscriptionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeSpotDatafeedSubscriptionRequest.prototype['DryRun'] = undefined;
var _default = DescribeSpotDatafeedSubscriptionRequest;
exports["default"] = _default;