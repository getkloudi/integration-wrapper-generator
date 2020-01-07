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
 * The InstanceNetworkInterfaceAssociation model module.
 * @module model/InstanceNetworkInterfaceAssociation
 * @version 1.1.0
 */
var InstanceNetworkInterfaceAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceNetworkInterfaceAssociation</code>.
   * Describes association information for an Elastic IP address (IPv4).
   * @alias module:model/InstanceNetworkInterfaceAssociation
   */
  function InstanceNetworkInterfaceAssociation() {
    _classCallCheck(this, InstanceNetworkInterfaceAssociation);

    InstanceNetworkInterfaceAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceNetworkInterfaceAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceNetworkInterfaceAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceNetworkInterfaceAssociation} obj Optional instance to populate.
     * @return {module:model/InstanceNetworkInterfaceAssociation} The populated <code>InstanceNetworkInterfaceAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceNetworkInterfaceAssociation();

        if (data.hasOwnProperty('IpOwnerId')) {
          obj['IpOwnerId'] = _ApiClient["default"].convertToType(data['IpOwnerId'], 'String');
        }

        if (data.hasOwnProperty('PublicDnsName')) {
          obj['PublicDnsName'] = _ApiClient["default"].convertToType(data['PublicDnsName'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstanceNetworkInterfaceAssociation;
}();
/**
 * @member {String} IpOwnerId
 */


InstanceNetworkInterfaceAssociation.prototype['IpOwnerId'] = undefined;
/**
 * @member {String} PublicDnsName
 */

InstanceNetworkInterfaceAssociation.prototype['PublicDnsName'] = undefined;
/**
 * @member {String} PublicIp
 */

InstanceNetworkInterfaceAssociation.prototype['PublicIp'] = undefined;
var _default = InstanceNetworkInterfaceAssociation;
exports["default"] = _default;