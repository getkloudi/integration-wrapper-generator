"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkInterfaceAttribute = _interopRequireDefault(require("./NetworkInterfaceAttribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeNetworkInterfaceAttributeRequest model module.
 * @module model/DescribeNetworkInterfaceAttributeRequest
 * @version 1.1.0
 */
var DescribeNetworkInterfaceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNetworkInterfaceAttributeRequest</code>.
   * Contains the parameters for DescribeNetworkInterfaceAttribute.
   * @alias module:model/DescribeNetworkInterfaceAttributeRequest
   * @param networkInterfaceId {String} 
   */
  function DescribeNetworkInterfaceAttributeRequest(networkInterfaceId) {
    _classCallCheck(this, DescribeNetworkInterfaceAttributeRequest);

    DescribeNetworkInterfaceAttributeRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNetworkInterfaceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>DescribeNetworkInterfaceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNetworkInterfaceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeNetworkInterfaceAttributeRequest} The populated <code>DescribeNetworkInterfaceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNetworkInterfaceAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _NetworkInterfaceAttribute["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeNetworkInterfaceAttributeRequest;
}();
/**
 * @member {module:model/NetworkInterfaceAttribute} Attribute
 */


DescribeNetworkInterfaceAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeNetworkInterfaceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

DescribeNetworkInterfaceAttributeRequest.prototype['NetworkInterfaceId'] = undefined;
var _default = DescribeNetworkInterfaceAttributeRequest;
exports["default"] = _default;