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
 * The InlineResponse20073Values model module.
 * @module model/InlineResponse20073Values
 * @version 1.1.0
 */
var InlineResponse20073Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20073Values</code>.
   * @alias module:model/InlineResponse20073Values
   * @param assigneeType {String} 
   * @param description {String} 
   * @param id {String} 
   * @param isAssigneeTypeValid {Boolean} 
   * @param issueCount {Number} 
   * @param name {String} 
   * @param project {String} 
   * @param projectId {Number} 
   * @param realAssigneeType {String} 
   * @param self {String} 
   */
  function InlineResponse20073Values(assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self) {
    _classCallCheck(this, InlineResponse20073Values);

    InlineResponse20073Values.initialize(this, assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20073Values, null, [{
    key: "initialize",
    value: function initialize(obj, assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self) {
      obj['assigneeType'] = assigneeType;
      obj['description'] = description;
      obj['id'] = id;
      obj['isAssigneeTypeValid'] = isAssigneeTypeValid;
      obj['issueCount'] = issueCount;
      obj['name'] = name;
      obj['project'] = project;
      obj['projectId'] = projectId;
      obj['realAssigneeType'] = realAssigneeType;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20073Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20073Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20073Values} The populated <code>InlineResponse20073Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20073Values();

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

        if (data.hasOwnProperty('issueCount')) {
          obj['issueCount'] = _ApiClient["default"].convertToType(data['issueCount'], 'Number');
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

  return InlineResponse20073Values;
}();
/**
 * @member {module:model/InlineResponse2004Author} assignee
 */


InlineResponse20073Values.prototype['assignee'] = undefined;
/**
 * @member {String} assigneeType
 */

InlineResponse20073Values.prototype['assigneeType'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20073Values.prototype['description'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20073Values.prototype['id'] = undefined;
/**
 * @member {Boolean} isAssigneeTypeValid
 */

InlineResponse20073Values.prototype['isAssigneeTypeValid'] = undefined;
/**
 * @member {Number} issueCount
 */

InlineResponse20073Values.prototype['issueCount'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} lead
 */

InlineResponse20073Values.prototype['lead'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20073Values.prototype['name'] = undefined;
/**
 * @member {String} project
 */

InlineResponse20073Values.prototype['project'] = undefined;
/**
 * @member {Number} projectId
 */

InlineResponse20073Values.prototype['projectId'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} realAssignee
 */

InlineResponse20073Values.prototype['realAssignee'] = undefined;
/**
 * @member {String} realAssigneeType
 */

InlineResponse20073Values.prototype['realAssigneeType'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20073Values.prototype['self'] = undefined;
var _default = InlineResponse20073Values;
exports["default"] = _default;