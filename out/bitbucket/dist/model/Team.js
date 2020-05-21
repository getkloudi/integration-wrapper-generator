"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _AccountAllOfLinks = _interopRequireDefault(require("./AccountAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Team model module.
 * @module model/Team
 * @version 1.2.0
 */
var Team = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Team</code>.
   * @alias module:model/Team
   * @extends module:model/Account
   * @implements module:model/Account
   * @param type {String} 
   */
  function Team(type) {
    _classCallCheck(this, Team);

    _Account["default"].initialize(this, type);

    Team.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Team, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Team} obj Optional instance to populate.
     * @return {module:model/Team} The populated <code>Team</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Team();

        _Account["default"].constructFromObject(data, obj);

        _Account["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return Team;
}(); // Implement Account interface:

/**
 * @member {String} type
 */


_Account["default"].prototype['type'] = undefined;
/**
 * @member {module:model/AccountAllOfLinks} links
 */

_Account["default"].prototype['links'] = undefined;
/**
 * @member {String} username
 */

_Account["default"].prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

_Account["default"].prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

_Account["default"].prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

_Account["default"].prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

_Account["default"].prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

_Account["default"].prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

_Account["default"].prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

_Account["default"].prototype['has_2fa_enabled'] = undefined;
var _default = Team;
exports["default"] = _default;