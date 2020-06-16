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
 * The SuggestedIssue model module.
 * @module model/SuggestedIssue
 * @version 1.4.0
 */
var SuggestedIssue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuggestedIssue</code>.
   * An issue suggested for use in the issue picker auto-completion.
   * @alias module:model/SuggestedIssue
   */
  function SuggestedIssue() {
    _classCallCheck(this, SuggestedIssue);

    SuggestedIssue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuggestedIssue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SuggestedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuggestedIssue} obj Optional instance to populate.
     * @return {module:model/SuggestedIssue} The populated <code>SuggestedIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuggestedIssue();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('img')) {
          obj['img'] = _ApiClient["default"].convertToType(data['img'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('keyHtml')) {
          obj['keyHtml'] = _ApiClient["default"].convertToType(data['keyHtml'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('summaryText')) {
          obj['summaryText'] = _ApiClient["default"].convertToType(data['summaryText'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SuggestedIssue;
}();
/**
 * The ID of the issue.
 * @member {Number} id
 */


SuggestedIssue.prototype['id'] = undefined;
/**
 * The URL of the issue type's avatar.
 * @member {String} img
 */

SuggestedIssue.prototype['img'] = undefined;
/**
 * The key of the issue.
 * @member {String} key
 */

SuggestedIssue.prototype['key'] = undefined;
/**
 * The key of the issue in HTML format.
 * @member {String} keyHtml
 */

SuggestedIssue.prototype['keyHtml'] = undefined;
/**
 * The phrase containing the query string in HTML format, with the string highlighted with HTML bold tags.
 * @member {String} summary
 */

SuggestedIssue.prototype['summary'] = undefined;
/**
 * The phrase containing the query string, as plain text.
 * @member {String} summaryText
 */

SuggestedIssue.prototype['summaryText'] = undefined;
var _default = SuggestedIssue;
exports["default"] = _default;