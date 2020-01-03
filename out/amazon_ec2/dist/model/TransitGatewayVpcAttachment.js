"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayAttachmentState = _interopRequireDefault(require("./TransitGatewayAttachmentState"));

var _TransitGatewayVpcAttachmentOptions = _interopRequireDefault(require("./TransitGatewayVpcAttachmentOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayVpcAttachment model module.
 * @module model/TransitGatewayVpcAttachment
 * @version 1.0.0
 */
var TransitGatewayVpcAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayVpcAttachment</code>.
   * Describes a VPC attachment.
   * @alias module:model/TransitGatewayVpcAttachment
   */
  function TransitGatewayVpcAttachment() {
    _classCallCheck(this, TransitGatewayVpcAttachment);

    TransitGatewayVpcAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayVpcAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayVpcAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayVpcAttachment} obj Optional instance to populate.
     * @return {module:model/TransitGatewayVpcAttachment} The populated <code>TransitGatewayVpcAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayVpcAttachment();

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _TransitGatewayVpcAttachmentOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayAttachmentState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('SubnetIds')) {
          obj['SubnetIds'] = _ApiClient["default"].convertToType(data['SubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }

        if (data.hasOwnProperty('VpcOwnerId')) {
          obj['VpcOwnerId'] = _ApiClient["default"].convertToType(data['VpcOwnerId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayVpcAttachment;
}();
/**
 * @member {Date} CreationTime
 */


TransitGatewayVpcAttachment.prototype['CreationTime'] = undefined;
/**
 * @member {module:model/TransitGatewayVpcAttachmentOptions} Options
 */

TransitGatewayVpcAttachment.prototype['Options'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentState} State
 */

TransitGatewayVpcAttachment.prototype['State'] = undefined;
/**
 * @member {Array.<String>} SubnetIds
 */

TransitGatewayVpcAttachment.prototype['SubnetIds'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGatewayVpcAttachment.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayVpcAttachment.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

TransitGatewayVpcAttachment.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} VpcId
 */

TransitGatewayVpcAttachment.prototype['VpcId'] = undefined;
/**
 * @member {String} VpcOwnerId
 */

TransitGatewayVpcAttachment.prototype['VpcOwnerId'] = undefined;
var _default = TransitGatewayVpcAttachment;
exports["default"] = _default;