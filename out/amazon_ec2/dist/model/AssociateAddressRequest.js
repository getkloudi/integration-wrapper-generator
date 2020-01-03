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
 * The AssociateAddressRequest model module.
 * @module model/AssociateAddressRequest
 * @version 1.0.0
 */
var AssociateAddressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateAddressRequest</code>.
   * @alias module:model/AssociateAddressRequest
   */
  function AssociateAddressRequest() {
    _classCallCheck(this, AssociateAddressRequest);

    AssociateAddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssociateAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateAddressRequest} obj Optional instance to populate.
     * @return {module:model/AssociateAddressRequest} The populated <code>AssociateAddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateAddressRequest();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('AllowReassociation')) {
          obj['AllowReassociation'] = _ApiClient["default"].convertToType(data['AllowReassociation'], 'Boolean');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateAddressRequest;
}();
/**
 * @member {String} AllocationId
 */


AssociateAddressRequest.prototype['AllocationId'] = undefined;
/**
 * @member {Boolean} AllowReassociation
 */

AssociateAddressRequest.prototype['AllowReassociation'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AssociateAddressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

AssociateAddressRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

AssociateAddressRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

AssociateAddressRequest.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {String} PublicIp
 */

AssociateAddressRequest.prototype['PublicIp'] = undefined;
var _default = AssociateAddressRequest;
exports["default"] = _default;