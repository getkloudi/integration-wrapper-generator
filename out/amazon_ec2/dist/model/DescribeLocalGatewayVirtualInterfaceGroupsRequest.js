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
 * The DescribeLocalGatewayVirtualInterfaceGroupsRequest model module.
 * @module model/DescribeLocalGatewayVirtualInterfaceGroupsRequest
 * @version 1.1.0
 */
var DescribeLocalGatewayVirtualInterfaceGroupsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLocalGatewayVirtualInterfaceGroupsRequest</code>.
   * @alias module:model/DescribeLocalGatewayVirtualInterfaceGroupsRequest
   */
  function DescribeLocalGatewayVirtualInterfaceGroupsRequest() {
    _classCallCheck(this, DescribeLocalGatewayVirtualInterfaceGroupsRequest);

    DescribeLocalGatewayVirtualInterfaceGroupsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLocalGatewayVirtualInterfaceGroupsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLocalGatewayVirtualInterfaceGroupsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLocalGatewayVirtualInterfaceGroupsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeLocalGatewayVirtualInterfaceGroupsRequest} The populated <code>DescribeLocalGatewayVirtualInterfaceGroupsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLocalGatewayVirtualInterfaceGroupsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('LocalGatewayVirtualInterfaceGroupIds')) {
          obj['LocalGatewayVirtualInterfaceGroupIds'] = _ApiClient["default"].convertToType(data['LocalGatewayVirtualInterfaceGroupIds'], ['String']);
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

  return DescribeLocalGatewayVirtualInterfaceGroupsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeLocalGatewayVirtualInterfaceGroupsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeLocalGatewayVirtualInterfaceGroupsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} LocalGatewayVirtualInterfaceGroupIds
 */

DescribeLocalGatewayVirtualInterfaceGroupsRequest.prototype['LocalGatewayVirtualInterfaceGroupIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeLocalGatewayVirtualInterfaceGroupsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLocalGatewayVirtualInterfaceGroupsRequest.prototype['NextToken'] = undefined;
var _default = DescribeLocalGatewayVirtualInterfaceGroupsRequest;
exports["default"] = _default;