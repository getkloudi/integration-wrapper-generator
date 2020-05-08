"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3FilterIdPermissionRoleScope = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionRoleScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20071IssueTypes model module.
 * @module model/InlineResponse20071IssueTypes
 * @version 1.2.0
 */
var InlineResponse20071IssueTypes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20071IssueTypes</code>.
   * @alias module:model/InlineResponse20071IssueTypes
   * @param avatarId {Number} 
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20071IssueTypes(avatarId, description, iconUrl, id, name, self, subtask) {
    _classCallCheck(this, InlineResponse20071IssueTypes);

    InlineResponse20071IssueTypes.initialize(this, avatarId, description, iconUrl, id, name, self, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20071IssueTypes, null, [{
    key: "initialize",
    value: function initialize(obj, avatarId, description, iconUrl, id, name, self, subtask) {
      obj['avatarId'] = avatarId;
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>InlineResponse20071IssueTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071IssueTypes} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071IssueTypes} The populated <code>InlineResponse20071IssueTypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20071IssueTypes();

        if (data.hasOwnProperty('avatarId')) {
          obj['avatarId'] = _ApiClient["default"].convertToType(data['avatarId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('iconUrl')) {
          obj['iconUrl'] = _ApiClient["default"].convertToType(data['iconUrl'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _CloudidRestApi3FilterIdPermissionRoleScope["default"].constructFromObject(data['scope']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('subtask')) {
          obj['subtask'] = _ApiClient["default"].convertToType(data['subtask'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20071IssueTypes;
}();
/**
 * @member {Number} avatarId
 */


InlineResponse20071IssueTypes.prototype['avatarId'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20071IssueTypes.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20071IssueTypes.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20071IssueTypes.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20071IssueTypes.prototype['name'] = undefined;
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleScope} scope
 */

InlineResponse20071IssueTypes.prototype['scope'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20071IssueTypes.prototype['self'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20071IssueTypes.prototype['subtask'] = undefined;
var _default = InlineResponse20071IssueTypes;
exports["default"] = _default;