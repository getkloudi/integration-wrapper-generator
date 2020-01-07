"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DisassociateTransitGatewayMulticastDomainRequest model module.
 * @module model/DisassociateTransitGatewayMulticastDomainRequest
 * @version 1.1.0
 */
var DisassociateTransitGatewayMulticastDomainRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateTransitGatewayMulticastDomainRequest</code>.
   * @alias module:model/DisassociateTransitGatewayMulticastDomainRequest
   */
  function DisassociateTransitGatewayMulticastDomainRequest() {
    _classCallCheck(this, DisassociateTransitGatewayMulticastDomainRequest);

    DisassociateTransitGatewayMulticastDomainRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateTransitGatewayMulticastDomainRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisassociateTransitGatewayMulticastDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateTransitGatewayMulticastDomainRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateTransitGatewayMulticastDomainRequest} The populated <code>DisassociateTransitGatewayMulticastDomainRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateTransitGatewayMulticastDomainRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SubnetIds')) {
          obj['SubnetIds'] = _ApiClient["default"].convertToType(data['SubnetIds'], ['String']);
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

  return DisassociateTransitGatewayMulticastDomainRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DisassociateTransitGatewayMulticastDomainRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} SubnetIds
 */

DisassociateTransitGatewayMulticastDomainRequest.prototype['SubnetIds'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

DisassociateTransitGatewayMulticastDomainRequest.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

DisassociateTransitGatewayMulticastDomainRequest.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = DisassociateTransitGatewayMulticastDomainRequest;
exports["default"] = _default;