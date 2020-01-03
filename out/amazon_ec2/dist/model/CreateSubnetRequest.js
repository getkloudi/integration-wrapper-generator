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
 * The CreateSubnetRequest model module.
 * @module model/CreateSubnetRequest
 * @version 1.0.0
 */
var CreateSubnetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateSubnetRequest</code>.
   * @alias module:model/CreateSubnetRequest
   * @param cidrBlock {String} 
   * @param vpcId {String} 
   */
  function CreateSubnetRequest(cidrBlock, vpcId) {
    _classCallCheck(this, CreateSubnetRequest);

    CreateSubnetRequest.initialize(this, cidrBlock, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSubnetRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cidrBlock, vpcId) {
      obj['CidrBlock'] = cidrBlock;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>CreateSubnetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSubnetRequest} obj Optional instance to populate.
     * @return {module:model/CreateSubnetRequest} The populated <code>CreateSubnetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSubnetRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneId')) {
          obj['AvailabilityZoneId'] = _ApiClient["default"].convertToType(data['AvailabilityZoneId'], 'String');
        }

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateSubnetRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


CreateSubnetRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} AvailabilityZoneId
 */

CreateSubnetRequest.prototype['AvailabilityZoneId'] = undefined;
/**
 * @member {String} CidrBlock
 */

CreateSubnetRequest.prototype['CidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateSubnetRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} Ipv6CidrBlock
 */

CreateSubnetRequest.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {String} OutpostArn
 */

CreateSubnetRequest.prototype['OutpostArn'] = undefined;
/**
 * @member {String} VpcId
 */

CreateSubnetRequest.prototype['VpcId'] = undefined;
var _default = CreateSubnetRequest;
exports["default"] = _default;