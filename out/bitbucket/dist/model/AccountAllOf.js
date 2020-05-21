"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOfLinks = _interopRequireDefault(require("./AccountAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountAllOf model module.
 * @module model/AccountAllOf
 * @version 1.2.0
 */
var AccountAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountAllOf</code>.
   * An account object.
   * @alias module:model/AccountAllOf
   */
  function AccountAllOf() {
    _classCallCheck(this, AccountAllOf);

    AccountAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAllOf} obj Optional instance to populate.
     * @return {module:model/AccountAllOf} The populated <code>AccountAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAllOf();

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

  return AccountAllOf;
}();
/**
 * @member {module:model/AccountAllOfLinks} links
 */


AccountAllOf.prototype['links'] = undefined;
/**
 * @member {String} username
 */

AccountAllOf.prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

AccountAllOf.prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

AccountAllOf.prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

AccountAllOf.prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

AccountAllOf.prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

AccountAllOf.prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

AccountAllOf.prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

AccountAllOf.prototype['has_2fa_enabled'] = undefined;
var _default = AccountAllOf;
exports["default"] = _default;