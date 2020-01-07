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
 * The DeleteVpnConnectionRequest model module.
 * @module model/DeleteVpnConnectionRequest
 * @version 1.1.0
 */
var DeleteVpnConnectionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteVpnConnectionRequest</code>.
   * Contains the parameters for DeleteVpnConnection.
   * @alias module:model/DeleteVpnConnectionRequest
   * @param vpnConnectionId {String} 
   */
  function DeleteVpnConnectionRequest(vpnConnectionId) {
    _classCallCheck(this, DeleteVpnConnectionRequest);

    DeleteVpnConnectionRequest.initialize(this, vpnConnectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteVpnConnectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpnConnectionId) {
      obj['VpnConnectionId'] = vpnConnectionId;
    }
    /**
     * Constructs a <code>DeleteVpnConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteVpnConnectionRequest} obj Optional instance to populate.
     * @return {module:model/DeleteVpnConnectionRequest} The populated <code>DeleteVpnConnectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteVpnConnectionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpnConnectionId')) {
          obj['VpnConnectionId'] = _ApiClient["default"].convertToType(data['VpnConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteVpnConnectionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteVpnConnectionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

DeleteVpnConnectionRequest.prototype['VpnConnectionId'] = undefined;
var _default = DeleteVpnConnectionRequest;
exports["default"] = _default;