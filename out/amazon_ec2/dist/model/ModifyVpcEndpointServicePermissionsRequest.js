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
 * The ModifyVpcEndpointServicePermissionsRequest model module.
 * @module model/ModifyVpcEndpointServicePermissionsRequest
 * @version 1.1.0
 */
var ModifyVpcEndpointServicePermissionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcEndpointServicePermissionsRequest</code>.
   * @alias module:model/ModifyVpcEndpointServicePermissionsRequest
   * @param serviceId {String} 
   */
  function ModifyVpcEndpointServicePermissionsRequest(serviceId) {
    _classCallCheck(this, ModifyVpcEndpointServicePermissionsRequest);

    ModifyVpcEndpointServicePermissionsRequest.initialize(this, serviceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcEndpointServicePermissionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceId) {
      obj['ServiceId'] = serviceId;
    }
    /**
     * Constructs a <code>ModifyVpcEndpointServicePermissionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcEndpointServicePermissionsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcEndpointServicePermissionsRequest} The populated <code>ModifyVpcEndpointServicePermissionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcEndpointServicePermissionsRequest();

        if (data.hasOwnProperty('AddAllowedPrincipals')) {
          obj['AddAllowedPrincipals'] = _ApiClient["default"].convertToType(data['AddAllowedPrincipals'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RemoveAllowedPrincipals')) {
          obj['RemoveAllowedPrincipals'] = _ApiClient["default"].convertToType(data['RemoveAllowedPrincipals'], ['String']);
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcEndpointServicePermissionsRequest;
}();
/**
 * @member {Array.<String>} AddAllowedPrincipals
 */


ModifyVpcEndpointServicePermissionsRequest.prototype['AddAllowedPrincipals'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpcEndpointServicePermissionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} RemoveAllowedPrincipals
 */

ModifyVpcEndpointServicePermissionsRequest.prototype['RemoveAllowedPrincipals'] = undefined;
/**
 * @member {String} ServiceId
 */

ModifyVpcEndpointServicePermissionsRequest.prototype['ServiceId'] = undefined;
var _default = ModifyVpcEndpointServicePermissionsRequest;
exports["default"] = _default;