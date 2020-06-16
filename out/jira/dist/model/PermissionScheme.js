"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionGrant = _interopRequireDefault(require("./PermissionGrant"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PermissionScheme model module.
 * @module model/PermissionScheme
 * @version 1.4.0
 */
var PermissionScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionScheme</code>.
   * Details of a permission scheme.
   * @alias module:model/PermissionScheme
   * @param name {String} The name of the permission scheme. Must be unique.
   */
  function PermissionScheme(name) {
    _classCallCheck(this, PermissionScheme);

    PermissionScheme.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionScheme, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>PermissionScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionScheme} obj Optional instance to populate.
     * @return {module:model/PermissionScheme} The populated <code>PermissionScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionScheme();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_PermissionGrant["default"]]);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PermissionScheme;
}();
/**
 * A description for the permission scheme.
 * @member {String} description
 */


PermissionScheme.prototype['description'] = undefined;
/**
 * The expand options available for the permission scheme.
 * @member {String} expand
 */

PermissionScheme.prototype['expand'] = undefined;
/**
 * The ID of the permission scheme.
 * @member {Number} id
 */

PermissionScheme.prototype['id'] = undefined;
/**
 * The name of the permission scheme. Must be unique.
 * @member {String} name
 */

PermissionScheme.prototype['name'] = undefined;
/**
 * The permission scheme to create or update. See [About permission schemes and grants](#about-permission-schemes-and-grants) for more information.
 * @member {Array.<module:model/PermissionGrant>} permissions
 */

PermissionScheme.prototype['permissions'] = undefined;
/**
 * The scope of the permission scheme.
 * @member {module:model/Scope} scope
 */

PermissionScheme.prototype['scope'] = undefined;
/**
 * The URL of the permission scheme.
 * @member {String} self
 */

PermissionScheme.prototype['self'] = undefined;
var _default = PermissionScheme;
exports["default"] = _default;