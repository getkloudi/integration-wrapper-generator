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
 * The UserPermission model module.
 * @module model/UserPermission
 * @version 1.4.0
 */
var UserPermission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserPermission</code>.
   * Details of a permission and its availability to a user.
   * @alias module:model/UserPermission
   */
  function UserPermission() {
    _classCallCheck(this, UserPermission);

    UserPermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserPermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPermission} obj Optional instance to populate.
     * @return {module:model/UserPermission} The populated <code>UserPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserPermission();

        if (data.hasOwnProperty('deprecatedKey')) {
          obj['deprecatedKey'] = _ApiClient["default"].convertToType(data['deprecatedKey'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('havePermission')) {
          obj['havePermission'] = _ApiClient["default"].convertToType(data['havePermission'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserPermission;
}();
/**
 * Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.`
 * @member {Boolean} deprecatedKey
 */


UserPermission.prototype['deprecatedKey'] = undefined;
/**
 * The description of the permission.
 * @member {String} description
 */

UserPermission.prototype['description'] = undefined;
/**
 * Whether the permission is available to the user in the queried context.
 * @member {Boolean} havePermission
 */

UserPermission.prototype['havePermission'] = undefined;
/**
 * The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
 * @member {String} id
 */

UserPermission.prototype['id'] = undefined;
/**
 * The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
 * @member {String} key
 */

UserPermission.prototype['key'] = undefined;
/**
 * The name of the permission.
 * @member {String} name
 */

UserPermission.prototype['name'] = undefined;
/**
 * The type of the permission.
 * @member {module:model/UserPermission.TypeEnum} type
 */

UserPermission.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

UserPermission['TypeEnum'] = {
  /**
   * value: "GLOBAL"
   * @const
   */
  "GLOBAL": "GLOBAL",

  /**
   * value: "PROJECT"
   * @const
   */
  "PROJECT": "PROJECT"
};
var _default = UserPermission;
exports["default"] = _default;