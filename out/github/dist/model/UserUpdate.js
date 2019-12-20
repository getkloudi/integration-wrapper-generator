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
 * The UserUpdate model module.
 * @module model/UserUpdate
 * @version 1.3.1
 */
var UserUpdate =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserUpdate</code>.
   * @alias module:model/UserUpdate
   */
  function UserUpdate() {
    _classCallCheck(this, UserUpdate);

    UserUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdate} obj Optional instance to populate.
     * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUpdate();

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('hireable')) {
          obj['hireable'] = _ApiClient["default"].convertToType(data['hireable'], 'Boolean');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserUpdate;
}();
/**
 * @member {String} bio
 */


UserUpdate.prototype['bio'] = undefined;
/**
 * @member {String} blog
 */

UserUpdate.prototype['blog'] = undefined;
/**
 * @member {String} company
 */

UserUpdate.prototype['company'] = undefined;
/**
 * @member {String} email
 */

UserUpdate.prototype['email'] = undefined;
/**
 * @member {Boolean} hireable
 */

UserUpdate.prototype['hireable'] = undefined;
/**
 * @member {String} location
 */

UserUpdate.prototype['location'] = undefined;
/**
 * @member {String} name
 */

UserUpdate.prototype['name'] = undefined;
var _default = UserUpdate;
exports["default"] = _default;