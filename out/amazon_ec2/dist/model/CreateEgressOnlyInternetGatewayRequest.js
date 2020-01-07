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
 * The CreateEgressOnlyInternetGatewayRequest model module.
 * @module model/CreateEgressOnlyInternetGatewayRequest
 * @version 1.1.0
 */
var CreateEgressOnlyInternetGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateEgressOnlyInternetGatewayRequest</code>.
   * @alias module:model/CreateEgressOnlyInternetGatewayRequest
   * @param vpcId {String} 
   */
  function CreateEgressOnlyInternetGatewayRequest(vpcId) {
    _classCallCheck(this, CreateEgressOnlyInternetGatewayRequest);

    CreateEgressOnlyInternetGatewayRequest.initialize(this, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateEgressOnlyInternetGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId) {
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>CreateEgressOnlyInternetGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEgressOnlyInternetGatewayRequest} obj Optional instance to populate.
     * @return {module:model/CreateEgressOnlyInternetGatewayRequest} The populated <code>CreateEgressOnlyInternetGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEgressOnlyInternetGatewayRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateEgressOnlyInternetGatewayRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateEgressOnlyInternetGatewayRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateEgressOnlyInternetGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

CreateEgressOnlyInternetGatewayRequest.prototype['VpcId'] = undefined;
var _default = CreateEgressOnlyInternetGatewayRequest;
exports["default"] = _default;