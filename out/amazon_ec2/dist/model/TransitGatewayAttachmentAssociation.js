"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayAssociationState = _interopRequireDefault(require("./TransitGatewayAssociationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayAttachmentAssociation model module.
 * @module model/TransitGatewayAttachmentAssociation
 * @version 1.0.0
 */
var TransitGatewayAttachmentAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayAttachmentAssociation</code>.
   * Describes an association.
   * @alias module:model/TransitGatewayAttachmentAssociation
   */
  function TransitGatewayAttachmentAssociation() {
    _classCallCheck(this, TransitGatewayAttachmentAssociation);

    TransitGatewayAttachmentAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayAttachmentAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayAttachmentAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayAttachmentAssociation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayAttachmentAssociation} The populated <code>TransitGatewayAttachmentAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayAttachmentAssociation();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayAssociationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayAttachmentAssociation;
}();
/**
 * @member {module:model/TransitGatewayAssociationState} State
 */


TransitGatewayAttachmentAssociation.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

TransitGatewayAttachmentAssociation.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = TransitGatewayAttachmentAssociation;
exports["default"] = _default;