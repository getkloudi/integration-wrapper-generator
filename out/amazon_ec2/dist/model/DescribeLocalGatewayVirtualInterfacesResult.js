"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalGatewayVirtualInterface = _interopRequireDefault(require("./LocalGatewayVirtualInterface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeLocalGatewayVirtualInterfacesResult model module.
 * @module model/DescribeLocalGatewayVirtualInterfacesResult
 * @version 1.1.0
 */
var DescribeLocalGatewayVirtualInterfacesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLocalGatewayVirtualInterfacesResult</code>.
   * @alias module:model/DescribeLocalGatewayVirtualInterfacesResult
   */
  function DescribeLocalGatewayVirtualInterfacesResult() {
    _classCallCheck(this, DescribeLocalGatewayVirtualInterfacesResult);

    DescribeLocalGatewayVirtualInterfacesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLocalGatewayVirtualInterfacesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLocalGatewayVirtualInterfacesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLocalGatewayVirtualInterfacesResult} obj Optional instance to populate.
     * @return {module:model/DescribeLocalGatewayVirtualInterfacesResult} The populated <code>DescribeLocalGatewayVirtualInterfacesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLocalGatewayVirtualInterfacesResult();

        if (data.hasOwnProperty('LocalGatewayVirtualInterfaces')) {
          obj['LocalGatewayVirtualInterfaces'] = _ApiClient["default"].convertToType(data['LocalGatewayVirtualInterfaces'], [_LocalGatewayVirtualInterface["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeLocalGatewayVirtualInterfacesResult;
}();
/**
 * @member {Array.<module:model/LocalGatewayVirtualInterface>} LocalGatewayVirtualInterfaces
 */


DescribeLocalGatewayVirtualInterfacesResult.prototype['LocalGatewayVirtualInterfaces'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLocalGatewayVirtualInterfacesResult.prototype['NextToken'] = undefined;
var _default = DescribeLocalGatewayVirtualInterfacesResult;
exports["default"] = _default;