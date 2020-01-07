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
 * The DeleteTransitGatewayRouteRequest model module.
 * @module model/DeleteTransitGatewayRouteRequest
 * @version 1.1.0
 */
var DeleteTransitGatewayRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayRouteRequest</code>.
   * @alias module:model/DeleteTransitGatewayRouteRequest
   * @param destinationCidrBlock {String} 
   * @param transitGatewayRouteTableId {String} 
   */
  function DeleteTransitGatewayRouteRequest(destinationCidrBlock, transitGatewayRouteTableId) {
    _classCallCheck(this, DeleteTransitGatewayRouteRequest);

    DeleteTransitGatewayRouteRequest.initialize(this, destinationCidrBlock, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, destinationCidrBlock, transitGatewayRouteTableId) {
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>DeleteTransitGatewayRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayRouteRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayRouteRequest} The populated <code>DeleteTransitGatewayRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayRouteRequest();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayRouteRequest;
}();
/**
 * @member {String} DestinationCidrBlock
 */


DeleteTransitGatewayRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteTransitGatewayRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

DeleteTransitGatewayRouteRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = DeleteTransitGatewayRouteRequest;
exports["default"] = _default;