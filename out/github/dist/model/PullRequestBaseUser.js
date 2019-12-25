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
 * The PullRequestBaseUser model module.
 * @module model/PullRequestBaseUser
 * @version 1.4.1
 */
var PullRequestBaseUser =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullRequestBaseUser</code>.
   * @alias module:model/PullRequestBaseUser
   */
  function PullRequestBaseUser() {
    _classCallCheck(this, PullRequestBaseUser);

    PullRequestBaseUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestBaseUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullRequestBaseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestBaseUser} obj Optional instance to populate.
     * @return {module:model/PullRequestBaseUser} The populated <code>PullRequestBaseUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestBaseUser();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestBaseUser;
}();
/**
 * @member {String} avatar_url
 */


PullRequestBaseUser.prototype['avatar_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

PullRequestBaseUser.prototype['gravatar_id'] = undefined;
/**
 * @member {Number} id
 */

PullRequestBaseUser.prototype['id'] = undefined;
/**
 * @member {String} login
 */

PullRequestBaseUser.prototype['login'] = undefined;
/**
 * @member {String} url
 */

PullRequestBaseUser.prototype['url'] = undefined;
var _default = PullRequestBaseUser;
exports["default"] = _default;