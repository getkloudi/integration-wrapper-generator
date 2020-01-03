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
 * The CreateLocalGatewayRouteTableVpcAssociationRequest model module.
 * @module model/CreateLocalGatewayRouteTableVpcAssociationRequest
 * @version 1.0.0
 */
var CreateLocalGatewayRouteTableVpcAssociationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateLocalGatewayRouteTableVpcAssociationRequest</code>.
   * @alias module:model/CreateLocalGatewayRouteTableVpcAssociationRequest
   * @param localGatewayRouteTableId {String} 
   * @param vpcId {String} 
   */
  function CreateLocalGatewayRouteTableVpcAssociationRequest(localGatewayRouteTableId, vpcId) {
    _classCallCheck(this, CreateLocalGatewayRouteTableVpcAssociationRequest);

    CreateLocalGatewayRouteTableVpcAssociationRequest.initialize(this, localGatewayRouteTableId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLocalGatewayRouteTableVpcAssociationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, localGatewayRouteTableId, vpcId) {
      obj['LocalGatewayRouteTableId'] = localGatewayRouteTableId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>CreateLocalGatewayRouteTableVpcAssociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLocalGatewayRouteTableVpcAssociationRequest} obj Optional instance to populate.
     * @return {module:model/CreateLocalGatewayRouteTableVpcAssociationRequest} The populated <code>CreateLocalGatewayRouteTableVpcAssociationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLocalGatewayRouteTableVpcAssociationRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateLocalGatewayRouteTableVpcAssociationRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateLocalGatewayRouteTableVpcAssociationRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

CreateLocalGatewayRouteTableVpcAssociationRequest.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {String} VpcId
 */

CreateLocalGatewayRouteTableVpcAssociationRequest.prototype['VpcId'] = undefined;
var _default = CreateLocalGatewayRouteTableVpcAssociationRequest;
exports["default"] = _default;