"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOfLinksAvatar = _interopRequireDefault(require("./AccountAllOfLinksAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountAllOfLinks model module.
 * @module model/AccountAllOfLinks
 * @version 1.1.0
 */
var AccountAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AccountAllOfLinks</code>.
   * @alias module:model/AccountAllOfLinks
   */
  function AccountAllOfLinks() {
    _classCallCheck(this, AccountAllOfLinks);

    AccountAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAllOfLinks} obj Optional instance to populate.
     * @return {module:model/AccountAllOfLinks} The populated <code>AccountAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAllOfLinks();

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['avatar']);
        }

        if (data.hasOwnProperty('followers')) {
          obj['followers'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['followers']);
        }

        if (data.hasOwnProperty('following')) {
          obj['following'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['following']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['repositories']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return AccountAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} avatar
 */


AccountAllOfLinks.prototype['avatar'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} followers
 */

AccountAllOfLinks.prototype['followers'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} following
 */

AccountAllOfLinks.prototype['following'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} html
 */

AccountAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} repositories
 */

AccountAllOfLinks.prototype['repositories'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} self
 */

AccountAllOfLinks.prototype['self'] = undefined;
var _default = AccountAllOfLinks;
exports["default"] = _default;