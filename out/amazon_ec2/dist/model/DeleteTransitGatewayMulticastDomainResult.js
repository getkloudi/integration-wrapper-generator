"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayMulticastDomain = _interopRequireDefault(require("./TransitGatewayMulticastDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteTransitGatewayMulticastDomainResult model module.
 * @module model/DeleteTransitGatewayMulticastDomainResult
 * @version 1.1.0
 */
var DeleteTransitGatewayMulticastDomainResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayMulticastDomainResult</code>.
   * @alias module:model/DeleteTransitGatewayMulticastDomainResult
   */
  function DeleteTransitGatewayMulticastDomainResult() {
    _classCallCheck(this, DeleteTransitGatewayMulticastDomainResult);

    DeleteTransitGatewayMulticastDomainResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayMulticastDomainResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteTransitGatewayMulticastDomainResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayMulticastDomainResult} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayMulticastDomainResult} The populated <code>DeleteTransitGatewayMulticastDomainResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayMulticastDomainResult();

        if (data.hasOwnProperty('TransitGatewayMulticastDomain')) {
          obj['TransitGatewayMulticastDomain'] = _TransitGatewayMulticastDomain["default"].constructFromObject(data['TransitGatewayMulticastDomain']);
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayMulticastDomainResult;
}();
/**
 * @member {module:model/TransitGatewayMulticastDomain} TransitGatewayMulticastDomain
 */


DeleteTransitGatewayMulticastDomainResult.prototype['TransitGatewayMulticastDomain'] = undefined;
var _default = DeleteTransitGatewayMulticastDomainResult;
exports["default"] = _default;