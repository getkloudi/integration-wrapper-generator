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
 * The DeleteLocalGatewayRouteRequest model module.
 * @module model/DeleteLocalGatewayRouteRequest
 * @version 1.0.0
 */
var DeleteLocalGatewayRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteLocalGatewayRouteRequest</code>.
   * @alias module:model/DeleteLocalGatewayRouteRequest
   * @param destinationCidrBlock {String} 
   * @param localGatewayRouteTableId {String} 
   */
  function DeleteLocalGatewayRouteRequest(destinationCidrBlock, localGatewayRouteTableId) {
    _classCallCheck(this, DeleteLocalGatewayRouteRequest);

    DeleteLocalGatewayRouteRequest.initialize(this, destinationCidrBlock, localGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteLocalGatewayRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, destinationCidrBlock, localGatewayRouteTableId) {
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['LocalGatewayRouteTableId'] = localGatewayRouteTableId;
    }
    /**
     * Constructs a <code>DeleteLocalGatewayRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLocalGatewayRouteRequest} obj Optional instance to populate.
     * @return {module:model/DeleteLocalGatewayRouteRequest} The populated <code>DeleteLocalGatewayRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteLocalGatewayRouteRequest();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteLocalGatewayRouteRequest;
}();
/**
 * @member {String} DestinationCidrBlock
 */


DeleteLocalGatewayRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteLocalGatewayRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

DeleteLocalGatewayRouteRequest.prototype['LocalGatewayRouteTableId'] = undefined;
var _default = DeleteLocalGatewayRouteRequest;
exports["default"] = _default;