"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GatewayType = _interopRequireDefault(require("./GatewayType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCustomerGatewayRequest model module.
 * @module model/CreateCustomerGatewayRequest
 * @version 1.1.0
 */
var CreateCustomerGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateCustomerGatewayRequest</code>.
   * Contains the parameters for CreateCustomerGateway.
   * @alias module:model/CreateCustomerGatewayRequest
   * @param bgpAsn {Number} 
   * @param type {module:model/GatewayType} 
   */
  function CreateCustomerGatewayRequest(bgpAsn, type) {
    _classCallCheck(this, CreateCustomerGatewayRequest);

    CreateCustomerGatewayRequest.initialize(this, bgpAsn, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCustomerGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, bgpAsn, type) {
      obj['BgpAsn'] = bgpAsn;
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>CreateCustomerGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomerGatewayRequest} obj Optional instance to populate.
     * @return {module:model/CreateCustomerGatewayRequest} The populated <code>CreateCustomerGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCustomerGatewayRequest();

        if (data.hasOwnProperty('BgpAsn')) {
          obj['BgpAsn'] = _ApiClient["default"].convertToType(data['BgpAsn'], 'Number');
        }

        if (data.hasOwnProperty('CertificateArn')) {
          obj['CertificateArn'] = _ApiClient["default"].convertToType(data['CertificateArn'], 'String');
        }

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _GatewayType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return CreateCustomerGatewayRequest;
}();
/**
 * @member {Number} BgpAsn
 */


CreateCustomerGatewayRequest.prototype['BgpAsn'] = undefined;
/**
 * @member {String} CertificateArn
 */

CreateCustomerGatewayRequest.prototype['CertificateArn'] = undefined;
/**
 * @member {String} DeviceName
 */

CreateCustomerGatewayRequest.prototype['DeviceName'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateCustomerGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PublicIp
 */

CreateCustomerGatewayRequest.prototype['PublicIp'] = undefined;
/**
 * @member {module:model/GatewayType} Type
 */

CreateCustomerGatewayRequest.prototype['Type'] = undefined;
var _default = CreateCustomerGatewayRequest;
exports["default"] = _default;