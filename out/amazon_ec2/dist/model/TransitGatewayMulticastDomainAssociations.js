"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubnetAssociation = _interopRequireDefault(require("./SubnetAssociation"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayMulticastDomainAssociations model module.
 * @module model/TransitGatewayMulticastDomainAssociations
 * @version 1.0.0
 */
var TransitGatewayMulticastDomainAssociations =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastDomainAssociations</code>.
   * Describes the multicast domain associations.
   * @alias module:model/TransitGatewayMulticastDomainAssociations
   */
  function TransitGatewayMulticastDomainAssociations() {
    _classCallCheck(this, TransitGatewayMulticastDomainAssociations);

    TransitGatewayMulticastDomainAssociations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastDomainAssociations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastDomainAssociations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastDomainAssociations} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastDomainAssociations} The populated <code>TransitGatewayMulticastDomainAssociations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastDomainAssociations();

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('Subnets')) {
          obj['Subnets'] = _ApiClient["default"].convertToType(data['Subnets'], [_SubnetAssociation["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastDomainAssociations;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayMulticastDomainAssociations.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayMulticastDomainAssociations.prototype['ResourceType'] = undefined;
/**
 * @member {Array.<module:model/SubnetAssociation>} Subnets
 */

TransitGatewayMulticastDomainAssociations.prototype['Subnets'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayMulticastDomainAssociations.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

TransitGatewayMulticastDomainAssociations.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = TransitGatewayMulticastDomainAssociations;
exports["default"] = _default;