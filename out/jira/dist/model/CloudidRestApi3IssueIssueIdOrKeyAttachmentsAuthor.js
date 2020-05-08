"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor model module.
 * @module model/CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor
 * @version 1.1.0
 */
var CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor</code>.
   * @alias module:model/CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor
   * @param accountId {String} 
   * @param active {Boolean} 
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param displayName {String} 
   * @param emailAddress {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   * @param timeZone {String} 
   */
  function CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor(accountId, active, avatarUrls, displayName, emailAddress, key, name, self, timeZone) {
    _classCallCheck(this, CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor);

    CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.initialize(this, accountId, active, avatarUrls, displayName, emailAddress, key, name, self, timeZone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, active, avatarUrls, displayName, emailAddress, key, name, self, timeZone) {
      obj['accountId'] = accountId;
      obj['active'] = active;
      obj['avatarUrls'] = avatarUrls;
      obj['displayName'] = displayName;
      obj['emailAddress'] = emailAddress;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
      obj['timeZone'] = timeZone;
    }
    /**
     * Constructs a <code>CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor} The populated <code>CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor;
}();
/**
 * @member {String} accountId
 */


CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['accountId'] = undefined;
/**
 * @member {Boolean} active
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['active'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['avatarUrls'] = undefined;
/**
 * @member {String} displayName
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['displayName'] = undefined;
/**
 * @member {String} emailAddress
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['emailAddress'] = undefined;
/**
 * @member {String} key
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['key'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['name'] = undefined;
/**
 * @member {String} self
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['self'] = undefined;
/**
 * @member {String} timeZone
 */

CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor.prototype['timeZone'] = undefined;
var _default = CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor;
exports["default"] = _default;