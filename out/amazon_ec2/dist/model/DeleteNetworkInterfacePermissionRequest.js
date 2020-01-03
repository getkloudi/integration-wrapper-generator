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
 * The DeleteNetworkInterfacePermissionRequest model module.
 * @module model/DeleteNetworkInterfacePermissionRequest
 * @version 1.0.0
 */
var DeleteNetworkInterfacePermissionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteNetworkInterfacePermissionRequest</code>.
   * Contains the parameters for DeleteNetworkInterfacePermission.
   * @alias module:model/DeleteNetworkInterfacePermissionRequest
   * @param networkInterfacePermissionId {String} 
   */
  function DeleteNetworkInterfacePermissionRequest(networkInterfacePermissionId) {
    _classCallCheck(this, DeleteNetworkInterfacePermissionRequest);

    DeleteNetworkInterfacePermissionRequest.initialize(this, networkInterfacePermissionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteNetworkInterfacePermissionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfacePermissionId) {
      obj['NetworkInterfacePermissionId'] = networkInterfacePermissionId;
    }
    /**
     * Constructs a <code>DeleteNetworkInterfacePermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteNetworkInterfacePermissionRequest} obj Optional instance to populate.
     * @return {module:model/DeleteNetworkInterfacePermissionRequest} The populated <code>DeleteNetworkInterfacePermissionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteNetworkInterfacePermissionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Force')) {
          obj['Force'] = _ApiClient["default"].convertToType(data['Force'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfacePermissionId')) {
          obj['NetworkInterfacePermissionId'] = _ApiClient["default"].convertToType(data['NetworkInterfacePermissionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteNetworkInterfacePermissionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteNetworkInterfacePermissionRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Force
 */

DeleteNetworkInterfacePermissionRequest.prototype['Force'] = undefined;
/**
 * @member {String} NetworkInterfacePermissionId
 */

DeleteNetworkInterfacePermissionRequest.prototype['NetworkInterfacePermissionId'] = undefined;
var _default = DeleteNetworkInterfacePermissionRequest;
exports["default"] = _default;