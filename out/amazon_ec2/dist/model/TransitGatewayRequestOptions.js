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
 * The TransitGatewayRequestOptions model module.
 * @module model/TransitGatewayRequestOptions
 * @version 1.0.0
 */
var TransitGatewayRequestOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayRequestOptions</code>.
   * Describes the options for a transit gateway.
   * @alias module:model/TransitGatewayRequestOptions
   */
  function TransitGatewayRequestOptions() {
    _classCallCheck(this, TransitGatewayRequestOptions);

    TransitGatewayRequestOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayRequestOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayRequestOptions} obj Optional instance to populate.
     * @return {module:model/TransitGatewayRequestOptions} The populated <code>TransitGatewayRequestOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayRequestOptions();

        if (data.hasOwnProperty('AmazonSideAsn')) {
          obj['AmazonSideAsn'] = _ApiClient["default"].convertToType(data['AmazonSideAsn'], 'Number');
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

        if (data.hasOwnProperty('VpnEcmpSupport')) {
          obj['VpnEcmpSupport'] = _VpnEcmpSupportValue["default"].constructFromObject(data['VpnEcmpSupport']);
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayRequestOptions;
}();
/**
 * @member {Number} AmazonSideAsn
 */


TransitGatewayRequestOptions.prototype['AmazonSideAsn'] = undefined;
/**
 * @member {module:model/AutoAcceptSharedAttachmentsValue} AutoAcceptSharedAttachments
 */

TransitGatewayRequestOptions.prototype['AutoAcceptSharedAttachments'] = undefined;
/**
 * @member {module:model/DefaultRouteTableAssociationValue} DefaultRouteTableAssociation
 */

TransitGatewayRequestOptions.prototype['DefaultRouteTableAssociation'] = undefined;
/**
 * @member {module:model/DefaultRouteTablePropagationValue} DefaultRouteTablePropagation
 */

TransitGatewayRequestOptions.prototype['DefaultRouteTablePropagation'] = undefined;
/**
 * @member {module:model/DnsSupportValue} DnsSupport
 */

TransitGatewayRequestOptions.prototype['DnsSupport'] = undefined;
/**
 * @member {module:model/MulticastSupportValue} MulticastSupport
 */

TransitGatewayRequestOptions.prototype['MulticastSupport'] = undefined;
/**
 * @member {module:model/VpnEcmpSupportValue} VpnEcmpSupport
 */

TransitGatewayRequestOptions.prototype['VpnEcmpSupport'] = undefined;
var _default = TransitGatewayRequestOptions;
exports["default"] = _default;