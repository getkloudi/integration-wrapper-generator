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
 * The EnableTransitGatewayRouteTablePropagationRequest model module.
 * @module model/EnableTransitGatewayRouteTablePropagationRequest
 * @version 1.1.0
 */
var EnableTransitGatewayRouteTablePropagationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableTransitGatewayRouteTablePropagationRequest</code>.
   * @alias module:model/EnableTransitGatewayRouteTablePropagationRequest
   * @param transitGatewayAttachmentId {String} 
   * @param transitGatewayRouteTableId {String} 
   */
  function EnableTransitGatewayRouteTablePropagationRequest(transitGatewayAttachmentId, transitGatewayRouteTableId) {
    _classCallCheck(this, EnableTransitGatewayRouteTablePropagationRequest);

    EnableTransitGatewayRouteTablePropagationRequest.initialize(this, transitGatewayAttachmentId, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableTransitGatewayRouteTablePropagationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayAttachmentId, transitGatewayRouteTableId) {
      obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>EnableTransitGatewayRouteTablePropagationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableTransitGatewayRouteTablePropagationRequest} obj Optional instance to populate.
     * @return {module:model/EnableTransitGatewayRouteTablePropagationRequest} The populated <code>EnableTransitGatewayRouteTablePropagationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableTransitGatewayRouteTablePropagationRequest();

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

  return EnableTransitGatewayRouteTablePropagationRequest;
}();
/**
 * @member {Boolean} DryRun
 */


EnableTransitGatewayRouteTablePropagationRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

EnableTransitGatewayRouteTablePropagationRequest.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

EnableTransitGatewayRouteTablePropagationRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = EnableTransitGatewayRouteTablePropagationRequest;
exports["default"] = _default;