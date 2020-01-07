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
 * The DeleteNetworkInterfaceRequest model module.
 * @module model/DeleteNetworkInterfaceRequest
 * @version 1.1.0
 */
var DeleteNetworkInterfaceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteNetworkInterfaceRequest</code>.
   * Contains the parameters for DeleteNetworkInterface.
   * @alias module:model/DeleteNetworkInterfaceRequest
   * @param networkInterfaceId {String} 
   */
  function DeleteNetworkInterfaceRequest(networkInterfaceId) {
    _classCallCheck(this, DeleteNetworkInterfaceRequest);

    DeleteNetworkInterfaceRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteNetworkInterfaceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>DeleteNetworkInterfaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteNetworkInterfaceRequest} obj Optional instance to populate.
     * @return {module:model/DeleteNetworkInterfaceRequest} The populated <code>DeleteNetworkInterfaceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteNetworkInterfaceRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteNetworkInterfaceRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteNetworkInterfaceRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

DeleteNetworkInterfaceRequest.prototype['NetworkInterfaceId'] = undefined;
var _default = DeleteNetworkInterfaceRequest;
exports["default"] = _default;