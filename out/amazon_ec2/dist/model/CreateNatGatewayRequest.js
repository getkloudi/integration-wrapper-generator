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
 * The CreateNatGatewayRequest model module.
 * @module model/CreateNatGatewayRequest
 * @version 1.1.0
 */
var CreateNatGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateNatGatewayRequest</code>.
   * @alias module:model/CreateNatGatewayRequest
   * @param allocationId {String} 
   * @param subnetId {String} 
   */
  function CreateNatGatewayRequest(allocationId, subnetId) {
    _classCallCheck(this, CreateNatGatewayRequest);

    CreateNatGatewayRequest.initialize(this, allocationId, subnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateNatGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, allocationId, subnetId) {
      obj['AllocationId'] = allocationId;
      obj['SubnetId'] = subnetId;
    }
    /**
     * Constructs a <code>CreateNatGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNatGatewayRequest} obj Optional instance to populate.
     * @return {module:model/CreateNatGatewayRequest} The populated <code>CreateNatGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateNatGatewayRequest();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateNatGatewayRequest;
}();
/**
 * @member {String} AllocationId
 */


CreateNatGatewayRequest.prototype['AllocationId'] = undefined;
/**
 * @member {String} ClientToken
 */

CreateNatGatewayRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} SubnetId
 */

CreateNatGatewayRequest.prototype['SubnetId'] = undefined;
var _default = CreateNatGatewayRequest;
exports["default"] = _default;