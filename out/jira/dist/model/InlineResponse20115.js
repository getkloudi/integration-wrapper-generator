"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20114IssueTypeMappings = _interopRequireDefault(require("./InlineResponse20114IssueTypeMappings"));

var _InlineResponse20115LastModifiedUser = _interopRequireDefault(require("./InlineResponse20115LastModifiedUser"));

var _InlineResponse20115OriginalIssueTypeMappings = _interopRequireDefault(require("./InlineResponse20115OriginalIssueTypeMappings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20115 model module.
 * @module model/InlineResponse20115
 * @version 1.3.0
 */
var InlineResponse20115 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20115</code>.
   * 
   * @alias module:model/InlineResponse20115
   * @param defaultWorkflow {String} 
   * @param description {String} 
   * @param draft {Boolean} 
   * @param id {Number} 
   * @param issueTypeMappings {module:model/InlineResponse20114IssueTypeMappings} 
   * @param lastModified {String} 
   * @param lastModifiedUser {module:model/InlineResponse20115LastModifiedUser} 
   * @param name {String} 
   * @param originalDefaultWorkflow {String} 
   * @param originalIssueTypeMappings {module:model/InlineResponse20115OriginalIssueTypeMappings} 
   * @param self {String} 
   */
  function InlineResponse20115(defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self) {
    _classCallCheck(this, InlineResponse20115);

    InlineResponse20115.initialize(this, defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20115, null, [{
    key: "initialize",
    value: function initialize(obj, defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self) {
      obj['defaultWorkflow'] = defaultWorkflow;
      obj['description'] = description;
      obj['draft'] = draft;
      obj['id'] = id;
      obj['issueTypeMappings'] = issueTypeMappings;
      obj['lastModified'] = lastModified;
      obj['lastModifiedUser'] = lastModifiedUser;
      obj['name'] = name;
      obj['originalDefaultWorkflow'] = originalDefaultWorkflow;
      obj['originalIssueTypeMappings'] = originalIssueTypeMappings;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20115</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20115} obj Optional instance to populate.
     * @return {module:model/InlineResponse20115} The populated <code>InlineResponse20115</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20115();

        if (data.hasOwnProperty('defaultWorkflow')) {
          obj['defaultWorkflow'] = _ApiClient["default"].convertToType(data['defaultWorkflow'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issueTypeMappings')) {
          obj['issueTypeMappings'] = _InlineResponse20114IssueTypeMappings["default"].constructFromObject(data['issueTypeMappings']);
        }

        if (data.hasOwnProperty('lastModified')) {
          obj['lastModified'] = _ApiClient["default"].convertToType(data['lastModified'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUser')) {
          obj['lastModifiedUser'] = _InlineResponse20115LastModifiedUser["default"].constructFromObject(data['lastModifiedUser']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('originalDefaultWorkflow')) {
          obj['originalDefaultWorkflow'] = _ApiClient["default"].convertToType(data['originalDefaultWorkflow'], 'String');
        }

        if (data.hasOwnProperty('originalIssueTypeMappings')) {
          obj['originalIssueTypeMappings'] = _InlineResponse20115OriginalIssueTypeMappings["default"].constructFromObject(data['originalIssueTypeMappings']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20115;
}();
/**
 * @member {String} defaultWorkflow
 */


InlineResponse20115.prototype['defaultWorkflow'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20115.prototype['description'] = undefined;
/**
 * @member {Boolean} draft
 */

InlineResponse20115.prototype['draft'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20115.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse20114IssueTypeMappings} issueTypeMappings
 */

InlineResponse20115.prototype['issueTypeMappings'] = undefined;
/**
 * @member {String} lastModified
 */

InlineResponse20115.prototype['lastModified'] = undefined;
/**
 * @member {module:model/InlineResponse20115LastModifiedUser} lastModifiedUser
 */

InlineResponse20115.prototype['lastModifiedUser'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20115.prototype['name'] = undefined;
/**
 * @member {String} originalDefaultWorkflow
 */

InlineResponse20115.prototype['originalDefaultWorkflow'] = undefined;
/**
 * @member {module:model/InlineResponse20115OriginalIssueTypeMappings} originalIssueTypeMappings
 */

InlineResponse20115.prototype['originalIssueTypeMappings'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20115.prototype['self'] = undefined;
var _default = InlineResponse20115;
exports["default"] = _default;