"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20050InwardIssueFieldsStatusStatusCategory = _interopRequireDefault(require("./InlineResponse20050InwardIssueFieldsStatusStatusCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050InwardIssueFieldsStatus model module.
 * @module model/InlineResponse20050InwardIssueFieldsStatus
 * @version 1.3.0
 */
var InlineResponse20050InwardIssueFieldsStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050InwardIssueFieldsStatus</code>.
   * @alias module:model/InlineResponse20050InwardIssueFieldsStatus
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param statusCategory {module:model/InlineResponse20050InwardIssueFieldsStatusStatusCategory} 
   */
  function InlineResponse20050InwardIssueFieldsStatus(description, iconUrl, id, name, self, statusCategory) {
    _classCallCheck(this, InlineResponse20050InwardIssueFieldsStatus);

    InlineResponse20050InwardIssueFieldsStatus.initialize(this, description, iconUrl, id, name, self, statusCategory);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050InwardIssueFieldsStatus, null, [{
    key: "initialize",
    value: function initialize(obj, description, iconUrl, id, name, self, statusCategory) {
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['statusCategory'] = statusCategory;
    }
    /**
     * Constructs a <code>InlineResponse20050InwardIssueFieldsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFieldsStatus} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFieldsStatus} The populated <code>InlineResponse20050InwardIssueFieldsStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050InwardIssueFieldsStatus();

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

        if (data.hasOwnProperty('statusCategory')) {
          obj['statusCategory'] = _InlineResponse20050InwardIssueFieldsStatusStatusCategory["default"].constructFromObject(data['statusCategory']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050InwardIssueFieldsStatus;
}();
/**
 * @member {String} description
 */


InlineResponse20050InwardIssueFieldsStatus.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20050InwardIssueFieldsStatus.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20050InwardIssueFieldsStatus.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20050InwardIssueFieldsStatus.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050InwardIssueFieldsStatus.prototype['self'] = undefined;
/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsStatusStatusCategory} statusCategory
 */

InlineResponse20050InwardIssueFieldsStatus.prototype['statusCategory'] = undefined;
var _default = InlineResponse20050InwardIssueFieldsStatus;
exports["default"] = _default;