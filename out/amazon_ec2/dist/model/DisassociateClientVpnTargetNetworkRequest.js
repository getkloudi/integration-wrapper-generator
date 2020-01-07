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
 * The DisassociateClientVpnTargetNetworkRequest model module.
 * @module model/DisassociateClientVpnTargetNetworkRequest
 * @version 1.1.0
 */
var DisassociateClientVpnTargetNetworkRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateClientVpnTargetNetworkRequest</code>.
   * @alias module:model/DisassociateClientVpnTargetNetworkRequest
   * @param associationId {String} 
   * @param clientVpnEndpointId {String} 
   */
  function DisassociateClientVpnTargetNetworkRequest(associationId, clientVpnEndpointId) {
    _classCallCheck(this, DisassociateClientVpnTargetNetworkRequest);

    DisassociateClientVpnTargetNetworkRequest.initialize(this, associationId, clientVpnEndpointId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateClientVpnTargetNetworkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId, clientVpnEndpointId) {
      obj['AssociationId'] = associationId;
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
    }
    /**
     * Constructs a <code>DisassociateClientVpnTargetNetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateClientVpnTargetNetworkRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateClientVpnTargetNetworkRequest} The populated <code>DisassociateClientVpnTargetNetworkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateClientVpnTargetNetworkRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DisassociateClientVpnTargetNetworkRequest;
}();
/**
 * @member {String} AssociationId
 */


DisassociateClientVpnTargetNetworkRequest.prototype['AssociationId'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

DisassociateClientVpnTargetNetworkRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DisassociateClientVpnTargetNetworkRequest.prototype['DryRun'] = undefined;
var _default = DisassociateClientVpnTargetNetworkRequest;
exports["default"] = _default;