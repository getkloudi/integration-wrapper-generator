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
 * The IssueIssueIdOrKeyRemotelinkObjectIcon model module.
 * @module model/IssueIssueIdOrKeyRemotelinkObjectIcon
 * @version 1.0.0
 */
var IssueIssueIdOrKeyRemotelinkObjectIcon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueIssueIdOrKeyRemotelinkObjectIcon</code>.
   * @alias module:model/IssueIssueIdOrKeyRemotelinkObjectIcon
   * @param title {String} 
   * @param url16x16 {String} 
   */
  function IssueIssueIdOrKeyRemotelinkObjectIcon(title, url16x16) {
    _classCallCheck(this, IssueIssueIdOrKeyRemotelinkObjectIcon);

    IssueIssueIdOrKeyRemotelinkObjectIcon.initialize(this, title, url16x16);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueIssueIdOrKeyRemotelinkObjectIcon, null, [{
    key: "initialize",
    value: function initialize(obj, title, url16x16) {
      obj['title'] = title;
      obj['url16x16'] = url16x16;
    }
    /**
     * Constructs a <code>IssueIssueIdOrKeyRemotelinkObjectIcon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueIssueIdOrKeyRemotelinkObjectIcon} obj Optional instance to populate.
     * @return {module:model/IssueIssueIdOrKeyRemotelinkObjectIcon} The populated <code>IssueIssueIdOrKeyRemotelinkObjectIcon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueIssueIdOrKeyRemotelinkObjectIcon();

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

  return IssueIssueIdOrKeyRemotelinkObjectIcon;
}();
/**
 * @member {String} title
 */


IssueIssueIdOrKeyRemotelinkObjectIcon.prototype['title'] = undefined;
/**
 * @member {String} url16x16
 */

IssueIssueIdOrKeyRemotelinkObjectIcon.prototype['url16x16'] = undefined;
var _default = IssueIssueIdOrKeyRemotelinkObjectIcon;
exports["default"] = _default;