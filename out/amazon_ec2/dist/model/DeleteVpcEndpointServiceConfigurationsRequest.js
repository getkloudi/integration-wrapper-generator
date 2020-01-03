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
 * The DeleteVpcEndpointServiceConfigurationsRequest model module.
 * @module model/DeleteVpcEndpointServiceConfigurationsRequest
 * @version 1.0.0
 */
var DeleteVpcEndpointServiceConfigurationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteVpcEndpointServiceConfigurationsRequest</code>.
   * @alias module:model/DeleteVpcEndpointServiceConfigurationsRequest
   * @param serviceIds {Array.<String>} 
   */
  function DeleteVpcEndpointServiceConfigurationsRequest(serviceIds) {
    _classCallCheck(this, DeleteVpcEndpointServiceConfigurationsRequest);

    DeleteVpcEndpointServiceConfigurationsRequest.initialize(this, serviceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteVpcEndpointServiceConfigurationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceIds) {
      obj['ServiceIds'] = serviceIds;
    }
    /**
     * Constructs a <code>DeleteVpcEndpointServiceConfigurationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteVpcEndpointServiceConfigurationsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteVpcEndpointServiceConfigurationsRequest} The populated <code>DeleteVpcEndpointServiceConfigurationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteVpcEndpointServiceConfigurationsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ServiceIds')) {
          obj['ServiceIds'] = _ApiClient["default"].convertToType(data['ServiceIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteVpcEndpointServiceConfigurationsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteVpcEndpointServiceConfigurationsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ServiceIds
 */

DeleteVpcEndpointServiceConfigurationsRequest.prototype['ServiceIds'] = undefined;
var _default = DeleteVpcEndpointServiceConfigurationsRequest;
exports["default"] = _default;