"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceNetworkInterfaceAssociation = _interopRequireDefault(require("./InstanceNetworkInterfaceAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstancePrivateIpAddress model module.
 * @module model/InstancePrivateIpAddress
 * @version 1.1.0
 */
var InstancePrivateIpAddress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstancePrivateIpAddress</code>.
   * Describes a private IPv4 address.
   * @alias module:model/InstancePrivateIpAddress
   */
  function InstancePrivateIpAddress() {
    _classCallCheck(this, InstancePrivateIpAddress);

    InstancePrivateIpAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstancePrivateIpAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstancePrivateIpAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstancePrivateIpAddress} obj Optional instance to populate.
     * @return {module:model/InstancePrivateIpAddress} The populated <code>InstancePrivateIpAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstancePrivateIpAddress();

        if (data.hasOwnProperty('Association')) {
          obj['Association'] = _InstanceNetworkInterfaceAssociation["default"].constructFromObject(data['Association']);
        }

        if (data.hasOwnProperty('Primary')) {
          obj['Primary'] = _ApiClient["default"].convertToType(data['Primary'], 'Boolean');
        }

        if (data.hasOwnProperty('PrivateDnsName')) {
          obj['PrivateDnsName'] = _ApiClient["default"].convertToType(data['PrivateDnsName'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstancePrivateIpAddress;
}();
/**
 * @member {module:model/InstanceNetworkInterfaceAssociation} Association
 */


InstancePrivateIpAddress.prototype['Association'] = undefined;
/**
 * @member {Boolean} Primary
 */

InstancePrivateIpAddress.prototype['Primary'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

InstancePrivateIpAddress.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

InstancePrivateIpAddress.prototype['PrivateIpAddress'] = undefined;
var _default = InstancePrivateIpAddress;
exports["default"] = _default;