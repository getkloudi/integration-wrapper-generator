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
 * The CreateVpcEndpointServiceConfigurationRequest model module.
 * @module model/CreateVpcEndpointServiceConfigurationRequest
 * @version 1.1.0
 */
var CreateVpcEndpointServiceConfigurationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcEndpointServiceConfigurationRequest</code>.
   * @alias module:model/CreateVpcEndpointServiceConfigurationRequest
   * @param networkLoadBalancerArns {Array.<String>} 
   */
  function CreateVpcEndpointServiceConfigurationRequest(networkLoadBalancerArns) {
    _classCallCheck(this, CreateVpcEndpointServiceConfigurationRequest);

    CreateVpcEndpointServiceConfigurationRequest.initialize(this, networkLoadBalancerArns);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcEndpointServiceConfigurationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkLoadBalancerArns) {
      obj['NetworkLoadBalancerArns'] = networkLoadBalancerArns;
    }
    /**
     * Constructs a <code>CreateVpcEndpointServiceConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcEndpointServiceConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpcEndpointServiceConfigurationRequest} The populated <code>CreateVpcEndpointServiceConfigurationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcEndpointServiceConfigurationRequest();

        if (data.hasOwnProperty('AcceptanceRequired')) {
          obj['AcceptanceRequired'] = _ApiClient["default"].convertToType(data['AcceptanceRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkLoadBalancerArns')) {
          obj['NetworkLoadBalancerArns'] = _ApiClient["default"].convertToType(data['NetworkLoadBalancerArns'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpcEndpointServiceConfigurationRequest;
}();
/**
 * @member {Boolean} AcceptanceRequired
 */


CreateVpcEndpointServiceConfigurationRequest.prototype['AcceptanceRequired'] = undefined;
/**
 * @member {String} ClientToken
 */

CreateVpcEndpointServiceConfigurationRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVpcEndpointServiceConfigurationRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} NetworkLoadBalancerArns
 */

CreateVpcEndpointServiceConfigurationRequest.prototype['NetworkLoadBalancerArns'] = undefined;
var _default = CreateVpcEndpointServiceConfigurationRequest;
exports["default"] = _default;