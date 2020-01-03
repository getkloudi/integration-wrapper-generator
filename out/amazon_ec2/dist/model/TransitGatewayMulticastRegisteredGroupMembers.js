"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayMulticastRegisteredGroupMembers model module.
 * @module model/TransitGatewayMulticastRegisteredGroupMembers
 * @version 1.0.0
 */
var TransitGatewayMulticastRegisteredGroupMembers =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastRegisteredGroupMembers</code>.
   * Describes the registered transit gateway multicast group members.
   * @alias module:model/TransitGatewayMulticastRegisteredGroupMembers
   */
  function TransitGatewayMulticastRegisteredGroupMembers() {
    _classCallCheck(this, TransitGatewayMulticastRegisteredGroupMembers);

    TransitGatewayMulticastRegisteredGroupMembers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastRegisteredGroupMembers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastRegisteredGroupMembers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastRegisteredGroupMembers} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastRegisteredGroupMembers} The populated <code>TransitGatewayMulticastRegisteredGroupMembers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastRegisteredGroupMembers();

        if (data.hasOwnProperty('GroupIpAddress')) {
          obj['GroupIpAddress'] = _ApiClient["default"].convertToType(data['GroupIpAddress'], 'String');
        }

        if (data.hasOwnProperty('RegisteredNetworkInterfaceIds')) {
          obj['RegisteredNetworkInterfaceIds'] = _ApiClient["default"].convertToType(data['RegisteredNetworkInterfaceIds'], ['String']);
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastRegisteredGroupMembers;
}();
/**
 * @member {String} GroupIpAddress
 */


TransitGatewayMulticastRegisteredGroupMembers.prototype['GroupIpAddress'] = undefined;
/**
 * @member {Array.<String>} RegisteredNetworkInterfaceIds
 */

TransitGatewayMulticastRegisteredGroupMembers.prototype['RegisteredNetworkInterfaceIds'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

TransitGatewayMulticastRegisteredGroupMembers.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = TransitGatewayMulticastRegisteredGroupMembers;
exports["default"] = _default;