"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DnsEntry = _interopRequireDefault(require("./DnsEntry"));

var _SecurityGroupIdentifier = _interopRequireDefault(require("./SecurityGroupIdentifier"));

var _State = _interopRequireDefault(require("./State"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VpcEndpointType = _interopRequireDefault(require("./VpcEndpointType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcEndpoint model module.
 * @module model/VpcEndpoint
 * @version 1.0.0
 */
var VpcEndpoint =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcEndpoint</code>.
   * Describes a VPC endpoint.
   * @alias module:model/VpcEndpoint
   */
  function VpcEndpoint() {
    _classCallCheck(this, VpcEndpoint);

    VpcEndpoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcEndpoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcEndpoint} obj Optional instance to populate.
     * @return {module:model/VpcEndpoint} The populated <code>VpcEndpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcEndpoint();

        if (data.hasOwnProperty('CreationTimestamp')) {
          obj['CreationTimestamp'] = _ApiClient["default"].convertToType(data['CreationTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('DnsEntries')) {
          obj['DnsEntries'] = _ApiClient["default"].convertToType(data['DnsEntries'], [_DnsEntry["default"]]);
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_SecurityGroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('NetworkInterfaceIds')) {
          obj['NetworkInterfaceIds'] = _ApiClient["default"].convertToType(data['NetworkInterfaceIds'], ['String']);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PolicyDocument')) {
          obj['PolicyDocument'] = _ApiClient["default"].convertToType(data['PolicyDocument'], 'String');
        }

        if (data.hasOwnProperty('PrivateDnsEnabled')) {
          obj['PrivateDnsEnabled'] = _ApiClient["default"].convertToType(data['PrivateDnsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('RequesterManaged')) {
          obj['RequesterManaged'] = _ApiClient["default"].convertToType(data['RequesterManaged'], 'Boolean');
        }

        if (data.hasOwnProperty('RouteTableIds')) {
          obj['RouteTableIds'] = _ApiClient["default"].convertToType(data['RouteTableIds'], ['String']);
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _State["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('SubnetIds')) {
          obj['SubnetIds'] = _ApiClient["default"].convertToType(data['SubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcEndpointId')) {
          obj['VpcEndpointId'] = _ApiClient["default"].convertToType(data['VpcEndpointId'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointType')) {
          obj['VpcEndpointType'] = _VpcEndpointType["default"].constructFromObject(data['VpcEndpointType']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcEndpoint;
}();
/**
 * @member {Date} CreationTimestamp
 */


VpcEndpoint.prototype['CreationTimestamp'] = undefined;
/**
 * @member {Array.<module:model/DnsEntry>} DnsEntries
 */

VpcEndpoint.prototype['DnsEntries'] = undefined;
/**
 * @member {Array.<module:model/SecurityGroupIdentifier>} Groups
 */

VpcEndpoint.prototype['Groups'] = undefined;
/**
 * @member {Array.<String>} NetworkInterfaceIds
 */

VpcEndpoint.prototype['NetworkInterfaceIds'] = undefined;
/**
 * @member {String} OwnerId
 */

VpcEndpoint.prototype['OwnerId'] = undefined;
/**
 * @member {String} PolicyDocument
 */

VpcEndpoint.prototype['PolicyDocument'] = undefined;
/**
 * @member {Boolean} PrivateDnsEnabled
 */

VpcEndpoint.prototype['PrivateDnsEnabled'] = undefined;
/**
 * @member {Boolean} RequesterManaged
 */

VpcEndpoint.prototype['RequesterManaged'] = undefined;
/**
 * @member {Array.<String>} RouteTableIds
 */

VpcEndpoint.prototype['RouteTableIds'] = undefined;
/**
 * @member {String} ServiceName
 */

VpcEndpoint.prototype['ServiceName'] = undefined;
/**
 * @member {module:model/State} State
 */

VpcEndpoint.prototype['State'] = undefined;
/**
 * @member {Array.<String>} SubnetIds
 */

VpcEndpoint.prototype['SubnetIds'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

VpcEndpoint.prototype['Tags'] = undefined;
/**
 * @member {String} VpcEndpointId
 */

VpcEndpoint.prototype['VpcEndpointId'] = undefined;
/**
 * @member {module:model/VpcEndpointType} VpcEndpointType
 */

VpcEndpoint.prototype['VpcEndpointType'] = undefined;
/**
 * @member {String} VpcId
 */

VpcEndpoint.prototype['VpcId'] = undefined;
var _default = VpcEndpoint;
exports["default"] = _default;