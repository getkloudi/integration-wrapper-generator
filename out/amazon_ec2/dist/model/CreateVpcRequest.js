"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpcRequest model module.
 * @module model/CreateVpcRequest
 * @version 1.0.0
 */
var CreateVpcRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcRequest</code>.
   * @alias module:model/CreateVpcRequest
   * @param cidrBlock {String} 
   */
  function CreateVpcRequest(cidrBlock) {
    _classCallCheck(this, CreateVpcRequest);

    CreateVpcRequest.initialize(this, cidrBlock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cidrBlock) {
      obj['CidrBlock'] = cidrBlock;
    }
    /**
     * Constructs a <code>CreateVpcRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpcRequest} The populated <code>CreateVpcRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcRequest();

        if (data.hasOwnProperty('AmazonProvidedIpv6CidrBlock')) {
          obj['AmazonProvidedIpv6CidrBlock'] = _ApiClient["default"].convertToType(data['AmazonProvidedIpv6CidrBlock'], 'Boolean');
        }

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _Tenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('Ipv6CidrBlockNetworkBorderGroup')) {
          obj['Ipv6CidrBlockNetworkBorderGroup'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlockNetworkBorderGroup'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVpcRequest;
}();
/**
 * @member {Boolean} AmazonProvidedIpv6CidrBlock
 */


CreateVpcRequest.prototype['AmazonProvidedIpv6CidrBlock'] = undefined;
/**
 * @member {String} CidrBlock
 */

CreateVpcRequest.prototype['CidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVpcRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/Tenancy} InstanceTenancy
 */

CreateVpcRequest.prototype['InstanceTenancy'] = undefined;
/**
 * @member {String} Ipv6CidrBlockNetworkBorderGroup
 */

CreateVpcRequest.prototype['Ipv6CidrBlockNetworkBorderGroup'] = undefined;
var _default = CreateVpcRequest;
exports["default"] = _default;