"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceTypeDetail = _interopRequireDefault(require("./ServiceTypeDetail"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceDetail model module.
 * @module model/ServiceDetail
 * @version 1.1.0
 */
var ServiceDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ServiceDetail</code>.
   * Describes a VPC endpoint service.
   * @alias module:model/ServiceDetail
   */
  function ServiceDetail() {
    _classCallCheck(this, ServiceDetail);

    ServiceDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDetail} obj Optional instance to populate.
     * @return {module:model/ServiceDetail} The populated <code>ServiceDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceDetail();

        if (data.hasOwnProperty('AcceptanceRequired')) {
          obj['AcceptanceRequired'] = _ApiClient["default"].convertToType(data['AcceptanceRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('AvailabilityZones')) {
          obj['AvailabilityZones'] = _ApiClient["default"].convertToType(data['AvailabilityZones'], ['String']);
        }

        if (data.hasOwnProperty('BaseEndpointDnsNames')) {
          obj['BaseEndpointDnsNames'] = _ApiClient["default"].convertToType(data['BaseEndpointDnsNames'], ['String']);
        }

        if (data.hasOwnProperty('ManagesVpcEndpoints')) {
          obj['ManagesVpcEndpoints'] = _ApiClient["default"].convertToType(data['ManagesVpcEndpoints'], 'Boolean');
        }

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }

        if (data.hasOwnProperty('PrivateDnsName')) {
          obj['PrivateDnsName'] = _ApiClient["default"].convertToType(data['PrivateDnsName'], 'String');
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('ServiceType')) {
          obj['ServiceType'] = _ApiClient["default"].convertToType(data['ServiceType'], [_ServiceTypeDetail["default"]]);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcEndpointPolicySupported')) {
          obj['VpcEndpointPolicySupported'] = _ApiClient["default"].convertToType(data['VpcEndpointPolicySupported'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ServiceDetail;
}();
/**
 * @member {Boolean} AcceptanceRequired
 */


ServiceDetail.prototype['AcceptanceRequired'] = undefined;
/**
 * @member {Array.<String>} AvailabilityZones
 */

ServiceDetail.prototype['AvailabilityZones'] = undefined;
/**
 * @member {Array.<String>} BaseEndpointDnsNames
 */

ServiceDetail.prototype['BaseEndpointDnsNames'] = undefined;
/**
 * @member {Boolean} ManagesVpcEndpoints
 */

ServiceDetail.prototype['ManagesVpcEndpoints'] = undefined;
/**
 * @member {String} Owner
 */

ServiceDetail.prototype['Owner'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

ServiceDetail.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} ServiceId
 */

ServiceDetail.prototype['ServiceId'] = undefined;
/**
 * @member {String} ServiceName
 */

ServiceDetail.prototype['ServiceName'] = undefined;
/**
 * @member {Array.<module:model/ServiceTypeDetail>} ServiceType
 */

ServiceDetail.prototype['ServiceType'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ServiceDetail.prototype['Tags'] = undefined;
/**
 * @member {Boolean} VpcEndpointPolicySupported
 */

ServiceDetail.prototype['VpcEndpointPolicySupported'] = undefined;
var _default = ServiceDetail;
exports["default"] = _default;