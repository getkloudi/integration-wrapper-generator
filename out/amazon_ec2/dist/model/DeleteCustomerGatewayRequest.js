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
 * The DeleteCustomerGatewayRequest model module.
 * @module model/DeleteCustomerGatewayRequest
 * @version 1.0.0
 */
var DeleteCustomerGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteCustomerGatewayRequest</code>.
   * Contains the parameters for DeleteCustomerGateway.
   * @alias module:model/DeleteCustomerGatewayRequest
   * @param customerGatewayId {String} 
   */
  function DeleteCustomerGatewayRequest(customerGatewayId) {
    _classCallCheck(this, DeleteCustomerGatewayRequest);

    DeleteCustomerGatewayRequest.initialize(this, customerGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteCustomerGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, customerGatewayId) {
      obj['CustomerGatewayId'] = customerGatewayId;
    }
    /**
     * Constructs a <code>DeleteCustomerGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteCustomerGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DeleteCustomerGatewayRequest} The populated <code>DeleteCustomerGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteCustomerGatewayRequest();

        if (data.hasOwnProperty('CustomerGatewayId')) {
          obj['CustomerGatewayId'] = _ApiClient["default"].convertToType(data['CustomerGatewayId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DeleteCustomerGatewayRequest;
}();
/**
 * @member {String} CustomerGatewayId
 */


DeleteCustomerGatewayRequest.prototype['CustomerGatewayId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteCustomerGatewayRequest.prototype['DryRun'] = undefined;
var _default = DeleteCustomerGatewayRequest;
exports["default"] = _default;