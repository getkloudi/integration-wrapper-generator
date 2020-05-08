"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004Author = _interopRequireDefault(require("./InlineResponse2004Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20074 model module.
 * @module model/InlineResponse20074
 * @version 1.1.0
 */
var InlineResponse20074 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20074</code>.
   * @alias module:model/InlineResponse20074
   * @param assignee {module:model/InlineResponse2004Author} 
   * @param assigneeType {String} 
   * @param description {String} 
   * @param id {String} 
   * @param isAssigneeTypeValid {Boolean} 
   * @param lead {module:model/InlineResponse2004Author} 
   * @param name {String} 
   * @param project {String} 
   * @param projectId {Number} 
   * @param realAssignee {module:model/InlineResponse2004Author} 
   * @param realAssigneeType {String} 
   * @param self {String} 
   */
  function InlineResponse20074(assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self) {
    _classCallCheck(this, InlineResponse20074);

    InlineResponse20074.initialize(this, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20074, null, [{
    key: "initialize",
    value: function initialize(obj, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self) {
      obj['assignee'] = assignee;
      obj['assigneeType'] = assigneeType;
      obj['description'] = description;
      obj['id'] = id;
      obj['isAssigneeTypeValid'] = isAssigneeTypeValid;
      obj['lead'] = lead;
      obj['name'] = name;
      obj['project'] = project;
      obj['projectId'] = projectId;
      obj['realAssignee'] = realAssignee;
      obj['realAssigneeType'] = realAssigneeType;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20074</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20074} obj Optional instance to populate.
     * @return {module:model/InlineResponse20074} The populated <code>InlineResponse20074</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20074();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _InlineResponse2004Author["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isAssigneeTypeValid')) {
          obj['isAssigneeTypeValid'] = _ApiClient["default"].convertToType(data['isAssigneeTypeValid'], 'Boolean');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _InlineResponse2004Author["default"].constructFromObject(data['lead']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }

        if (data.hasOwnProperty('realAssignee')) {
          obj['realAssignee'] = _InlineResponse2004Author["default"].constructFromObject(data['realAssignee']);
        }

        if (data.hasOwnProperty('realAssigneeType')) {
          obj['realAssigneeType'] = _ApiClient["default"].convertToType(data['realAssigneeType'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20074;
}();
/**
 * @member {module:model/InlineResponse2004Author} assignee
 */


InlineResponse20074.prototype['assignee'] = undefined;
/**
 * @member {String} assigneeType
 */

InlineResponse20074.prototype['assigneeType'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20074.prototype['description'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20074.prototype['id'] = undefined;
/**
 * @member {Boolean} isAssigneeTypeValid
 */

InlineResponse20074.prototype['isAssigneeTypeValid'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} lead
 */

InlineResponse20074.prototype['lead'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20074.prototype['name'] = undefined;
/**
 * @member {String} project
 */

InlineResponse20074.prototype['project'] = undefined;
/**
 * @member {Number} projectId
 */

InlineResponse20074.prototype['projectId'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} realAssignee
 */

InlineResponse20074.prototype['realAssignee'] = undefined;
/**
 * @member {String} realAssigneeType
 */

InlineResponse20074.prototype['realAssigneeType'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20074.prototype['self'] = undefined;
var _default = InlineResponse20074;
exports["default"] = _default;