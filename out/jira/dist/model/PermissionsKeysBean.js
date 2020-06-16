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
 * The PermissionsKeysBean model module.
 * @module model/PermissionsKeysBean
 * @version 1.4.0
 */
var PermissionsKeysBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionsKeysBean</code>.
   * @alias module:model/PermissionsKeysBean
   * @param permissions {Array.<String>} A list of permission keys.
   */
  function PermissionsKeysBean(permissions) {
    _classCallCheck(this, PermissionsKeysBean);

    PermissionsKeysBean.initialize(this, permissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionsKeysBean, null, [{
    key: "initialize",
    value: function initialize(obj, permissions) {
      obj['permissions'] = permissions;
    }
    /**
     * Constructs a <code>PermissionsKeysBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsKeysBean} obj Optional instance to populate.
     * @return {module:model/PermissionsKeysBean} The populated <code>PermissionsKeysBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionsKeysBean();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PermissionsKeysBean;
}();
/**
 * A list of permission keys.
 * @member {Array.<String>} permissions
 */


PermissionsKeysBean.prototype['permissions'] = undefined;
var _default = PermissionsKeysBean;
exports["default"] = _default;