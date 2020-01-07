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
 * The RejectTransitGatewayVpcAttachmentRequest model module.
 * @module model/RejectTransitGatewayVpcAttachmentRequest
 * @version 1.1.0
 */
var RejectTransitGatewayVpcAttachmentRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RejectTransitGatewayVpcAttachmentRequest</code>.
   * @alias module:model/RejectTransitGatewayVpcAttachmentRequest
   * @param transitGatewayAttachmentId {String} 
   */
  function RejectTransitGatewayVpcAttachmentRequest(transitGatewayAttachmentId) {
    _classCallCheck(this, RejectTransitGatewayVpcAttachmentRequest);

    RejectTransitGatewayVpcAttachmentRequest.initialize(this, transitGatewayAttachmentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RejectTransitGatewayVpcAttachmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayAttachmentId) {
      obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
    }
    /**
     * Constructs a <code>RejectTransitGatewayVpcAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectTransitGatewayVpcAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/RejectTransitGatewayVpcAttachmentRequest} The populated <code>RejectTransitGatewayVpcAttachmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RejectTransitGatewayVpcAttachmentRequest();

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

  return RejectTransitGatewayVpcAttachmentRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RejectTransitGatewayVpcAttachmentRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

RejectTransitGatewayVpcAttachmentRequest.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = RejectTransitGatewayVpcAttachmentRequest;
exports["default"] = _default;