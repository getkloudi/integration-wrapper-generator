"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserPickerUser = _interopRequireDefault(require("./UserPickerUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FoundUsers model module.
 * @module model/FoundUsers
 * @version 1.4.0
 */
var FoundUsers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FoundUsers</code>.
   * The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
   * @alias module:model/FoundUsers
   */
  function FoundUsers() {
    _classCallCheck(this, FoundUsers);

    FoundUsers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FoundUsers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FoundUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FoundUsers} obj Optional instance to populate.
     * @return {module:model/FoundUsers} The populated <code>FoundUsers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FoundUsers();

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_UserPickerUser["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FoundUsers;
}();
/**
 * Header text indicating the number of users in the response and the total number of users found in the search.
 * @member {String} header
 */


FoundUsers.prototype['header'] = undefined;
/**
 * The total number of users found in the search.
 * @member {Number} total
 */

FoundUsers.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/UserPickerUser>} users
 */

FoundUsers.prototype['users'] = undefined;
var _default = FoundUsers;
exports["default"] = _default;