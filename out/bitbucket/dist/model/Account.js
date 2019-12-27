"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOf = _interopRequireDefault(require("./AccountAllOf"));

var _AccountAllOfLinks = _interopRequireDefault(require("./AccountAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Account model module.
 * @module model/Account
 * @version 1.1.2
 */
var Account =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/AccountAllOf
   * @param type {String} 
   */
  function Account(type) {
    _classCallCheck(this, Account);

    _ModelObject["default"].initialize(this, type);

    _AccountAllOf["default"].initialize(this);

    Account.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Account, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account} obj Optional instance to populate.
     * @return {module:model/Account} The populated <code>Account</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Account();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _AccountAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _AccountAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('account_status')) {
          obj['account_status'] = _ApiClient["default"].convertToType(data['account_status'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('has_2fa_enabled')) {
          obj['has_2fa_enabled'] = _ApiClient["default"].convertToType(data['has_2fa_enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Account;
}();
/**
 * @member {module:model/AccountAllOfLinks} links
 */


Account.prototype['links'] = undefined;
/**
 * @member {String} username
 */

Account.prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

Account.prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

Account.prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

Account.prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

Account.prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

Account.prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

Account.prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

Account.prototype['has_2fa_enabled'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement AccountAllOf interface:

/**
 * @member {module:model/AccountAllOfLinks} links
 */

_AccountAllOf["default"].prototype['links'] = undefined;
/**
 * @member {String} username
 */

_AccountAllOf["default"].prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

_AccountAllOf["default"].prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

_AccountAllOf["default"].prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

_AccountAllOf["default"].prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

_AccountAllOf["default"].prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

_AccountAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

_AccountAllOf["default"].prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

_AccountAllOf["default"].prototype['has_2fa_enabled'] = undefined;
var _default = Account;
exports["default"] = _default;