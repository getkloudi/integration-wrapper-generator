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
 * The Member model module.
 * @module model/Member
 * @version 1.1.0
 */
var Member =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Member</code>.
   * Updates a member of a group or project.
   * @alias module:model/Member
   */
  function Member() {
    _classCallCheck(this, Member);

    Member.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Member, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Member} obj Optional instance to populate.
     * @return {module:model/Member} The populated <code>Member</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Member();

        if (data.hasOwnProperty('access_level')) {
          obj['access_level'] = _ApiClient["default"].convertToType(data['access_level'], 'String');
        }

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Member;
}();
/**
 * @member {String} access_level
 */


Member.prototype['access_level'] = undefined;
/**
 * @member {String} avatar_url
 */

Member.prototype['avatar_url'] = undefined;
/**
 * @member {String} expires_at
 */

Member.prototype['expires_at'] = undefined;
/**
 * @member {String} id
 */

Member.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Member.prototype['name'] = undefined;
/**
 * @member {String} state
 */

Member.prototype['state'] = undefined;
/**
 * @member {String} username
 */

Member.prototype['username'] = undefined;
/**
 * @member {String} web_url
 */

Member.prototype['web_url'] = undefined;
var _default = Member;
exports["default"] = _default;