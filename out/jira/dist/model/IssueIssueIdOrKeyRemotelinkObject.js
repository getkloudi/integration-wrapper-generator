"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueIssueIdOrKeyRemotelinkObjectIcon = _interopRequireDefault(require("./IssueIssueIdOrKeyRemotelinkObjectIcon"));

var _IssueIssueIdOrKeyRemotelinkObjectStatus = _interopRequireDefault(require("./IssueIssueIdOrKeyRemotelinkObjectStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueIssueIdOrKeyRemotelinkObject model module.
 * @module model/IssueIssueIdOrKeyRemotelinkObject
 * @version 1.3.0
 */
var IssueIssueIdOrKeyRemotelinkObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueIssueIdOrKeyRemotelinkObject</code>.
   * @alias module:model/IssueIssueIdOrKeyRemotelinkObject
   * @param icon {module:model/IssueIssueIdOrKeyRemotelinkObjectIcon} 
   * @param status {module:model/IssueIssueIdOrKeyRemotelinkObjectStatus} 
   * @param summary {String} 
   * @param title {String} 
   * @param url {String} 
   */
  function IssueIssueIdOrKeyRemotelinkObject(icon, status, summary, title, url) {
    _classCallCheck(this, IssueIssueIdOrKeyRemotelinkObject);

    IssueIssueIdOrKeyRemotelinkObject.initialize(this, icon, status, summary, title, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueIssueIdOrKeyRemotelinkObject, null, [{
    key: "initialize",
    value: function initialize(obj, icon, status, summary, title, url) {
      obj['icon'] = icon;
      obj['status'] = status;
      obj['summary'] = summary;
      obj['title'] = title;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>IssueIssueIdOrKeyRemotelinkObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueIssueIdOrKeyRemotelinkObject} obj Optional instance to populate.
     * @return {module:model/IssueIssueIdOrKeyRemotelinkObject} The populated <code>IssueIssueIdOrKeyRemotelinkObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueIssueIdOrKeyRemotelinkObject();

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _IssueIssueIdOrKeyRemotelinkObjectIcon["default"].constructFromObject(data['icon']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _IssueIssueIdOrKeyRemotelinkObjectStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueIssueIdOrKeyRemotelinkObject;
}();
/**
 * @member {module:model/IssueIssueIdOrKeyRemotelinkObjectIcon} icon
 */


IssueIssueIdOrKeyRemotelinkObject.prototype['icon'] = undefined;
/**
 * @member {module:model/IssueIssueIdOrKeyRemotelinkObjectStatus} status
 */

IssueIssueIdOrKeyRemotelinkObject.prototype['status'] = undefined;
/**
 * @member {String} summary
 */

IssueIssueIdOrKeyRemotelinkObject.prototype['summary'] = undefined;
/**
 * @member {String} title
 */

IssueIssueIdOrKeyRemotelinkObject.prototype['title'] = undefined;
/**
 * @member {String} url
 */

IssueIssueIdOrKeyRemotelinkObject.prototype['url'] = undefined;
var _default = IssueIssueIdOrKeyRemotelinkObject;
exports["default"] = _default;