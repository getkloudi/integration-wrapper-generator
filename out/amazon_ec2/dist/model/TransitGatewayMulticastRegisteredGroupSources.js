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
 * The TransitGatewayMulticastRegisteredGroupSources model module.
 * @module model/TransitGatewayMulticastRegisteredGroupSources
 * @version 1.0.0
 */
var TransitGatewayMulticastRegisteredGroupSources =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastRegisteredGroupSources</code>.
   * Describes the members registered with the transit gateway multicast group.
   * @alias module:model/TransitGatewayMulticastRegisteredGroupSources
   */
  function TransitGatewayMulticastRegisteredGroupSources() {
    _classCallCheck(this, TransitGatewayMulticastRegisteredGroupSources);

    TransitGatewayMulticastRegisteredGroupSources.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastRegisteredGroupSources, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastRegisteredGroupSources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastRegisteredGroupSources} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastRegisteredGroupSources} The populated <code>TransitGatewayMulticastRegisteredGroupSources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastRegisteredGroupSources();

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

  return TransitGatewayMulticastRegisteredGroupSources;
}();
/**
 * @member {String} GroupIpAddress
 */


TransitGatewayMulticastRegisteredGroupSources.prototype['GroupIpAddress'] = undefined;
/**
 * @member {Array.<String>} RegisteredNetworkInterfaceIds
 */

TransitGatewayMulticastRegisteredGroupSources.prototype['RegisteredNetworkInterfaceIds'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

TransitGatewayMulticastRegisteredGroupSources.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = TransitGatewayMulticastRegisteredGroupSources;
exports["default"] = _default;