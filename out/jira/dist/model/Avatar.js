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
 * The Avatar model module.
 * @module model/Avatar
 * @version 1.4.0
 */
var Avatar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Avatar</code>.
   * Details of an avatar.
   * @alias module:model/Avatar
   * @param id {String} The ID of the avatar.
   */
  function Avatar(id) {
    _classCallCheck(this, Avatar);

    Avatar.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Avatar, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Avatar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Avatar} obj Optional instance to populate.
     * @return {module:model/Avatar} The populated <code>Avatar</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Avatar();

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isDeletable')) {
          obj['isDeletable'] = _ApiClient["default"].convertToType(data['isDeletable'], 'Boolean');
        }

        if (data.hasOwnProperty('isSelected')) {
          obj['isSelected'] = _ApiClient["default"].convertToType(data['isSelected'], 'Boolean');
        }

        if (data.hasOwnProperty('isSystemAvatar')) {
          obj['isSystemAvatar'] = _ApiClient["default"].convertToType(data['isSystemAvatar'], 'Boolean');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('urls')) {
          obj['urls'] = _ApiClient["default"].convertToType(data['urls'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return Avatar;
}();
/**
 * The file name of the avatar icon. Returned for system avatars.
 * @member {String} fileName
 */


Avatar.prototype['fileName'] = undefined;
/**
 * The ID of the avatar.
 * @member {String} id
 */

Avatar.prototype['id'] = undefined;
/**
 * Whether the avatar can be deleted.
 * @member {Boolean} isDeletable
 */

Avatar.prototype['isDeletable'] = undefined;
/**
 * Whether the avatar is used in Jira. For example, shown as a project's avatar.
 * @member {Boolean} isSelected
 */

Avatar.prototype['isSelected'] = undefined;
/**
 * Whether the avatar is a system avatar.
 * @member {Boolean} isSystemAvatar
 */

Avatar.prototype['isSystemAvatar'] = undefined;
/**
 * The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.
 * @member {String} owner
 */

Avatar.prototype['owner'] = undefined;
/**
 * The list of avatar icon URLs.
 * @member {Object.<String, String>} urls
 */

Avatar.prototype['urls'] = undefined;
var _default = Avatar;
exports["default"] = _default;