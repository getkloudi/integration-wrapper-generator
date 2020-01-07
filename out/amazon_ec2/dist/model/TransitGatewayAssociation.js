"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayAssociationState = _interopRequireDefault(require("./TransitGatewayAssociationState"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayAssociation model module.
 * @module model/TransitGatewayAssociation
 * @version 1.1.0
 */
var TransitGatewayAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayAssociation</code>.
   * Describes an association between a resource attachment and a transit gateway route table.
   * @alias module:model/TransitGatewayAssociation
   */
  function TransitGatewayAssociation() {
    _classCallCheck(this, TransitGatewayAssociation);

    TransitGatewayAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayAssociation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayAssociation} The populated <code>TransitGatewayAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayAssociation();

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayAssociationState["default"].constructFromObject(data['State']);
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

  return TransitGatewayAssociation;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayAssociation.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayAssociation.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/TransitGatewayAssociationState} State
 */

TransitGatewayAssociation.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayAssociation.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

TransitGatewayAssociation.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = TransitGatewayAssociation;
exports["default"] = _default;