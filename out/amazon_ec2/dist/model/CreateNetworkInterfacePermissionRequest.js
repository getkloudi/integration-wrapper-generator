"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InterfacePermissionType = _interopRequireDefault(require("./InterfacePermissionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateNetworkInterfacePermissionRequest model module.
 * @module model/CreateNetworkInterfacePermissionRequest
 * @version 1.1.0
 */
var CreateNetworkInterfacePermissionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateNetworkInterfacePermissionRequest</code>.
   * Contains the parameters for CreateNetworkInterfacePermission.
   * @alias module:model/CreateNetworkInterfacePermissionRequest
   * @param networkInterfaceId {String} 
   * @param permission {module:model/InterfacePermissionType} 
   */
  function CreateNetworkInterfacePermissionRequest(networkInterfaceId, permission) {
    _classCallCheck(this, CreateNetworkInterfacePermissionRequest);

    CreateNetworkInterfacePermissionRequest.initialize(this, networkInterfaceId, permission);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateNetworkInterfacePermissionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId, permission) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
      obj['Permission'] = permission;
    }
    /**
     * Constructs a <code>CreateNetworkInterfacePermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNetworkInterfacePermissionRequest} obj Optional instance to populate.
     * @return {module:model/CreateNetworkInterfacePermissionRequest} The populated <code>CreateNetworkInterfacePermissionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateNetworkInterfacePermissionRequest();

        if (data.hasOwnProperty('AwsAccountId')) {
          obj['AwsAccountId'] = _ApiClient["default"].convertToType(data['AwsAccountId'], 'String');
        }

        if (data.hasOwnProperty('AwsService')) {
          obj['AwsService'] = _ApiClient["default"].convertToType(data['AwsService'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('Permission')) {
          obj['Permission'] = _InterfacePermissionType["default"].constructFromObject(data['Permission']);
        }
      }

      return obj;
    }
  }]);

  return CreateNetworkInterfacePermissionRequest;
}();
/**
 * @member {String} AwsAccountId
 */


CreateNetworkInterfacePermissionRequest.prototype['AwsAccountId'] = undefined;
/**
 * @member {String} AwsService
 */

CreateNetworkInterfacePermissionRequest.prototype['AwsService'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateNetworkInterfacePermissionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

CreateNetworkInterfacePermissionRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {module:model/InterfacePermissionType} Permission
 */

CreateNetworkInterfacePermissionRequest.prototype['Permission'] = undefined;
var _default = CreateNetworkInterfacePermissionRequest;
exports["default"] = _default;