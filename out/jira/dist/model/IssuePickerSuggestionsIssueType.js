"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SuggestedIssue = _interopRequireDefault(require("./SuggestedIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssuePickerSuggestionsIssueType model module.
 * @module model/IssuePickerSuggestionsIssueType
 * @version 1.4.0
 */
var IssuePickerSuggestionsIssueType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssuePickerSuggestionsIssueType</code>.
   * A type of issue suggested for use in auto-completion.
   * @alias module:model/IssuePickerSuggestionsIssueType
   */
  function IssuePickerSuggestionsIssueType() {
    _classCallCheck(this, IssuePickerSuggestionsIssueType);

    IssuePickerSuggestionsIssueType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssuePickerSuggestionsIssueType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssuePickerSuggestionsIssueType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuePickerSuggestionsIssueType} obj Optional instance to populate.
     * @return {module:model/IssuePickerSuggestionsIssueType} The populated <code>IssuePickerSuggestionsIssueType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuePickerSuggestionsIssueType();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_SuggestedIssue["default"]]);
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }

        if (data.hasOwnProperty('sub')) {
          obj['sub'] = _ApiClient["default"].convertToType(data['sub'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssuePickerSuggestionsIssueType;
}();
/**
 * The ID of the type of issues suggested for use in auto-completion.
 * @member {String} id
 */


IssuePickerSuggestionsIssueType.prototype['id'] = undefined;
/**
 * A list of issues suggested for use in auto-completion.
 * @member {Array.<module:model/SuggestedIssue>} issues
 */

IssuePickerSuggestionsIssueType.prototype['issues'] = undefined;
/**
 * The label of the type of issues suggested for use in auto-completion.
 * @member {String} label
 */

IssuePickerSuggestionsIssueType.prototype['label'] = undefined;
/**
 * If no issue suggestions are found, returns a message indicating no suggestions were found,
 * @member {String} msg
 */

IssuePickerSuggestionsIssueType.prototype['msg'] = undefined;
/**
 * If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned.
 * @member {String} sub
 */

IssuePickerSuggestionsIssueType.prototype['sub'] = undefined;
var _default = IssuePickerSuggestionsIssueType;
exports["default"] = _default;