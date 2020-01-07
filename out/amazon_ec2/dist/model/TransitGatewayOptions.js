"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoAcceptSharedAttachmentsValue = _interopRequireDefault(require("./AutoAcceptSharedAttachmentsValue"));

var _DefaultRouteTableAssociationValue = _interopRequireDefault(require("./DefaultRouteTableAssociationValue"));

var _DefaultRouteTablePropagationValue = _interopRequireDefault(require("./DefaultRouteTablePropagationValue"));

var _DnsSupportValue = _interopRequireDefault(require("./DnsSupportValue"));

var _MulticastSupportValue = _interopRequireDefault(require("./MulticastSupportValue"));

var _VpnEcmpSupportValue = _interopRequireDefault(require("./VpnEcmpSupportValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayOptions model module.
 * @module model/TransitGatewayOptions
 * @version 1.1.0
 */
var TransitGatewayOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayOptions</code>.
   * Describes the options for a transit gateway.
   * @alias module:model/TransitGatewayOptions
   */
  function TransitGatewayOptions() {
    _classCallCheck(this, TransitGatewayOptions);

    TransitGatewayOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayOptions} obj Optional instance to populate.
     * @return {module:model/TransitGatewayOptions} The populated <code>TransitGatewayOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayOptions();

        if (data.hasOwnProperty('AmazonSideAsn')) {
          obj['AmazonSideAsn'] = _ApiClient["default"].convertToType(data['AmazonSideAsn'], 'Number');
        }

        if (data.hasOwnProperty('AssociationDefaultRouteTableId')) {
          obj['AssociationDefaultRouteTableId'] = _ApiClient["default"].convertToType(data['AssociationDefaultRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('AutoAcceptSharedAttachments')) {
          obj['AutoAcceptSharedAttachments'] = _AutoAcceptSharedAttachmentsValue["default"].constructFromObject(data['AutoAcceptSharedAttachments']);
        }

        if (data.hasOwnProperty('DefaultRouteTableAssociation')) {
          obj['DefaultRouteTableAssociation'] = _DefaultRouteTableAssociationValue["default"].constructFromObject(data['DefaultRouteTableAssociation']);
        }

        if (data.hasOwnProperty('DefaultRouteTablePropagation')) {
          obj['DefaultRouteTablePropagation'] = _DefaultRouteTablePropagationValue["default"].constructFromObject(data['DefaultRouteTablePropagation']);
        }

        if (data.hasOwnProperty('DnsSupport')) {
          obj['DnsSupport'] = _DnsSupportValue["default"].constructFromObject(data['DnsSupport']);
        }

        if (data.hasOwnProperty('MulticastSupport')) {
          obj['MulticastSupport'] = _MulticastSupportValue["default"].constructFromObject(data['MulticastSupport']);
        }

        if (data.hasOwnProperty('PropagationDefaultRouteTableId')) {
          obj['PropagationDefaultRouteTableId'] = _ApiClient["default"].convertToType(data['PropagationDefaultRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('VpnEcmpSupport')) {
          obj['VpnEcmpSupport'] = _VpnEcmpSupportValue["default"].constructFromObject(data['VpnEcmpSupport']);
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayOptions;
}();
/**
 * @member {Number} AmazonSideAsn
 */


TransitGatewayOptions.prototype['AmazonSideAsn'] = undefined;
/**
 * @member {String} AssociationDefaultRouteTableId
 */

TransitGatewayOptions.prototype['AssociationDefaultRouteTableId'] = undefined;
/**
 * @member {module:model/AutoAcceptSharedAttachmentsValue} AutoAcceptSharedAttachments
 */

TransitGatewayOptions.prototype['AutoAcceptSharedAttachments'] = undefined;
/**
 * @member {module:model/DefaultRouteTableAssociationValue} DefaultRouteTableAssociation
 */

TransitGatewayOptions.prototype['DefaultRouteTableAssociation'] = undefined;
/**
 * @member {module:model/DefaultRouteTablePropagationValue} DefaultRouteTablePropagation
 */

TransitGatewayOptions.prototype['DefaultRouteTablePropagation'] = undefined;
/**
 * @member {module:model/DnsSupportValue} DnsSupport
 */

TransitGatewayOptions.prototype['DnsSupport'] = undefined;
/**
 * @member {module:model/MulticastSupportValue} MulticastSupport
 */

TransitGatewayOptions.prototype['MulticastSupport'] = undefined;
/**
 * @member {String} PropagationDefaultRouteTableId
 */

TransitGatewayOptions.prototype['PropagationDefaultRouteTableId'] = undefined;
/**
 * @member {module:model/VpnEcmpSupportValue} VpnEcmpSupport
 */

TransitGatewayOptions.prototype['VpnEcmpSupport'] = undefined;
var _default = TransitGatewayOptions;
exports["default"] = _default;