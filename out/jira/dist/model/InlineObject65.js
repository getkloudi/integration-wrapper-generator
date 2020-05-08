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
 * The InlineObject65 model module.
 * @module model/InlineObject65
 * @version 1.2.0
 */
var InlineObject65 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject65</code>.
   * @alias module:model/InlineObject65
   */
  function InlineObject65() {
    _classCallCheck(this, InlineObject65);

    InlineObject65.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject65, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject65</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject65} obj Optional instance to populate.
     * @return {module:model/InlineObject65} The populated <code>InlineObject65</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject65();

        if (data.hasOwnProperty('defaultWorkflow')) {
          obj['defaultWorkflow'] = _ApiClient["default"].convertToType(data['defaultWorkflow'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('issueTypeMappings')) {
          obj['issueTypeMappings'] = _ApiClient["default"].convertToType(data['issueTypeMappings'], Object);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updateDraftIfNeeded')) {
          obj['updateDraftIfNeeded'] = _ApiClient["default"].convertToType(data['updateDraftIfNeeded'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject65;
}();
/**
 * The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira).
 * @member {String} defaultWorkflow
 */


InlineObject65.prototype['defaultWorkflow'] = undefined;
/**
 * The description of the workflow scheme.
 * @member {String} description
 */

InlineObject65.prototype['description'] = undefined;
/**
 * The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme.
 * @member {Object} issueTypeMappings
 */

InlineObject65.prototype['issueTypeMappings'] = undefined;
/**
 * The name of the workflow scheme. The name must be unique. Maximum length 255 characters.
 * @member {String} name
 */

InlineObject65.prototype['name'] = undefined;
/**
 * Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:
 * @member {Boolean} updateDraftIfNeeded
 */

InlineObject65.prototype['updateDraftIfNeeded'] = undefined;
var _default = InlineObject65;
exports["default"] = _default;