"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionHolder = _interopRequireDefault(require("./PermissionHolder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PermissionGrant model module.
 * @module model/PermissionGrant
 * @version 1.4.0
 */
var PermissionGrant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionGrant</code>.
   * Details about a permission granted to a user or group.
   * @alias module:model/PermissionGrant
   */
  function PermissionGrant() {
    _classCallCheck(this, PermissionGrant);

    PermissionGrant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionGrant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PermissionGrant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionGrant} obj Optional instance to populate.
     * @return {module:model/PermissionGrant} The populated <code>PermissionGrant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionGrant();

        if (data.hasOwnProperty('holder')) {
          obj['holder'] = _ApiClient["default"].convertToType(data['holder'], _PermissionHolder["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PermissionGrant;
}();
/**
 * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
 * @member {module:model/PermissionHolder} holder
 */


PermissionGrant.prototype['holder'] = undefined;
/**
 * The ID of the permission granted details.
 * @member {Number} id
 */

PermissionGrant.prototype['id'] = undefined;
/**
 * The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.
 * @member {String} permission
 */

PermissionGrant.prototype['permission'] = undefined;
/**
 * The URL of the permission granted details.
 * @member {String} self
 */

PermissionGrant.prototype['self'] = undefined;
var _default = PermissionGrant;
exports["default"] = _default;