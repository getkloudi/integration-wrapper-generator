"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnConnection = _interopRequireDefault(require("./VpnConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpnConnectionsResult model module.
 * @module model/DescribeVpnConnectionsResult
 * @version 1.0.0
 */
var DescribeVpnConnectionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpnConnectionsResult</code>.
   * Contains the output of DescribeVpnConnections.
   * @alias module:model/DescribeVpnConnectionsResult
   */
  function DescribeVpnConnectionsResult() {
    _classCallCheck(this, DescribeVpnConnectionsResult);

    DescribeVpnConnectionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpnConnectionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpnConnectionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpnConnectionsResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpnConnectionsResult} The populated <code>DescribeVpnConnectionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpnConnectionsResult();

        if (data.hasOwnProperty('VpnConnections')) {
          obj['VpnConnections'] = _ApiClient["default"].convertToType(data['VpnConnections'], [_VpnConnection["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpnConnectionsResult;
}();
/**
 * @member {Array.<module:model/VpnConnection>} VpnConnections
 */


DescribeVpnConnectionsResult.prototype['VpnConnections'] = undefined;
var _default = DescribeVpnConnectionsResult;
exports["default"] = _default;