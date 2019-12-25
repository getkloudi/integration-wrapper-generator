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
 * The OrgTeamsPost model module.
 * @module model/OrgTeamsPost
 * @version 1.4.0
 */
var OrgTeamsPost =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>OrgTeamsPost</code>.
   * @alias module:model/OrgTeamsPost
   * @param name {String} 
   */
  function OrgTeamsPost(name) {
    _classCallCheck(this, OrgTeamsPost);

    OrgTeamsPost.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrgTeamsPost, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>OrgTeamsPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgTeamsPost} obj Optional instance to populate.
     * @return {module:model/OrgTeamsPost} The populated <code>OrgTeamsPost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrgTeamsPost();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('repo_names')) {
          obj['repo_names'] = _ApiClient["default"].convertToType(data['repo_names'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return OrgTeamsPost;
}();
/**
 * @member {String} name
 */


OrgTeamsPost.prototype['name'] = undefined;
/**
 * @member {module:model/OrgTeamsPost.PermissionEnum} permission
 */

OrgTeamsPost.prototype['permission'] = undefined;
/**
 * @member {Array.<String>} repo_names
 */

OrgTeamsPost.prototype['repo_names'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

OrgTeamsPost['PermissionEnum'] = {
  /**
   * value: "pull"
   * @const
   */
  "pull": "pull",

  /**
   * value: "push"
   * @const
   */
  "push": "push",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
var _default = OrgTeamsPost;
exports["default"] = _default;