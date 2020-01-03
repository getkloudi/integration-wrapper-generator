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
 * The AccountAttributeValue model module.
 * @module model/AccountAttributeValue
 * @version 1.0.0
 */
var AccountAttributeValue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AccountAttributeValue</code>.
   * Describes a value of an account attribute.
   * @alias module:model/AccountAttributeValue
   */
  function AccountAttributeValue() {
    _classCallCheck(this, AccountAttributeValue);

    AccountAttributeValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAttributeValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountAttributeValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAttributeValue} obj Optional instance to populate.
     * @return {module:model/AccountAttributeValue} The populated <code>AccountAttributeValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAttributeValue();

        if (data.hasOwnProperty('AttributeValue')) {
          obj['AttributeValue'] = _ApiClient["default"].convertToType(data['AttributeValue'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountAttributeValue;
}();
/**
 * @member {String} AttributeValue
 */


AccountAttributeValue.prototype['AttributeValue'] = undefined;
var _default = AccountAttributeValue;
exports["default"] = _default;