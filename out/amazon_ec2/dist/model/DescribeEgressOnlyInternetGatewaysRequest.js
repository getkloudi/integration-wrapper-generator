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
 * The DescribeEgressOnlyInternetGatewaysRequest model module.
 * @module model/DescribeEgressOnlyInternetGatewaysRequest
 * @version 1.0.0
 */
var DescribeEgressOnlyInternetGatewaysRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeEgressOnlyInternetGatewaysRequest</code>.
   * @alias module:model/DescribeEgressOnlyInternetGatewaysRequest
   */
  function DescribeEgressOnlyInternetGatewaysRequest() {
    _classCallCheck(this, DescribeEgressOnlyInternetGatewaysRequest);

    DescribeEgressOnlyInternetGatewaysRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeEgressOnlyInternetGatewaysRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeEgressOnlyInternetGatewaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeEgressOnlyInternetGatewaysRequest} obj Optional instance to populate.
     * @return {module:model/DescribeEgressOnlyInternetGatewaysRequest} The populated <code>DescribeEgressOnlyInternetGatewaysRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeEgressOnlyInternetGatewaysRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EgressOnlyInternetGatewayIds')) {
          obj['EgressOnlyInternetGatewayIds'] = _ApiClient["default"].convertToType(data['EgressOnlyInternetGatewayIds'], ['String']);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeEgressOnlyInternetGatewaysRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeEgressOnlyInternetGatewaysRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} EgressOnlyInternetGatewayIds
 */

DescribeEgressOnlyInternetGatewaysRequest.prototype['EgressOnlyInternetGatewayIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeEgressOnlyInternetGatewaysRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeEgressOnlyInternetGatewaysRequest.prototype['NextToken'] = undefined;
var _default = DescribeEgressOnlyInternetGatewaysRequest;
exports["default"] = _default;