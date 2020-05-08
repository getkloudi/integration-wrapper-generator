"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20114IssueTypeMappings = _interopRequireDefault(require("./InlineResponse20114IssueTypeMappings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20114 model module.
 * @module model/InlineResponse20114
 * @version 1.0.0
 */
var InlineResponse20114 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20114</code>.
   * 
   * @alias module:model/InlineResponse20114
   * @param defaultWorkflow {String} 
   * @param description {String} 
   * @param draft {Boolean} 
   * @param id {Number} 
   * @param issueTypeMappings {module:model/InlineResponse20114IssueTypeMappings} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20114(defaultWorkflow, description, draft, id, issueTypeMappings, name, self) {
    _classCallCheck(this, InlineResponse20114);

    InlineResponse20114.initialize(this, defaultWorkflow, description, draft, id, issueTypeMappings, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20114, null, [{
    key: "initialize",
    value: function initialize(obj, defaultWorkflow, description, draft, id, issueTypeMappings, name, self) {
      obj['defaultWorkflow'] = defaultWorkflow;
      obj['description'] = description;
      obj['draft'] = draft;
      obj['id'] = id;
      obj['issueTypeMappings'] = issueTypeMappings;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20114</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20114} obj Optional instance to populate.
     * @return {module:model/InlineResponse20114} The populated <code>InlineResponse20114</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20114();

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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20114;
}();
/**
 * @member {String} defaultWorkflow
 */


InlineResponse20114.prototype['defaultWorkflow'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20114.prototype['description'] = undefined;
/**
 * @member {Boolean} draft
 */

InlineResponse20114.prototype['draft'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20114.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse20114IssueTypeMappings} issueTypeMappings
 */

InlineResponse20114.prototype['issueTypeMappings'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20114.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20114.prototype['self'] = undefined;
var _default = InlineResponse20114;
exports["default"] = _default;