"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModifyTransitGatewayVpcAttachmentRequestOptions = _interopRequireDefault(require("./ModifyTransitGatewayVpcAttachmentRequestOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTransitGatewayVpcAttachmentRequest model module.
 * @module model/ModifyTransitGatewayVpcAttachmentRequest
 * @version 1.0.0
 */
var ModifyTransitGatewayVpcAttachmentRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTransitGatewayVpcAttachmentRequest</code>.
   * @alias module:model/ModifyTransitGatewayVpcAttachmentRequest
   * @param transitGatewayAttachmentId {String} 
   */
  function ModifyTransitGatewayVpcAttachmentRequest(transitGatewayAttachmentId) {
    _classCallCheck(this, ModifyTransitGatewayVpcAttachmentRequest);

    ModifyTransitGatewayVpcAttachmentRequest.initialize(this, transitGatewayAttachmentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTransitGatewayVpcAttachmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayAttachmentId) {
      obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
    }
    /**
     * Constructs a <code>ModifyTransitGatewayVpcAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTransitGatewayVpcAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/ModifyTransitGatewayVpcAttachmentRequest} The populated <code>ModifyTransitGatewayVpcAttachmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTransitGatewayVpcAttachmentRequest();

        if (data.hasOwnProperty('AddSubnetIds')) {
          obj['AddSubnetIds'] = _ApiClient["default"].convertToType(data['AddSubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ModifyTransitGatewayVpcAttachmentRequestOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('RemoveSubnetIds')) {
          obj['RemoveSubnetIds'] = _ApiClient["default"].convertToType(data['RemoveSubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyTransitGatewayVpcAttachmentRequest;
}();
/**
 * @member {Array.<String>} AddSubnetIds
 */


ModifyTransitGatewayVpcAttachmentRequest.prototype['AddSubnetIds'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyTransitGatewayVpcAttachmentRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/ModifyTransitGatewayVpcAttachmentRequestOptions} Options
 */

ModifyTransitGatewayVpcAttachmentRequest.prototype['Options'] = undefined;
/**
 * @member {Array.<String>} RemoveSubnetIds
 */

ModifyTransitGatewayVpcAttachmentRequest.prototype['RemoveSubnetIds'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

ModifyTransitGatewayVpcAttachmentRequest.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = ModifyTransitGatewayVpcAttachmentRequest;
exports["default"] = _default;