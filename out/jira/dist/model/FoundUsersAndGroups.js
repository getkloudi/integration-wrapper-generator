"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FoundGroups = _interopRequireDefault(require("./FoundGroups"));

var _FoundUsers = _interopRequireDefault(require("./FoundUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FoundUsersAndGroups model module.
 * @module model/FoundUsersAndGroups
 * @version 1.4.0
 */
var FoundUsersAndGroups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FoundUsersAndGroups</code>.
   * List of users and groups found in a search.
   * @alias module:model/FoundUsersAndGroups
   */
  function FoundUsersAndGroups() {
    _classCallCheck(this, FoundUsersAndGroups);

    FoundUsersAndGroups.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FoundUsersAndGroups, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FoundUsersAndGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FoundUsersAndGroups} obj Optional instance to populate.
     * @return {module:model/FoundUsersAndGroups} The populated <code>FoundUsersAndGroups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FoundUsersAndGroups();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _FoundGroups["default"].constructFromObject(data['groups']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _FoundUsers["default"].constructFromObject(data['users']);
        }
      }

      return obj;
    }
  }]);

  return FoundUsersAndGroups;
}();
/**
 * @member {module:model/FoundGroups} groups
 */


FoundUsersAndGroups.prototype['groups'] = undefined;
/**
 * @member {module:model/FoundUsers} users
 */

FoundUsersAndGroups.prototype['users'] = undefined;
var _default = FoundUsersAndGroups;
exports["default"] = _default;