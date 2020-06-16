"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoCompleteSuggestion = _interopRequireDefault(require("./AutoCompleteSuggestion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AutoCompleteSuggestions model module.
 * @module model/AutoCompleteSuggestions
 * @version 1.4.0
 */
var AutoCompleteSuggestions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutoCompleteSuggestions</code>.
   * The results from a JQL query.
   * @alias module:model/AutoCompleteSuggestions
   */
  function AutoCompleteSuggestions() {
    _classCallCheck(this, AutoCompleteSuggestions);

    AutoCompleteSuggestions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AutoCompleteSuggestions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AutoCompleteSuggestions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoCompleteSuggestions} obj Optional instance to populate.
     * @return {module:model/AutoCompleteSuggestions} The populated <code>AutoCompleteSuggestions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutoCompleteSuggestions();

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_AutoCompleteSuggestion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AutoCompleteSuggestions;
}();
/**
 * The list of suggested item.
 * @member {Array.<module:model/AutoCompleteSuggestion>} results
 */


AutoCompleteSuggestions.prototype['results'] = undefined;
var _default = AutoCompleteSuggestions;
exports["default"] = _default;