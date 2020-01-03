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
 * The NetworkInterfaceAssociation model module.
 * @module model/NetworkInterfaceAssociation
 * @version 1.0.0
 */
var NetworkInterfaceAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkInterfaceAssociation</code>.
   * Describes association information for an Elastic IP address (IPv4 only).
   * @alias module:model/NetworkInterfaceAssociation
   */
  function NetworkInterfaceAssociation() {
    _classCallCheck(this, NetworkInterfaceAssociation);

    NetworkInterfaceAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkInterfaceAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkInterfaceAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkInterfaceAssociation} obj Optional instance to populate.
     * @return {module:model/NetworkInterfaceAssociation} The populated <code>NetworkInterfaceAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkInterfaceAssociation();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

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

  return NetworkInterfaceAssociation;
}();
/**
 * @member {String} AllocationId
 */


NetworkInterfaceAssociation.prototype['AllocationId'] = undefined;
/**
 * @member {String} AssociationId
 */

NetworkInterfaceAssociation.prototype['AssociationId'] = undefined;
/**
 * @member {String} IpOwnerId
 */

NetworkInterfaceAssociation.prototype['IpOwnerId'] = undefined;
/**
 * @member {String} PublicDnsName
 */

NetworkInterfaceAssociation.prototype['PublicDnsName'] = undefined;
/**
 * @member {String} PublicIp
 */

NetworkInterfaceAssociation.prototype['PublicIp'] = undefined;
var _default = NetworkInterfaceAssociation;
exports["default"] = _default;