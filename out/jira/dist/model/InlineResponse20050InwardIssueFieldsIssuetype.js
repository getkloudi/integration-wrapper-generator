"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionRoleScope = _interopRequireDefault(require("./FilterIdPermissionRoleScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050InwardIssueFieldsIssuetype model module.
 * @module model/InlineResponse20050InwardIssueFieldsIssuetype
 * @version 1.3.0
 */
var InlineResponse20050InwardIssueFieldsIssuetype = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050InwardIssueFieldsIssuetype</code>.
   * @alias module:model/InlineResponse20050InwardIssueFieldsIssuetype
   * @param avatarId {Number} 
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param scope {module:model/FilterIdPermissionRoleScope} 
   * @param self {String} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20050InwardIssueFieldsIssuetype(avatarId, description, iconUrl, id, name, scope, self, subtask) {
    _classCallCheck(this, InlineResponse20050InwardIssueFieldsIssuetype);

    InlineResponse20050InwardIssueFieldsIssuetype.initialize(this, avatarId, description, iconUrl, id, name, scope, self, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050InwardIssueFieldsIssuetype, null, [{
    key: "initialize",
    value: function initialize(obj, avatarId, description, iconUrl, id, name, scope, self, subtask) {
      obj['avatarId'] = avatarId;
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['scope'] = scope;
      obj['self'] = self;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>InlineResponse20050InwardIssueFieldsIssuetype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFieldsIssuetype} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFieldsIssuetype} The populated <code>InlineResponse20050InwardIssueFieldsIssuetype</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050InwardIssueFieldsIssuetype();

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
          obj['scope'] = _FilterIdPermissionRoleScope["default"].constructFromObject(data['scope']);
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

  return InlineResponse20050InwardIssueFieldsIssuetype;
}();
/**
 * @member {Number} avatarId
 */


InlineResponse20050InwardIssueFieldsIssuetype.prototype['avatarId'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['name'] = undefined;
/**
 * @member {module:model/FilterIdPermissionRoleScope} scope
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['scope'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['self'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20050InwardIssueFieldsIssuetype.prototype['subtask'] = undefined;
var _default = InlineResponse20050InwardIssueFieldsIssuetype;
exports["default"] = _default;