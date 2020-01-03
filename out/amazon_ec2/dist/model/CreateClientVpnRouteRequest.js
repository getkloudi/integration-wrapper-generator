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
 * The CreateClientVpnRouteRequest model module.
 * @module model/CreateClientVpnRouteRequest
 * @version 1.0.0
 */
var CreateClientVpnRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateClientVpnRouteRequest</code>.
   * @alias module:model/CreateClientVpnRouteRequest
   * @param clientVpnEndpointId {String} 
   * @param destinationCidrBlock {String} 
   * @param targetVpcSubnetId {String} 
   */
  function CreateClientVpnRouteRequest(clientVpnEndpointId, destinationCidrBlock, targetVpcSubnetId) {
    _classCallCheck(this, CreateClientVpnRouteRequest);

    CreateClientVpnRouteRequest.initialize(this, clientVpnEndpointId, destinationCidrBlock, targetVpcSubnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateClientVpnRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, destinationCidrBlock, targetVpcSubnetId) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['TargetVpcSubnetId'] = targetVpcSubnetId;
    }
    /**
     * Constructs a <code>CreateClientVpnRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClientVpnRouteRequest} obj Optional instance to populate.
     * @return {module:model/CreateClientVpnRouteRequest} The populated <code>CreateClientVpnRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateClientVpnRouteRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
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

  return CreateClientVpnRouteRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateClientVpnRouteRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

CreateClientVpnRouteRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} Description
 */

CreateClientVpnRouteRequest.prototype['Description'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

CreateClientVpnRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateClientVpnRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TargetVpcSubnetId
 */

CreateClientVpnRouteRequest.prototype['TargetVpcSubnetId'] = undefined;
var _default = CreateClientVpnRouteRequest;
exports["default"] = _default;