"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedListUserDetailsApplicationUser = _interopRequireDefault(require("./PagedListUserDetailsApplicationUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Group model module.
 * @module model/Group
 * @version 1.4.0
 */
var Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   */
  function Group() {
    _classCallCheck(this, Group);

    Group.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], _PagedListUserDetailsApplicationUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
/**
 * Expand options that include additional group details in the response.
 * @member {String} expand
 */


Group.prototype['expand'] = undefined;
/**
 * The name of group.
 * @member {String} name
 */

Group.prototype['name'] = undefined;
/**
 * The URL for these group details.
 * @member {String} self
 */

Group.prototype['self'] = undefined;
/**
 * A paginated list of the users that are members of the group. A maximum of 50 users is returned in the list, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 50 users, use`?expand=users[51:100]`.
 * @member {module:model/PagedListUserDetailsApplicationUser} users
 */

Group.prototype['users'] = undefined;
var _default = Group;
exports["default"] = _default;