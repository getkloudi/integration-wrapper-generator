"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DnsEntry = _interopRequireDefault(require("./DnsEntry"));

var _State = _interopRequireDefault(require("./State"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcEndpointConnection model module.
 * @module model/VpcEndpointConnection
 * @version 1.1.0
 */
var VpcEndpointConnection =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcEndpointConnection</code>.
   * Describes a VPC endpoint connection to a service.
   * @alias module:model/VpcEndpointConnection
   */
  function VpcEndpointConnection() {
    _classCallCheck(this, VpcEndpointConnection);

    VpcEndpointConnection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcEndpointConnection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcEndpointConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcEndpointConnection} obj Optional instance to populate.
     * @return {module:model/VpcEndpointConnection} The populated <code>VpcEndpointConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcEndpointConnection();

        if (data.hasOwnProperty('CreationTimestamp')) {
          obj['CreationTimestamp'] = _ApiClient["default"].convertToType(data['CreationTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('DnsEntries')) {
          obj['DnsEntries'] = _ApiClient["default"].convertToType(data['DnsEntries'], [_DnsEntry["default"]]);
        }

        if (data.hasOwnProperty('NetworkLoadBalancerArns')) {
          obj['NetworkLoadBalancerArns'] = _ApiClient["default"].convertToType(data['NetworkLoadBalancerArns'], ['String']);
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointId')) {
          obj['VpcEndpointId'] = _ApiClient["default"].convertToType(data['VpcEndpointId'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointOwner')) {
          obj['VpcEndpointOwner'] = _ApiClient["default"].convertToType(data['VpcEndpointOwner'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointState')) {
          obj['VpcEndpointState'] = _State["default"].constructFromObject(data['VpcEndpointState']);
        }
      }

      return obj;
    }
  }]);

  return VpcEndpointConnection;
}();
/**
 * @member {Date} CreationTimestamp
 */


VpcEndpointConnection.prototype['CreationTimestamp'] = undefined;
/**
 * @member {Array.<module:model/DnsEntry>} DnsEntries
 */

VpcEndpointConnection.prototype['DnsEntries'] = undefined;
/**
 * @member {Array.<String>} NetworkLoadBalancerArns
 */

VpcEndpointConnection.prototype['NetworkLoadBalancerArns'] = undefined;
/**
 * @member {String} ServiceId
 */

VpcEndpointConnection.prototype['ServiceId'] = undefined;
/**
 * @member {String} VpcEndpointId
 */

VpcEndpointConnection.prototype['VpcEndpointId'] = undefined;
/**
 * @member {String} VpcEndpointOwner
 */

VpcEndpointConnection.prototype['VpcEndpointOwner'] = undefined;
/**
 * @member {module:model/State} VpcEndpointState
 */

VpcEndpointConnection.prototype['VpcEndpointState'] = undefined;
var _default = VpcEndpointConnection;
exports["default"] = _default;