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
 * The UserMigrationBean model module.
 * @module model/UserMigrationBean
 * @version 1.4.0
 */
var UserMigrationBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserMigrationBean</code>.
   * @alias module:model/UserMigrationBean
   */
  function UserMigrationBean() {
    _classCallCheck(this, UserMigrationBean);

    UserMigrationBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserMigrationBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserMigrationBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserMigrationBean} obj Optional instance to populate.
     * @return {module:model/UserMigrationBean} The populated <code>UserMigrationBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserMigrationBean();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserMigrationBean;
}();
/**
 * @member {String} accountId
 */


UserMigrationBean.prototype['accountId'] = undefined;
/**
 * @member {String} key
 */

UserMigrationBean.prototype['key'] = undefined;
/**
 * @member {String} username
 */

UserMigrationBean.prototype['username'] = undefined;
var _default = UserMigrationBean;
exports["default"] = _default;