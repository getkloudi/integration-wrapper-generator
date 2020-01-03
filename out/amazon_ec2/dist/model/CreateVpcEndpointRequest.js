"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcEndpointType = _interopRequireDefault(require("./VpcEndpointType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpcEndpointRequest model module.
 * @module model/CreateVpcEndpointRequest
 * @version 1.0.0
 */
var CreateVpcEndpointRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcEndpointRequest</code>.
   * Contains the parameters for CreateVpcEndpoint.
   * @alias module:model/CreateVpcEndpointRequest
   * @param serviceName {String} 
   * @param vpcId {String} 
   */
  function CreateVpcEndpointRequest(serviceName, vpcId) {
    _classCallCheck(this, CreateVpcEndpointRequest);

    CreateVpcEndpointRequest.initialize(this, serviceName, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceName, vpcId) {
      obj['ServiceName'] = serviceName;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>CreateVpcEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcEndpointRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpcEndpointRequest} The populated <code>CreateVpcEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcEndpointRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PolicyDocument')) {
          obj['PolicyDocument'] = _ApiClient["default"].convertToType(data['PolicyDocument'], 'String');
        }

        if (data.hasOwnProperty('PrivateDnsEnabled')) {
          obj['PrivateDnsEnabled'] = _ApiClient["default"].convertToType(data['PrivateDnsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('RouteTableIds')) {
          obj['RouteTableIds'] = _ApiClient["default"].convertToType(data['RouteTableIds'], ['String']);
        }

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('SubnetIds')) {
          obj['SubnetIds'] = _ApiClient["default"].convertToType(data['SubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('VpcEndpointType')) {
          obj['VpcEndpointType'] = _VpcEndpointType["default"].constructFromObject(data['VpcEndpointType']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVpcEndpointRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateVpcEndpointRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVpcEndpointRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PolicyDocument
 */

CreateVpcEndpointRequest.prototype['PolicyDocument'] = undefined;
/**
 * @member {Boolean} PrivateDnsEnabled
 */

CreateVpcEndpointRequest.prototype['PrivateDnsEnabled'] = undefined;
/**
 * @member {Array.<String>} RouteTableIds
 */

CreateVpcEndpointRequest.prototype['RouteTableIds'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

CreateVpcEndpointRequest.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {String} ServiceName
 */

CreateVpcEndpointRequest.prototype['ServiceName'] = undefined;
/**
 * @member {Array.<String>} SubnetIds
 */

CreateVpcEndpointRequest.prototype['SubnetIds'] = undefined;
/**
 * @member {module:model/VpcEndpointType} VpcEndpointType
 */

CreateVpcEndpointRequest.prototype['VpcEndpointType'] = undefined;
/**
 * @member {String} VpcId
 */

CreateVpcEndpointRequest.prototype['VpcId'] = undefined;
var _default = CreateVpcEndpointRequest;
exports["default"] = _default;