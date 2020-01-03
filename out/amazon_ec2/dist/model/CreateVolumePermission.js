"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionGroup = _interopRequireDefault(require("./PermissionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVolumePermission model module.
 * @module model/CreateVolumePermission
 * @version 1.0.0
 */
var CreateVolumePermission =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVolumePermission</code>.
   * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
   * @alias module:model/CreateVolumePermission
   */
  function CreateVolumePermission() {
    _classCallCheck(this, CreateVolumePermission);

    CreateVolumePermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVolumePermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVolumePermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVolumePermission} obj Optional instance to populate.
     * @return {module:model/CreateVolumePermission} The populated <code>CreateVolumePermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVolumePermission();

        if (data.hasOwnProperty('Group')) {
          obj['Group'] = _PermissionGroup["default"].constructFromObject(data['Group']);
        }

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVolumePermission;
}();
/**
 * @member {module:model/PermissionGroup} Group
 */


CreateVolumePermission.prototype['Group'] = undefined;
/**
 * @member {String} UserId
 */

CreateVolumePermission.prototype['UserId'] = undefined;
var _default = CreateVolumePermission;
exports["default"] = _default;