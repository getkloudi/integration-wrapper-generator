"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAttributeValue = _interopRequireDefault(require("./AccountAttributeValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountAttribute model module.
 * @module model/AccountAttribute
 * @version 1.1.0
 */
var AccountAttribute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AccountAttribute</code>.
   * Describes an account attribute.
   * @alias module:model/AccountAttribute
   */
  function AccountAttribute() {
    _classCallCheck(this, AccountAttribute);

    AccountAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAttribute} obj Optional instance to populate.
     * @return {module:model/AccountAttribute} The populated <code>AccountAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAttribute();

        if (data.hasOwnProperty('AttributeName')) {
          obj['AttributeName'] = _ApiClient["default"].convertToType(data['AttributeName'], 'String');
        }

        if (data.hasOwnProperty('AttributeValues')) {
          obj['AttributeValues'] = _ApiClient["default"].convertToType(data['AttributeValues'], [_AccountAttributeValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountAttribute;
}();
/**
 * @member {String} AttributeName
 */


AccountAttribute.prototype['AttributeName'] = undefined;
/**
 * @member {Array.<module:model/AccountAttributeValue>} AttributeValues
 */

AccountAttribute.prototype['AttributeValues'] = undefined;
var _default = AccountAttribute;
exports["default"] = _default;