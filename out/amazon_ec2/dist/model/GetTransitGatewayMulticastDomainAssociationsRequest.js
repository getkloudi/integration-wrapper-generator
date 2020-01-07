"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransitGatewayMulticastDomainAssociationsRequest model module.
 * @module model/GetTransitGatewayMulticastDomainAssociationsRequest
 * @version 1.1.0
 */
var GetTransitGatewayMulticastDomainAssociationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetTransitGatewayMulticastDomainAssociationsRequest</code>.
   * @alias module:model/GetTransitGatewayMulticastDomainAssociationsRequest
   */
  function GetTransitGatewayMulticastDomainAssociationsRequest() {
    _classCallCheck(this, GetTransitGatewayMulticastDomainAssociationsRequest);

    GetTransitGatewayMulticastDomainAssociationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransitGatewayMulticastDomainAssociationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetTransitGatewayMulticastDomainAssociationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransitGatewayMulticastDomainAssociationsRequest} obj Optional instance to populate.
     * @return {module:model/GetTransitGatewayMulticastDomainAssociationsRequest} The populated <code>GetTransitGatewayMulticastDomainAssociationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransitGatewayMulticastDomainAssociationsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransitGatewayMulticastDomainAssociationsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetTransitGatewayMulticastDomainAssociationsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

GetTransitGatewayMulticastDomainAssociationsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

GetTransitGatewayMulticastDomainAssociationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

GetTransitGatewayMulticastDomainAssociationsRequest.prototype['NextToken'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

GetTransitGatewayMulticastDomainAssociationsRequest.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = GetTransitGatewayMulticastDomainAssociationsRequest;
exports["default"] = _default;