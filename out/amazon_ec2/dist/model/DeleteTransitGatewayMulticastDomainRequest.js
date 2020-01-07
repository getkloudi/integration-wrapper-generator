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
 * The DeleteTransitGatewayMulticastDomainRequest model module.
 * @module model/DeleteTransitGatewayMulticastDomainRequest
 * @version 1.1.0
 */
var DeleteTransitGatewayMulticastDomainRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayMulticastDomainRequest</code>.
   * @alias module:model/DeleteTransitGatewayMulticastDomainRequest
   * @param transitGatewayMulticastDomainId {String} 
   */
  function DeleteTransitGatewayMulticastDomainRequest(transitGatewayMulticastDomainId) {
    _classCallCheck(this, DeleteTransitGatewayMulticastDomainRequest);

    DeleteTransitGatewayMulticastDomainRequest.initialize(this, transitGatewayMulticastDomainId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayMulticastDomainRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayMulticastDomainId) {
      obj['TransitGatewayMulticastDomainId'] = transitGatewayMulticastDomainId;
    }
    /**
     * Constructs a <code>DeleteTransitGatewayMulticastDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayMulticastDomainRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayMulticastDomainRequest} The populated <code>DeleteTransitGatewayMulticastDomainRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayMulticastDomainRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayMulticastDomainRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTransitGatewayMulticastDomainRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

DeleteTransitGatewayMulticastDomainRequest.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = DeleteTransitGatewayMulticastDomainRequest;
exports["default"] = _default;