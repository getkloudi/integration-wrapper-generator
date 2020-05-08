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
 * The CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon model module.
 * @module model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon
 * @version 1.2.0
 */
var CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon</code>.
   * @alias module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon
   * @param title {String} 
   * @param url16x16 {String} 
   */
  function CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon(title, url16x16) {
    _classCallCheck(this, CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon);

    CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon.initialize(this, title, url16x16);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon, null, [{
    key: "initialize",
    value: function initialize(obj, title, url16x16) {
      obj['title'] = title;
      obj['url16x16'] = url16x16;
    }
    /**
     * Constructs a <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon} The populated <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon();

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

  return CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon;
}();
/**
 * @member {String} title
 */


CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon.prototype['title'] = undefined;
/**
 * @member {String} url16x16
 */

CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon.prototype['url16x16'] = undefined;
var _default = CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectIcon;
exports["default"] = _default;