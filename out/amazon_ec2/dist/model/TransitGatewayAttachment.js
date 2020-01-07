"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayAttachmentAssociation = _interopRequireDefault(require("./TransitGatewayAttachmentAssociation"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

var _TransitGatewayAttachmentState = _interopRequireDefault(require("./TransitGatewayAttachmentState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayAttachment model module.
 * @module model/TransitGatewayAttachment
 * @version 1.1.0
 */
var TransitGatewayAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayAttachment</code>.
   * Describes an attachment between a resource and a transit gateway.
   * @alias module:model/TransitGatewayAttachment
   */
  function TransitGatewayAttachment() {
    _classCallCheck(this, TransitGatewayAttachment);

    TransitGatewayAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayAttachment} obj Optional instance to populate.
     * @return {module:model/TransitGatewayAttachment} The populated <code>TransitGatewayAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayAttachment();

        if (data.hasOwnProperty('Association')) {
          obj['Association'] = _TransitGatewayAttachmentAssociation["default"].constructFromObject(data['Association']);
        }

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceOwnerId')) {
          obj['ResourceOwnerId'] = _ApiClient["default"].convertToType(data['ResourceOwnerId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayAttachmentState["default"].constructFromObject(data['State']);
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

        if (data.hasOwnProperty('TransitGatewayOwnerId')) {
          obj['TransitGatewayOwnerId'] = _ApiClient["default"].convertToType(data['TransitGatewayOwnerId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayAttachment;
}();
/**
 * @member {module:model/TransitGatewayAttachmentAssociation} Association
 */


TransitGatewayAttachment.prototype['Association'] = undefined;
/**
 * @member {Date} CreationTime
 */

TransitGatewayAttachment.prototype['CreationTime'] = undefined;
/**
 * @member {String} ResourceId
 */

TransitGatewayAttachment.prototype['ResourceId'] = undefined;
/**
 * @member {String} ResourceOwnerId
 */

TransitGatewayAttachment.prototype['ResourceOwnerId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayAttachment.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentState} State
 */

TransitGatewayAttachment.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGatewayAttachment.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayAttachment.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

TransitGatewayAttachment.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} TransitGatewayOwnerId
 */

TransitGatewayAttachment.prototype['TransitGatewayOwnerId'] = undefined;
var _default = TransitGatewayAttachment;
exports["default"] = _default;