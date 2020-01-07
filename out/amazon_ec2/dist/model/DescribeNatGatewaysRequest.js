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
 * The DescribeNatGatewaysRequest model module.
 * @module model/DescribeNatGatewaysRequest
 * @version 1.1.0
 */
var DescribeNatGatewaysRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNatGatewaysRequest</code>.
   * @alias module:model/DescribeNatGatewaysRequest
   */
  function DescribeNatGatewaysRequest() {
    _classCallCheck(this, DescribeNatGatewaysRequest);

    DescribeNatGatewaysRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNatGatewaysRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeNatGatewaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNatGatewaysRequest} obj Optional instance to populate.
     * @return {module:model/DescribeNatGatewaysRequest} The populated <code>DescribeNatGatewaysRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNatGatewaysRequest();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NatGatewayIds')) {
          obj['NatGatewayIds'] = _ApiClient["default"].convertToType(data['NatGatewayIds'], ['String']);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeNatGatewaysRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filter
 */


DescribeNatGatewaysRequest.prototype['Filter'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeNatGatewaysRequest.prototype['MaxResults'] = undefined;
/**
 * @member {Array.<String>} NatGatewayIds
 */

DescribeNatGatewaysRequest.prototype['NatGatewayIds'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeNatGatewaysRequest.prototype['NextToken'] = undefined;
var _default = DescribeNatGatewaysRequest;
exports["default"] = _default;