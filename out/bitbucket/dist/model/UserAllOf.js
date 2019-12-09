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
 * The UserAllOf model module.
 * @module model/UserAllOf
 * @version 1.0.0
 */
var UserAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserAllOf</code>.
   * A user object.
   * @alias module:model/UserAllOf
   */
  function UserAllOf() {
    _classCallCheck(this, UserAllOf);

    UserAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAllOf} obj Optional instance to populate.
     * @return {module:model/UserAllOf} The populated <code>UserAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserAllOf();

        if (data.hasOwnProperty('account_id')) {
          obj['account_id'] = _ApiClient["default"].convertToType(data['account_id'], 'String');
        }

        if (data.hasOwnProperty('is_staff')) {
          obj['is_staff'] = _ApiClient["default"].convertToType(data['is_staff'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UserAllOf;
}();
/**
 * The user's Atlassian account ID.
 * @member {String} account_id
 */


UserAllOf.prototype['account_id'] = undefined;
/**
 * @member {Boolean} is_staff
 */

UserAllOf.prototype['is_staff'] = undefined;
var _default = UserAllOf;
exports["default"] = _default;