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
 * The IssueAllOfContent model module.
 * @module model/IssueAllOfContent
 * @version 1.1.0
 */
var IssueAllOfContent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueAllOfContent</code>.
   * @alias module:model/IssueAllOfContent
   */
  function IssueAllOfContent() {
    _classCallCheck(this, IssueAllOfContent);

    IssueAllOfContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueAllOfContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueAllOfContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAllOfContent} obj Optional instance to populate.
     * @return {module:model/IssueAllOfContent} The populated <code>IssueAllOfContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueAllOfContent();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('markup')) {
          obj['markup'] = _ApiClient["default"].convertToType(data['markup'], 'String');
        }

        if (data.hasOwnProperty('raw')) {
          obj['raw'] = _ApiClient["default"].convertToType(data['raw'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueAllOfContent;
}();
/**
 * The user's markup rendered as HTML.
 * @member {String} html
 */


IssueAllOfContent.prototype['html'] = undefined;
/**
 * The type of markup language the content is to be interpreted in.
 * @member {module:model/IssueAllOfContent.MarkupEnum} markup
 */

IssueAllOfContent.prototype['markup'] = undefined;
/**
 * The text as it was typed by a user.
 * @member {String} raw
 */

IssueAllOfContent.prototype['raw'] = undefined;
/**
 * Allowed values for the <code>markup</code> property.
 * @enum {String}
 * @readonly
 */

IssueAllOfContent['MarkupEnum'] = {
  /**
   * value: "markdown"
   * @const
   */
  "markdown": "markdown",

  /**
   * value: "creole"
   * @const
   */
  "creole": "creole"
};
var _default = IssueAllOfContent;
exports["default"] = _default;