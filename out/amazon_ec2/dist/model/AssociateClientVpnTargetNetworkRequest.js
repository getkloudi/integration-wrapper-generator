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
 * The AssociateClientVpnTargetNetworkRequest model module.
 * @module model/AssociateClientVpnTargetNetworkRequest
 * @version 1.0.0
 */
var AssociateClientVpnTargetNetworkRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateClientVpnTargetNetworkRequest</code>.
   * @alias module:model/AssociateClientVpnTargetNetworkRequest
   * @param clientVpnEndpointId {String} 
   * @param subnetId {String} 
   */
  function AssociateClientVpnTargetNetworkRequest(clientVpnEndpointId, subnetId) {
    _classCallCheck(this, AssociateClientVpnTargetNetworkRequest);

    AssociateClientVpnTargetNetworkRequest.initialize(this, clientVpnEndpointId, subnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateClientVpnTargetNetworkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, subnetId) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['SubnetId'] = subnetId;
    }
    /**
     * Constructs a <code>AssociateClientVpnTargetNetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateClientVpnTargetNetworkRequest} obj Optional instance to populate.
     * @return {module:model/AssociateClientVpnTargetNetworkRequest} The populated <code>AssociateClientVpnTargetNetworkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateClientVpnTargetNetworkRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateClientVpnTargetNetworkRequest;
}();
/**
 * @member {String} ClientToken
 */


AssociateClientVpnTargetNetworkRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

AssociateClientVpnTargetNetworkRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AssociateClientVpnTargetNetworkRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} SubnetId
 */

AssociateClientVpnTargetNetworkRequest.prototype['SubnetId'] = undefined;
var _default = AssociateClientVpnTargetNetworkRequest;
exports["default"] = _default;