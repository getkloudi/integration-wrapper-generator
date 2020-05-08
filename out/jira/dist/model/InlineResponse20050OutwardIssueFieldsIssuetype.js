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
 * The InlineResponse20050OutwardIssueFieldsIssuetype model module.
 * @module model/InlineResponse20050OutwardIssueFieldsIssuetype
 * @version 1.2.0
 */
var InlineResponse20050OutwardIssueFieldsIssuetype = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050OutwardIssueFieldsIssuetype</code>.
   * @alias module:model/InlineResponse20050OutwardIssueFieldsIssuetype
   * @param avatarId {Number} 
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20050OutwardIssueFieldsIssuetype(avatarId, description, iconUrl, id, name, self, subtask) {
    _classCallCheck(this, InlineResponse20050OutwardIssueFieldsIssuetype);

    InlineResponse20050OutwardIssueFieldsIssuetype.initialize(this, avatarId, description, iconUrl, id, name, self, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050OutwardIssueFieldsIssuetype, null, [{
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
     * Constructs a <code>InlineResponse20050OutwardIssueFieldsIssuetype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050OutwardIssueFieldsIssuetype} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050OutwardIssueFieldsIssuetype} The populated <code>InlineResponse20050OutwardIssueFieldsIssuetype</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050OutwardIssueFieldsIssuetype();

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

  return InlineResponse20050OutwardIssueFieldsIssuetype;
}();
/**
 * @member {Number} avatarId
 */


InlineResponse20050OutwardIssueFieldsIssuetype.prototype['avatarId'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['self'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20050OutwardIssueFieldsIssuetype.prototype['subtask'] = undefined;
var _default = InlineResponse20050OutwardIssueFieldsIssuetype;
exports["default"] = _default;