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
 * The AutoCompleteSuggestion model module.
 * @module model/AutoCompleteSuggestion
 * @version 1.4.0
 */
var AutoCompleteSuggestion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoCompleteSuggestion</code>.
   * A field auto-complete suggestion.
   * @alias module:model/AutoCompleteSuggestion
   */
  function AutoCompleteSuggestion() {
    _classCallCheck(this, AutoCompleteSuggestion);

    AutoCompleteSuggestion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoCompleteSuggestion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoCompleteSuggestion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoCompleteSuggestion} obj Optional instance to populate.
     * @return {module:model/AutoCompleteSuggestion} The populated <code>AutoCompleteSuggestion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoCompleteSuggestion();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AutoCompleteSuggestion;
}();
/**
 * The display name of a suggested item. If `fieldValue` or `predicateValue` are provided, the matching text is highlighted with the HTML bold tag.
 * @member {String} displayName
 */


AutoCompleteSuggestion.prototype['displayName'] = undefined;
/**
 * The value of a suggested item.
 * @member {String} value
 */

AutoCompleteSuggestion.prototype['value'] = undefined;
var _default = AutoCompleteSuggestion;
exports["default"] = _default;