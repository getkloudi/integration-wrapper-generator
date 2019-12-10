"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserPublic = _interopRequireDefault(require("./UserPublic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SSHKeyWithUser model module.
 * @module model/SSHKeyWithUser
 * @version 1.0.0
 */
var SSHKeyWithUser =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SSHKeyWithUser</code>.
   * Get single ssh key by id. Only available to admin users
   * @alias module:model/SSHKeyWithUser
   */
  function SSHKeyWithUser() {
    _classCallCheck(this, SSHKeyWithUser);

    SSHKeyWithUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SSHKeyWithUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SSHKeyWithUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SSHKeyWithUser} obj Optional instance to populate.
     * @return {module:model/SSHKeyWithUser} The populated <code>SSHKeyWithUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SSHKeyWithUser();

        if (data.hasOwnProperty('can_push')) {
          obj['can_push'] = _ApiClient["default"].convertToType(data['can_push'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _UserPublic["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return SSHKeyWithUser;
}();
/**
 * @member {String} can_push
 */


SSHKeyWithUser.prototype['can_push'] = undefined;
/**
 * @member {String} created_at
 */

SSHKeyWithUser.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

SSHKeyWithUser.prototype['id'] = undefined;
/**
 * @member {String} key
 */

SSHKeyWithUser.prototype['key'] = undefined;
/**
 * @member {String} title
 */

SSHKeyWithUser.prototype['title'] = undefined;
/**
 * @member {module:model/UserPublic} user
 */

SSHKeyWithUser.prototype['user'] = undefined;
var _default = SSHKeyWithUser;
exports["default"] = _default;