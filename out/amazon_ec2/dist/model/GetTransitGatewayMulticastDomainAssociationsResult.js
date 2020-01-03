"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayMulticastDomainAssociation = _interopRequireDefault(require("./TransitGatewayMulticastDomainAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransitGatewayMulticastDomainAssociationsResult model module.
 * @module model/GetTransitGatewayMulticastDomainAssociationsResult
 * @version 1.0.0
 */
var GetTransitGatewayMulticastDomainAssociationsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetTransitGatewayMulticastDomainAssociationsResult</code>.
   * @alias module:model/GetTransitGatewayMulticastDomainAssociationsResult
   */
  function GetTransitGatewayMulticastDomainAssociationsResult() {
    _classCallCheck(this, GetTransitGatewayMulticastDomainAssociationsResult);

    GetTransitGatewayMulticastDomainAssociationsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransitGatewayMulticastDomainAssociationsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetTransitGatewayMulticastDomainAssociationsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransitGatewayMulticastDomainAssociationsResult} obj Optional instance to populate.
     * @return {module:model/GetTransitGatewayMulticastDomainAssociationsResult} The populated <code>GetTransitGatewayMulticastDomainAssociationsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransitGatewayMulticastDomainAssociationsResult();

        if (data.hasOwnProperty('MulticastDomainAssociations')) {
          obj['MulticastDomainAssociations'] = _ApiClient["default"].convertToType(data['MulticastDomainAssociations'], [_TransitGatewayMulticastDomainAssociation["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransitGatewayMulticastDomainAssociationsResult;
}();
/**
 * @member {Array.<module:model/TransitGatewayMulticastDomainAssociation>} MulticastDomainAssociations
 */


GetTransitGatewayMulticastDomainAssociationsResult.prototype['MulticastDomainAssociations'] = undefined;
/**
 * @member {String} NextToken
 */

GetTransitGatewayMulticastDomainAssociationsResult.prototype['NextToken'] = undefined;
var _default = GetTransitGatewayMulticastDomainAssociationsResult;
exports["default"] = _default;