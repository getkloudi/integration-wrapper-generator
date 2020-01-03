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
 * The DeleteTransitGatewayPeeringAttachmentRequest model module.
 * @module model/DeleteTransitGatewayPeeringAttachmentRequest
 * @version 1.0.0
 */
var DeleteTransitGatewayPeeringAttachmentRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayPeeringAttachmentRequest</code>.
   * @alias module:model/DeleteTransitGatewayPeeringAttachmentRequest
   * @param transitGatewayAttachmentId {String} 
   */
  function DeleteTransitGatewayPeeringAttachmentRequest(transitGatewayAttachmentId) {
    _classCallCheck(this, DeleteTransitGatewayPeeringAttachmentRequest);

    DeleteTransitGatewayPeeringAttachmentRequest.initialize(this, transitGatewayAttachmentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayPeeringAttachmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayAttachmentId) {
      obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
    }
    /**
     * Constructs a <code>DeleteTransitGatewayPeeringAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayPeeringAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayPeeringAttachmentRequest} The populated <code>DeleteTransitGatewayPeeringAttachmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayPeeringAttachmentRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayPeeringAttachmentRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTransitGatewayPeeringAttachmentRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

DeleteTransitGatewayPeeringAttachmentRequest.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = DeleteTransitGatewayPeeringAttachmentRequest;
exports["default"] = _default;