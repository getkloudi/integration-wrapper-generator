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
 * The TransitGatewayMulticastDomainAssociation model module.
 * @module model/TransitGatewayMulticastDomainAssociation
 * @version 1.1.0
 */
var TransitGatewayMulticastDomainAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastDomainAssociation</code>.
   * Describes the resources associated with the transit gateway multicast domain.
   * @alias module:model/TransitGatewayMulticastDomainAssociation
   */
  function TransitGatewayMulticastDomainAssociation() {
    _classCallCheck(this, TransitGatewayMulticastDomainAssociation);

    TransitGatewayMulticastDomainAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastDomainAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastDomainAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastDomainAssociation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastDomainAssociation} The populated <code>TransitGatewayMulticastDomainAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastDomainAssociation();

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('Subnet')) {
          obj['Subnet'] = _SubnetAssociation["default"].constructFromObject(data['Subnet']);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastDomainAssociation;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayMulticastDomainAssociation.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayMulticastDomainAssociation.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/SubnetAssociation} Subnet
 */

TransitGatewayMulticastDomainAssociation.prototype['Subnet'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayMulticastDomainAssociation.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = TransitGatewayMulticastDomainAssociation;
exports["default"] = _default;