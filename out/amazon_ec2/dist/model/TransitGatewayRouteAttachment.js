"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayRouteAttachment model module.
 * @module model/TransitGatewayRouteAttachment
 * @version 1.1.0
 */
var TransitGatewayRouteAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayRouteAttachment</code>.
   * Describes a route attachment.
   * @alias module:model/TransitGatewayRouteAttachment
   */
  function TransitGatewayRouteAttachment() {
    _classCallCheck(this, TransitGatewayRouteAttachment);

    TransitGatewayRouteAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayRouteAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayRouteAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayRouteAttachment} obj Optional instance to populate.
     * @return {module:model/TransitGatewayRouteAttachment} The populated <code>TransitGatewayRouteAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayRouteAttachment();

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayRouteAttachment;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayRouteAttachment.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayRouteAttachment.prototype['ResourceType'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayRouteAttachment.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = TransitGatewayRouteAttachment;
exports["default"] = _default;