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
 * The KeywordOperand model module.
 * @module model/KeywordOperand
 * @version 1.4.0
 */
var KeywordOperand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KeywordOperand</code>.
   * An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
   * @alias module:model/KeywordOperand
   * @param keyword {module:model/KeywordOperand.KeywordEnum} The keyword that is the operand value.
   */
  function KeywordOperand(keyword) {
    _classCallCheck(this, KeywordOperand);

    KeywordOperand.initialize(this, keyword);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(KeywordOperand, null, [{
    key: "initialize",
    value: function initialize(obj, keyword) {
      obj['keyword'] = keyword;
    }
    /**
     * Constructs a <code>KeywordOperand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeywordOperand} obj Optional instance to populate.
     * @return {module:model/KeywordOperand} The populated <code>KeywordOperand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KeywordOperand();

        if (data.hasOwnProperty('keyword')) {
          obj['keyword'] = _ApiClient["default"].convertToType(data['keyword'], 'String');
        }
      }

      return obj;
    }
  }]);

  return KeywordOperand;
}();
/**
 * The keyword that is the operand value.
 * @member {module:model/KeywordOperand.KeywordEnum} keyword
 */


KeywordOperand.prototype['keyword'] = undefined;
/**
 * Allowed values for the <code>keyword</code> property.
 * @enum {String}
 * @readonly
 */

KeywordOperand['KeywordEnum'] = {
  /**
   * value: "empty"
   * @const
   */
  "empty": "empty"
};
var _default = KeywordOperand;
exports["default"] = _default;