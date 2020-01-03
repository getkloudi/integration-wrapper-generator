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
 * The DescribeCustomerGatewaysRequest model module.
 * @module model/DescribeCustomerGatewaysRequest
 * @version 1.0.0
 */
var DescribeCustomerGatewaysRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeCustomerGatewaysRequest</code>.
   * Contains the parameters for DescribeCustomerGateways.
   * @alias module:model/DescribeCustomerGatewaysRequest
   */
  function DescribeCustomerGatewaysRequest() {
    _classCallCheck(this, DescribeCustomerGatewaysRequest);

    DescribeCustomerGatewaysRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeCustomerGatewaysRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeCustomerGatewaysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeCustomerGatewaysRequest} obj Optional instance to populate.
     * @return {module:model/DescribeCustomerGatewaysRequest} The populated <code>DescribeCustomerGatewaysRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeCustomerGatewaysRequest();

        if (data.hasOwnProperty('CustomerGatewayIds')) {
          obj['CustomerGatewayIds'] = _ApiClient["default"].convertToType(data['CustomerGatewayIds'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeCustomerGatewaysRequest;
}();
/**
 * @member {Array.<String>} CustomerGatewayIds
 */


DescribeCustomerGatewaysRequest.prototype['CustomerGatewayIds'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeCustomerGatewaysRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeCustomerGatewaysRequest.prototype['Filters'] = undefined;
var _default = DescribeCustomerGatewaysRequest;
exports["default"] = _default;