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
 * The DeleteClientVpnRouteRequest model module.
 * @module model/DeleteClientVpnRouteRequest
 * @version 1.1.0
 */
var DeleteClientVpnRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteClientVpnRouteRequest</code>.
   * @alias module:model/DeleteClientVpnRouteRequest
   * @param clientVpnEndpointId {String} 
   * @param destinationCidrBlock {String} 
   */
  function DeleteClientVpnRouteRequest(clientVpnEndpointId, destinationCidrBlock) {
    _classCallCheck(this, DeleteClientVpnRouteRequest);

    DeleteClientVpnRouteRequest.initialize(this, clientVpnEndpointId, destinationCidrBlock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteClientVpnRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, destinationCidrBlock) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['DestinationCidrBlock'] = destinationCidrBlock;
    }
    /**
     * Constructs a <code>DeleteClientVpnRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteClientVpnRouteRequest} obj Optional instance to populate.
     * @return {module:model/DeleteClientVpnRouteRequest} The populated <code>DeleteClientVpnRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteClientVpnRouteRequest();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TargetVpcSubnetId')) {
          obj['TargetVpcSubnetId'] = _ApiClient["default"].convertToType(data['TargetVpcSubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteClientVpnRouteRequest;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


DeleteClientVpnRouteRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

DeleteClientVpnRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteClientVpnRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TargetVpcSubnetId
 */

DeleteClientVpnRouteRequest.prototype['TargetVpcSubnetId'] = undefined;
var _default = DeleteClientVpnRouteRequest;
exports["default"] = _default;