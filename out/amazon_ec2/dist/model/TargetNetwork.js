"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AssociationStatus = _interopRequireDefault(require("./AssociationStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TargetNetwork model module.
 * @module model/TargetNetwork
 * @version 1.0.0
 */
var TargetNetwork =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetNetwork</code>.
   * Describes a target network associated with a Client VPN endpoint.
   * @alias module:model/TargetNetwork
   */
  function TargetNetwork() {
    _classCallCheck(this, TargetNetwork);

    TargetNetwork.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetNetwork, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TargetNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetNetwork} obj Optional instance to populate.
     * @return {module:model/TargetNetwork} The populated <code>TargetNetwork</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetNetwork();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('SecurityGroups')) {
          obj['SecurityGroups'] = _ApiClient["default"].convertToType(data['SecurityGroups'], ['String']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _AssociationStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('TargetNetworkId')) {
          obj['TargetNetworkId'] = _ApiClient["default"].convertToType(data['TargetNetworkId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TargetNetwork;
}();
/**
 * @member {String} AssociationId
 */


TargetNetwork.prototype['AssociationId'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

TargetNetwork.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroups
 */

TargetNetwork.prototype['SecurityGroups'] = undefined;
/**
 * @member {module:model/AssociationStatus} Status
 */

TargetNetwork.prototype['Status'] = undefined;
/**
 * @member {String} TargetNetworkId
 */

TargetNetwork.prototype['TargetNetworkId'] = undefined;
/**
 * @member {String} VpcId
 */

TargetNetwork.prototype['VpcId'] = undefined;
var _default = TargetNetwork;
exports["default"] = _default;