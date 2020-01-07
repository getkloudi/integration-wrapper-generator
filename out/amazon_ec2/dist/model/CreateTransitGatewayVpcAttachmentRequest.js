"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTransitGatewayVpcAttachmentRequestOptions = _interopRequireDefault(require("./CreateTransitGatewayVpcAttachmentRequestOptions"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTransitGatewayVpcAttachmentRequest model module.
 * @module model/CreateTransitGatewayVpcAttachmentRequest
 * @version 1.1.0
 */
var CreateTransitGatewayVpcAttachmentRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayVpcAttachmentRequest</code>.
   * @alias module:model/CreateTransitGatewayVpcAttachmentRequest
   * @param subnetIds {Array.<String>} 
   * @param transitGatewayId {String} 
   * @param vpcId {String} 
   */
  function CreateTransitGatewayVpcAttachmentRequest(subnetIds, transitGatewayId, vpcId) {
    _classCallCheck(this, CreateTransitGatewayVpcAttachmentRequest);

    CreateTransitGatewayVpcAttachmentRequest.initialize(this, subnetIds, transitGatewayId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayVpcAttachmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, subnetIds, transitGatewayId, vpcId) {
      obj['SubnetIds'] = subnetIds;
      obj['TransitGatewayId'] = transitGatewayId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>CreateTransitGatewayVpcAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayVpcAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayVpcAttachmentRequest} The populated <code>CreateTransitGatewayVpcAttachmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayVpcAttachmentRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _CreateTransitGatewayVpcAttachmentRequestOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('SubnetIds')) {
          obj['SubnetIds'] = _ApiClient["default"].convertToType(data['SubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTransitGatewayVpcAttachmentRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateTransitGatewayVpcAttachmentRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/CreateTransitGatewayVpcAttachmentRequestOptions} Options
 */

CreateTransitGatewayVpcAttachmentRequest.prototype['Options'] = undefined;
/**
 * @member {Array.<String>} SubnetIds
 */

CreateTransitGatewayVpcAttachmentRequest.prototype['SubnetIds'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTransitGatewayVpcAttachmentRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

CreateTransitGatewayVpcAttachmentRequest.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} VpcId
 */

CreateTransitGatewayVpcAttachmentRequest.prototype['VpcId'] = undefined;
var _default = CreateTransitGatewayVpcAttachmentRequest;
exports["default"] = _default;