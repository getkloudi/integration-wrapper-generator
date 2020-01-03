"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceDetail = _interopRequireDefault(require("./ServiceDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcEndpointServicesResult model module.
 * @module model/DescribeVpcEndpointServicesResult
 * @version 1.0.0
 */
var DescribeVpcEndpointServicesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcEndpointServicesResult</code>.
   * Contains the output of DescribeVpcEndpointServices.
   * @alias module:model/DescribeVpcEndpointServicesResult
   */
  function DescribeVpcEndpointServicesResult() {
    _classCallCheck(this, DescribeVpcEndpointServicesResult);

    DescribeVpcEndpointServicesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcEndpointServicesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcEndpointServicesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcEndpointServicesResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcEndpointServicesResult} The populated <code>DescribeVpcEndpointServicesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcEndpointServicesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ServiceDetails')) {
          obj['ServiceDetails'] = _ApiClient["default"].convertToType(data['ServiceDetails'], [_ServiceDetail["default"]]);
        }

        if (data.hasOwnProperty('ServiceNames')) {
          obj['ServiceNames'] = _ApiClient["default"].convertToType(data['ServiceNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcEndpointServicesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeVpcEndpointServicesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ServiceDetail>} ServiceDetails
 */

DescribeVpcEndpointServicesResult.prototype['ServiceDetails'] = undefined;
/**
 * @member {Array.<String>} ServiceNames
 */

DescribeVpcEndpointServicesResult.prototype['ServiceNames'] = undefined;
var _default = DescribeVpcEndpointServicesResult;
exports["default"] = _default;