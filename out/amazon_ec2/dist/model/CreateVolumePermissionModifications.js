"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateVolumePermission = _interopRequireDefault(require("./CreateVolumePermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVolumePermissionModifications model module.
 * @module model/CreateVolumePermissionModifications
 * @version 1.1.0
 */
var CreateVolumePermissionModifications =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVolumePermissionModifications</code>.
   * Describes modifications to the list of create volume permissions for a volume.
   * @alias module:model/CreateVolumePermissionModifications
   */
  function CreateVolumePermissionModifications() {
    _classCallCheck(this, CreateVolumePermissionModifications);

    CreateVolumePermissionModifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVolumePermissionModifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVolumePermissionModifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVolumePermissionModifications} obj Optional instance to populate.
     * @return {module:model/CreateVolumePermissionModifications} The populated <code>CreateVolumePermissionModifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVolumePermissionModifications();

        if (data.hasOwnProperty('Add')) {
          obj['Add'] = _ApiClient["default"].convertToType(data['Add'], [_CreateVolumePermission["default"]]);
        }

        if (data.hasOwnProperty('Remove')) {
          obj['Remove'] = _ApiClient["default"].convertToType(data['Remove'], [_CreateVolumePermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateVolumePermissionModifications;
}();
/**
 * @member {Array.<module:model/CreateVolumePermission>} Add
 */


CreateVolumePermissionModifications.prototype['Add'] = undefined;
/**
 * @member {Array.<module:model/CreateVolumePermission>} Remove
 */

CreateVolumePermissionModifications.prototype['Remove'] = undefined;
var _default = CreateVolumePermissionModifications;
exports["default"] = _default;