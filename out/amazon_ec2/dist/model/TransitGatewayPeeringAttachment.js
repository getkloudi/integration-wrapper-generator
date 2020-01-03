"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PeeringAttachmentStatus = _interopRequireDefault(require("./PeeringAttachmentStatus"));

var _PeeringTgwInfo = _interopRequireDefault(require("./PeeringTgwInfo"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayAttachmentState = _interopRequireDefault(require("./TransitGatewayAttachmentState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayPeeringAttachment model module.
 * @module model/TransitGatewayPeeringAttachment
 * @version 1.0.0
 */
var TransitGatewayPeeringAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayPeeringAttachment</code>.
   * Describes the transit gateway peering attachment.
   * @alias module:model/TransitGatewayPeeringAttachment
   */
  function TransitGatewayPeeringAttachment() {
    _classCallCheck(this, TransitGatewayPeeringAttachment);

    TransitGatewayPeeringAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayPeeringAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayPeeringAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayPeeringAttachment} obj Optional instance to populate.
     * @return {module:model/TransitGatewayPeeringAttachment} The populated <code>TransitGatewayPeeringAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayPeeringAttachment();

        if (data.hasOwnProperty('AccepterTgwInfo')) {
          obj['AccepterTgwInfo'] = _PeeringTgwInfo["default"].constructFromObject(data['AccepterTgwInfo']);
        }

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('RequesterTgwInfo')) {
          obj['RequesterTgwInfo'] = _PeeringTgwInfo["default"].constructFromObject(data['RequesterTgwInfo']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayAttachmentState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _PeeringAttachmentStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayPeeringAttachment;
}();
/**
 * @member {module:model/PeeringTgwInfo} AccepterTgwInfo
 */


TransitGatewayPeeringAttachment.prototype['AccepterTgwInfo'] = undefined;
/**
 * @member {Date} CreationTime
 */

TransitGatewayPeeringAttachment.prototype['CreationTime'] = undefined;
/**
 * @member {module:model/PeeringTgwInfo} RequesterTgwInfo
 */

TransitGatewayPeeringAttachment.prototype['RequesterTgwInfo'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentState} State
 */

TransitGatewayPeeringAttachment.prototype['State'] = undefined;
/**
 * @member {module:model/PeeringAttachmentStatus} Status
 */

TransitGatewayPeeringAttachment.prototype['Status'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGatewayPeeringAttachment.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayPeeringAttachment.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = TransitGatewayPeeringAttachment;
exports["default"] = _default;