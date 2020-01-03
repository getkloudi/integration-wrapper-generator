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
 * The TransitGatewayMulticastDeregisteredGroupSources model module.
 * @module model/TransitGatewayMulticastDeregisteredGroupSources
 * @version 1.0.0
 */
var TransitGatewayMulticastDeregisteredGroupSources =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastDeregisteredGroupSources</code>.
   * Describes the deregistered transit gateway multicast group sources.
   * @alias module:model/TransitGatewayMulticastDeregisteredGroupSources
   */
  function TransitGatewayMulticastDeregisteredGroupSources() {
    _classCallCheck(this, TransitGatewayMulticastDeregisteredGroupSources);

    TransitGatewayMulticastDeregisteredGroupSources.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastDeregisteredGroupSources, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastDeregisteredGroupSources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastDeregisteredGroupSources} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastDeregisteredGroupSources} The populated <code>TransitGatewayMulticastDeregisteredGroupSources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastDeregisteredGroupSources();

        if (data.hasOwnProperty('DeregisteredNetworkInterfaceIds')) {
          obj['DeregisteredNetworkInterfaceIds'] = _ApiClient["default"].convertToType(data['DeregisteredNetworkInterfaceIds'], ['String']);
        }

        if (data.hasOwnProperty('GroupIpAddress')) {
          obj['GroupIpAddress'] = _ApiClient["default"].convertToType(data['GroupIpAddress'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastDeregisteredGroupSources;
}();
/**
 * @member {Array.<String>} DeregisteredNetworkInterfaceIds
 */


TransitGatewayMulticastDeregisteredGroupSources.prototype['DeregisteredNetworkInterfaceIds'] = undefined;
/**
 * @member {String} GroupIpAddress
 */

TransitGatewayMulticastDeregisteredGroupSources.prototype['GroupIpAddress'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

TransitGatewayMulticastDeregisteredGroupSources.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = TransitGatewayMulticastDeregisteredGroupSources;
exports["default"] = _default;