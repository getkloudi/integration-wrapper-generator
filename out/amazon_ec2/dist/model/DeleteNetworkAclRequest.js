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
 * The DeleteNetworkAclRequest model module.
 * @module model/DeleteNetworkAclRequest
 * @version 1.1.0
 */
var DeleteNetworkAclRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteNetworkAclRequest</code>.
   * @alias module:model/DeleteNetworkAclRequest
   * @param networkAclId {String} 
   */
  function DeleteNetworkAclRequest(networkAclId) {
    _classCallCheck(this, DeleteNetworkAclRequest);

    DeleteNetworkAclRequest.initialize(this, networkAclId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteNetworkAclRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkAclId) {
      obj['NetworkAclId'] = networkAclId;
    }
    /**
     * Constructs a <code>DeleteNetworkAclRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteNetworkAclRequest} obj Optional instance to populate.
     * @return {module:model/DeleteNetworkAclRequest} The populated <code>DeleteNetworkAclRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteNetworkAclRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkAclId')) {
          obj['NetworkAclId'] = _ApiClient["default"].convertToType(data['NetworkAclId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteNetworkAclRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteNetworkAclRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkAclId
 */

DeleteNetworkAclRequest.prototype['NetworkAclId'] = undefined;
var _default = DeleteNetworkAclRequest;
exports["default"] = _default;