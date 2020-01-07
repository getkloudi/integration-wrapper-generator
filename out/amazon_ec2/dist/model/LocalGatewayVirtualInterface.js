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
 * The LocalGatewayVirtualInterface model module.
 * @module model/LocalGatewayVirtualInterface
 * @version 1.1.0
 */
var LocalGatewayVirtualInterface =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LocalGatewayVirtualInterface</code>.
   * Describes a local gateway virtual interface.
   * @alias module:model/LocalGatewayVirtualInterface
   */
  function LocalGatewayVirtualInterface() {
    _classCallCheck(this, LocalGatewayVirtualInterface);

    LocalGatewayVirtualInterface.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalGatewayVirtualInterface, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalGatewayVirtualInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalGatewayVirtualInterface} obj Optional instance to populate.
     * @return {module:model/LocalGatewayVirtualInterface} The populated <code>LocalGatewayVirtualInterface</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalGatewayVirtualInterface();

        if (data.hasOwnProperty('LocalAddress')) {
          obj['LocalAddress'] = _ApiClient["default"].convertToType(data['LocalAddress'], 'String');
        }

        if (data.hasOwnProperty('LocalBgpAsn')) {
          obj['LocalBgpAsn'] = _ApiClient["default"].convertToType(data['LocalBgpAsn'], 'Number');
        }

        if (data.hasOwnProperty('LocalGatewayId')) {
          obj['LocalGatewayId'] = _ApiClient["default"].convertToType(data['LocalGatewayId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayVirtualInterfaceId')) {
          obj['LocalGatewayVirtualInterfaceId'] = _ApiClient["default"].convertToType(data['LocalGatewayVirtualInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PeerAddress')) {
          obj['PeerAddress'] = _ApiClient["default"].convertToType(data['PeerAddress'], 'String');
        }

        if (data.hasOwnProperty('PeerBgpAsn')) {
          obj['PeerBgpAsn'] = _ApiClient["default"].convertToType(data['PeerBgpAsn'], 'Number');
        }

        if (data.hasOwnProperty('Vlan')) {
          obj['Vlan'] = _ApiClient["default"].convertToType(data['Vlan'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LocalGatewayVirtualInterface;
}();
/**
 * @member {String} LocalAddress
 */


LocalGatewayVirtualInterface.prototype['LocalAddress'] = undefined;
/**
 * @member {Number} LocalBgpAsn
 */

LocalGatewayVirtualInterface.prototype['LocalBgpAsn'] = undefined;
/**
 * @member {String} LocalGatewayId
 */

LocalGatewayVirtualInterface.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} LocalGatewayVirtualInterfaceId
 */

LocalGatewayVirtualInterface.prototype['LocalGatewayVirtualInterfaceId'] = undefined;
/**
 * @member {String} PeerAddress
 */

LocalGatewayVirtualInterface.prototype['PeerAddress'] = undefined;
/**
 * @member {Number} PeerBgpAsn
 */

LocalGatewayVirtualInterface.prototype['PeerBgpAsn'] = undefined;
/**
 * @member {Number} Vlan
 */

LocalGatewayVirtualInterface.prototype['Vlan'] = undefined;
var _default = LocalGatewayVirtualInterface;
exports["default"] = _default;