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
 * The IssueIssueIdOrKeyRemotelinkObjectStatusIcon model module.
 * @module model/IssueIssueIdOrKeyRemotelinkObjectStatusIcon
 * @version 1.3.0
 */
var IssueIssueIdOrKeyRemotelinkObjectStatusIcon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueIssueIdOrKeyRemotelinkObjectStatusIcon</code>.
   * @alias module:model/IssueIssueIdOrKeyRemotelinkObjectStatusIcon
   * @param link {String} 
   * @param title {String} 
   * @param url16x16 {String} 
   */
  function IssueIssueIdOrKeyRemotelinkObjectStatusIcon(link, title, url16x16) {
    _classCallCheck(this, IssueIssueIdOrKeyRemotelinkObjectStatusIcon);

    IssueIssueIdOrKeyRemotelinkObjectStatusIcon.initialize(this, link, title, url16x16);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueIssueIdOrKeyRemotelinkObjectStatusIcon, null, [{
    key: "initialize",
    value: function initialize(obj, link, title, url16x16) {
      obj['link'] = link;
      obj['title'] = title;
      obj['url16x16'] = url16x16;
    }
    /**
     * Constructs a <code>IssueIssueIdOrKeyRemotelinkObjectStatusIcon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueIssueIdOrKeyRemotelinkObjectStatusIcon} obj Optional instance to populate.
     * @return {module:model/IssueIssueIdOrKeyRemotelinkObjectStatusIcon} The populated <code>IssueIssueIdOrKeyRemotelinkObjectStatusIcon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueIssueIdOrKeyRemotelinkObjectStatusIcon();

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url16x16')) {
          obj['url16x16'] = _ApiClient["default"].convertToType(data['url16x16'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueIssueIdOrKeyRemotelinkObjectStatusIcon;
}();
/**
 * @member {String} link
 */


IssueIssueIdOrKeyRemotelinkObjectStatusIcon.prototype['link'] = undefined;
/**
 * @member {String} title
 */

IssueIssueIdOrKeyRemotelinkObjectStatusIcon.prototype['title'] = undefined;
/**
 * @member {String} url16x16
 */

IssueIssueIdOrKeyRemotelinkObjectStatusIcon.prototype['url16x16'] = undefined;
var _default = IssueIssueIdOrKeyRemotelinkObjectStatusIcon;
exports["default"] = _default;