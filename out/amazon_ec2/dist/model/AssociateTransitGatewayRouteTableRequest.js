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
 * The AssociateTransitGatewayRouteTableRequest model module.
 * @module model/AssociateTransitGatewayRouteTableRequest
 * @version 1.0.0
 */
var AssociateTransitGatewayRouteTableRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateTransitGatewayRouteTableRequest</code>.
   * @alias module:model/AssociateTransitGatewayRouteTableRequest
   * @param transitGatewayAttachmentId {String} 
   * @param transitGatewayRouteTableId {String} 
   */
  function AssociateTransitGatewayRouteTableRequest(transitGatewayAttachmentId, transitGatewayRouteTableId) {
    _classCallCheck(this, AssociateTransitGatewayRouteTableRequest);

    AssociateTransitGatewayRouteTableRequest.initialize(this, transitGatewayAttachmentId, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateTransitGatewayRouteTableRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayAttachmentId, transitGatewayRouteTableId) {
      obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>AssociateTransitGatewayRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateTransitGatewayRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/AssociateTransitGatewayRouteTableRequest} The populated <code>AssociateTransitGatewayRouteTableRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateTransitGatewayRouteTableRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateTransitGatewayRouteTableRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AssociateTransitGatewayRouteTableRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

AssociateTransitGatewayRouteTableRequest.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

AssociateTransitGatewayRouteTableRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = AssociateTransitGatewayRouteTableRequest;
exports["default"] = _default;