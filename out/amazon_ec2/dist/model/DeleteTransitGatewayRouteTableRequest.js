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
 * The DeleteTransitGatewayRouteTableRequest model module.
 * @module model/DeleteTransitGatewayRouteTableRequest
 * @version 1.1.0
 */
var DeleteTransitGatewayRouteTableRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayRouteTableRequest</code>.
   * @alias module:model/DeleteTransitGatewayRouteTableRequest
   * @param transitGatewayRouteTableId {String} 
   */
  function DeleteTransitGatewayRouteTableRequest(transitGatewayRouteTableId) {
    _classCallCheck(this, DeleteTransitGatewayRouteTableRequest);

    DeleteTransitGatewayRouteTableRequest.initialize(this, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayRouteTableRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayRouteTableId) {
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>DeleteTransitGatewayRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayRouteTableRequest} The populated <code>DeleteTransitGatewayRouteTableRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayRouteTableRequest();

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

  return DeleteTransitGatewayRouteTableRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTransitGatewayRouteTableRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

DeleteTransitGatewayRouteTableRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = DeleteTransitGatewayRouteTableRequest;
exports["default"] = _default;