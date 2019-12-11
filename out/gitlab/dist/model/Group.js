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
 * The Group model module.
 * @module model/Group
 * @version 1.1.0
 */
var Group =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Group</code>.
   * Update a group. Available only for users who can administrate groups.
   * @alias module:model/Group
   */
  function Group() {
    _classCallCheck(this, Group);

    Group.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('lfs_enabled')) {
          obj['lfs_enabled'] = _ApiClient["default"].convertToType(data['lfs_enabled'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('request_access_enabled')) {
          obj['request_access_enabled'] = _ApiClient["default"].convertToType(data['request_access_enabled'], 'String');
        }

        if (data.hasOwnProperty('statistics')) {
          obj['statistics'] = _ApiClient["default"].convertToType(data['statistics'], 'String');
        }

        if (data.hasOwnProperty('visibility_level')) {
          obj['visibility_level'] = _ApiClient["default"].convertToType(data['visibility_level'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
/**
 * @member {String} avatar_url
 */


Group.prototype['avatar_url'] = undefined;
/**
 * @member {String} description
 */

Group.prototype['description'] = undefined;
/**
 * @member {String} id
 */

Group.prototype['id'] = undefined;
/**
 * @member {String} lfs_enabled
 */

Group.prototype['lfs_enabled'] = undefined;
/**
 * @member {String} name
 */

Group.prototype['name'] = undefined;
/**
 * @member {String} path
 */

Group.prototype['path'] = undefined;
/**
 * @member {String} request_access_enabled
 */

Group.prototype['request_access_enabled'] = undefined;
/**
 * @member {String} statistics
 */

Group.prototype['statistics'] = undefined;
/**
 * @member {String} visibility_level
 */

Group.prototype['visibility_level'] = undefined;
/**
 * @member {String} web_url
 */

Group.prototype['web_url'] = undefined;
var _default = Group;
exports["default"] = _default;