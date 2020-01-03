"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpotFleetRequestConfig = _interopRequireDefault(require("./SpotFleetRequestConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeSpotFleetRequestsResponse model module.
 * @module model/DescribeSpotFleetRequestsResponse
 * @version 1.0.0
 */
var DescribeSpotFleetRequestsResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotFleetRequestsResponse</code>.
   * Contains the output of DescribeSpotFleetRequests.
   * @alias module:model/DescribeSpotFleetRequestsResponse
   */
  function DescribeSpotFleetRequestsResponse() {
    _classCallCheck(this, DescribeSpotFleetRequestsResponse);

    DescribeSpotFleetRequestsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotFleetRequestsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSpotFleetRequestsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotFleetRequestsResponse} obj Optional instance to populate.
     * @return {module:model/DescribeSpotFleetRequestsResponse} The populated <code>DescribeSpotFleetRequestsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotFleetRequestsResponse();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('SpotFleetRequestConfigs')) {
          obj['SpotFleetRequestConfigs'] = _ApiClient["default"].convertToType(data['SpotFleetRequestConfigs'], [_SpotFleetRequestConfig["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotFleetRequestsResponse;
}();
/**
 * @member {String} NextToken
 */


DescribeSpotFleetRequestsResponse.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/SpotFleetRequestConfig>} SpotFleetRequestConfigs
 */

DescribeSpotFleetRequestsResponse.prototype['SpotFleetRequestConfigs'] = undefined;
var _default = DescribeSpotFleetRequestsResponse;
exports["default"] = _default;