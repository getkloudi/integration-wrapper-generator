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
 * The DescribeNetworkInterfacePermissionsRequest model module.
 * @module model/DescribeNetworkInterfacePermissionsRequest
 * @version 1.1.0
 */
var DescribeNetworkInterfacePermissionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNetworkInterfacePermissionsRequest</code>.
   * Contains the parameters for DescribeNetworkInterfacePermissions.
   * @alias module:model/DescribeNetworkInterfacePermissionsRequest
   */
  function DescribeNetworkInterfacePermissionsRequest() {
    _classCallCheck(this, DescribeNetworkInterfacePermissionsRequest);

    DescribeNetworkInterfacePermissionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNetworkInterfacePermissionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeNetworkInterfacePermissionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNetworkInterfacePermissionsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeNetworkInterfacePermissionsRequest} The populated <code>DescribeNetworkInterfacePermissionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNetworkInterfacePermissionsRequest();

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NetworkInterfacePermissionIds')) {
          obj['NetworkInterfacePermissionIds'] = _ApiClient["default"].convertToType(data['NetworkInterfacePermissionIds'], ['String']);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeNetworkInterfacePermissionsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filters
 */


DescribeNetworkInterfacePermissionsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeNetworkInterfacePermissionsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {Array.<String>} NetworkInterfacePermissionIds
 */

DescribeNetworkInterfacePermissionsRequest.prototype['NetworkInterfacePermissionIds'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeNetworkInterfacePermissionsRequest.prototype['NextToken'] = undefined;
var _default = DescribeNetworkInterfacePermissionsRequest;
exports["default"] = _default;