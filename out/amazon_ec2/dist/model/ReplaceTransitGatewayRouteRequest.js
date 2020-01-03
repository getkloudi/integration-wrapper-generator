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
 * The ReplaceTransitGatewayRouteRequest model module.
 * @module model/ReplaceTransitGatewayRouteRequest
 * @version 1.0.0
 */
var ReplaceTransitGatewayRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceTransitGatewayRouteRequest</code>.
   * @alias module:model/ReplaceTransitGatewayRouteRequest
   * @param destinationCidrBlock {String} 
   * @param transitGatewayRouteTableId {String} 
   */
  function ReplaceTransitGatewayRouteRequest(destinationCidrBlock, transitGatewayRouteTableId) {
    _classCallCheck(this, ReplaceTransitGatewayRouteRequest);

    ReplaceTransitGatewayRouteRequest.initialize(this, destinationCidrBlock, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceTransitGatewayRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, destinationCidrBlock, transitGatewayRouteTableId) {
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>ReplaceTransitGatewayRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceTransitGatewayRouteRequest} obj Optional instance to populate.
     * @return {module:model/ReplaceTransitGatewayRouteRequest} The populated <code>ReplaceTransitGatewayRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceTransitGatewayRouteRequest();

        if (data.hasOwnProperty('Blackhole')) {
          obj['Blackhole'] = _ApiClient["default"].convertToType(data['Blackhole'], 'Boolean');
        }

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

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

  return ReplaceTransitGatewayRouteRequest;
}();
/**
 * @member {Boolean} Blackhole
 */


ReplaceTransitGatewayRouteRequest.prototype['Blackhole'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

ReplaceTransitGatewayRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReplaceTransitGatewayRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

ReplaceTransitGatewayRouteRequest.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

ReplaceTransitGatewayRouteRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = ReplaceTransitGatewayRouteRequest;
exports["default"] = _default;