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
 * The InlineResponse20050InwardIssueFieldsPriority model module.
 * @module model/InlineResponse20050InwardIssueFieldsPriority
 * @version 1.0.0
 */
var InlineResponse20050InwardIssueFieldsPriority = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050InwardIssueFieldsPriority</code>.
   * @alias module:model/InlineResponse20050InwardIssueFieldsPriority
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param statusColor {String} 
   */
  function InlineResponse20050InwardIssueFieldsPriority(description, iconUrl, id, name, self, statusColor) {
    _classCallCheck(this, InlineResponse20050InwardIssueFieldsPriority);

    InlineResponse20050InwardIssueFieldsPriority.initialize(this, description, iconUrl, id, name, self, statusColor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050InwardIssueFieldsPriority, null, [{
    key: "initialize",
    value: function initialize(obj, description, iconUrl, id, name, self, statusColor) {
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['statusColor'] = statusColor;
    }
    /**
     * Constructs a <code>InlineResponse20050InwardIssueFieldsPriority</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFieldsPriority} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFieldsPriority} The populated <code>InlineResponse20050InwardIssueFieldsPriority</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050InwardIssueFieldsPriority();

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

        if (data.hasOwnProperty('statusColor')) {
          obj['statusColor'] = _ApiClient["default"].convertToType(data['statusColor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050InwardIssueFieldsPriority;
}();
/**
 * @member {String} description
 */


InlineResponse20050InwardIssueFieldsPriority.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20050InwardIssueFieldsPriority.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20050InwardIssueFieldsPriority.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20050InwardIssueFieldsPriority.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050InwardIssueFieldsPriority.prototype['self'] = undefined;
/**
 * @member {String} statusColor
 */

InlineResponse20050InwardIssueFieldsPriority.prototype['statusColor'] = undefined;
var _default = InlineResponse20050InwardIssueFieldsPriority;
exports["default"] = _default;