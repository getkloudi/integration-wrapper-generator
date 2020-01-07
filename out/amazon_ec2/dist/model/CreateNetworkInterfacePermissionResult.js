"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkInterfacePermission = _interopRequireDefault(require("./NetworkInterfacePermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateNetworkInterfacePermissionResult model module.
 * @module model/CreateNetworkInterfacePermissionResult
 * @version 1.1.0
 */
var CreateNetworkInterfacePermissionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateNetworkInterfacePermissionResult</code>.
   * Contains the output of CreateNetworkInterfacePermission.
   * @alias module:model/CreateNetworkInterfacePermissionResult
   */
  function CreateNetworkInterfacePermissionResult() {
    _classCallCheck(this, CreateNetworkInterfacePermissionResult);

    CreateNetworkInterfacePermissionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateNetworkInterfacePermissionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateNetworkInterfacePermissionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNetworkInterfacePermissionResult} obj Optional instance to populate.
     * @return {module:model/CreateNetworkInterfacePermissionResult} The populated <code>CreateNetworkInterfacePermissionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateNetworkInterfacePermissionResult();

        if (data.hasOwnProperty('InterfacePermission')) {
          obj['InterfacePermission'] = _NetworkInterfacePermission["default"].constructFromObject(data['InterfacePermission']);
        }
      }

      return obj;
    }
  }]);

  return CreateNetworkInterfacePermissionResult;
}();
/**
 * @member {module:model/NetworkInterfacePermission} InterfacePermission
 */


CreateNetworkInterfacePermissionResult.prototype['InterfacePermission'] = undefined;
var _default = CreateNetworkInterfacePermissionResult;
exports["default"] = _default;