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
 * The DeleteLocalGatewayRouteTableVpcAssociationRequest model module.
 * @module model/DeleteLocalGatewayRouteTableVpcAssociationRequest
 * @version 1.1.0
 */
var DeleteLocalGatewayRouteTableVpcAssociationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteLocalGatewayRouteTableVpcAssociationRequest</code>.
   * @alias module:model/DeleteLocalGatewayRouteTableVpcAssociationRequest
   * @param localGatewayRouteTableVpcAssociationId {String} 
   */
  function DeleteLocalGatewayRouteTableVpcAssociationRequest(localGatewayRouteTableVpcAssociationId) {
    _classCallCheck(this, DeleteLocalGatewayRouteTableVpcAssociationRequest);

    DeleteLocalGatewayRouteTableVpcAssociationRequest.initialize(this, localGatewayRouteTableVpcAssociationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteLocalGatewayRouteTableVpcAssociationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, localGatewayRouteTableVpcAssociationId) {
      obj['LocalGatewayRouteTableVpcAssociationId'] = localGatewayRouteTableVpcAssociationId;
    }
    /**
     * Constructs a <code>DeleteLocalGatewayRouteTableVpcAssociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLocalGatewayRouteTableVpcAssociationRequest} obj Optional instance to populate.
     * @return {module:model/DeleteLocalGatewayRouteTableVpcAssociationRequest} The populated <code>DeleteLocalGatewayRouteTableVpcAssociationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteLocalGatewayRouteTableVpcAssociationRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableVpcAssociationId')) {
          obj['LocalGatewayRouteTableVpcAssociationId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableVpcAssociationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteLocalGatewayRouteTableVpcAssociationRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteLocalGatewayRouteTableVpcAssociationRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableVpcAssociationId
 */

DeleteLocalGatewayRouteTableVpcAssociationRequest.prototype['LocalGatewayRouteTableVpcAssociationId'] = undefined;
var _default = DeleteLocalGatewayRouteTableVpcAssociationRequest;
exports["default"] = _default;