"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GroupDetail model module.
 * @module model/GroupDetail
 * @version 1.0.0
 */
var GroupDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GroupDetail</code>.
   * Transfer a project to the group namespace. Available only for admin.
   * @alias module:model/GroupDetail
   */
  function GroupDetail() {
    _classCallCheck(this, GroupDetail);

    GroupDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupDetail} obj Optional instance to populate.
     * @return {module:model/GroupDetail} The populated <code>GroupDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupDetail();

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

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _Project["default"].constructFromObject(data['projects']);
        }

        if (data.hasOwnProperty('request_access_enabled')) {
          obj['request_access_enabled'] = _ApiClient["default"].convertToType(data['request_access_enabled'], 'String');
        }

        if (data.hasOwnProperty('shared_projects')) {
          obj['shared_projects'] = _Project["default"].constructFromObject(data['shared_projects']);
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

  return GroupDetail;
}();
/**
 * @member {String} avatar_url
 */


GroupDetail.prototype['avatar_url'] = undefined;
/**
 * @member {String} description
 */

GroupDetail.prototype['description'] = undefined;
/**
 * @member {String} id
 */

GroupDetail.prototype['id'] = undefined;
/**
 * @member {String} lfs_enabled
 */

GroupDetail.prototype['lfs_enabled'] = undefined;
/**
 * @member {String} name
 */

GroupDetail.prototype['name'] = undefined;
/**
 * @member {String} path
 */

GroupDetail.prototype['path'] = undefined;
/**
 * @member {module:model/Project} projects
 */

GroupDetail.prototype['projects'] = undefined;
/**
 * @member {String} request_access_enabled
 */

GroupDetail.prototype['request_access_enabled'] = undefined;
/**
 * @member {module:model/Project} shared_projects
 */

GroupDetail.prototype['shared_projects'] = undefined;
/**
 * @member {String} statistics
 */

GroupDetail.prototype['statistics'] = undefined;
/**
 * @member {String} visibility_level
 */

GroupDetail.prototype['visibility_level'] = undefined;
/**
 * @member {String} web_url
 */

GroupDetail.prototype['web_url'] = undefined;
var _default = GroupDetail;
exports["default"] = _default;