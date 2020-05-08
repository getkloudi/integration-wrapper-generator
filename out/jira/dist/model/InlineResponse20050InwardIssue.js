"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20050InwardIssueFields = _interopRequireDefault(require("./InlineResponse20050InwardIssueFields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050InwardIssue model module.
 * @module model/InlineResponse20050InwardIssue
 * @version 1.1.0
 */
var InlineResponse20050InwardIssue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050InwardIssue</code>.
   * @alias module:model/InlineResponse20050InwardIssue
   * @param fields {module:model/InlineResponse20050InwardIssueFields} 
   * @param id {String} 
   * @param key {String} 
   * @param self {String} 
   */
  function InlineResponse20050InwardIssue(fields, id, key, self) {
    _classCallCheck(this, InlineResponse20050InwardIssue);

    InlineResponse20050InwardIssue.initialize(this, fields, id, key, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050InwardIssue, null, [{
    key: "initialize",
    value: function initialize(obj, fields, id, key, self) {
      obj['fields'] = fields;
      obj['id'] = id;
      obj['key'] = key;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20050InwardIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssue} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssue} The populated <code>InlineResponse20050InwardIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050InwardIssue();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _InlineResponse20050InwardIssueFields["default"].constructFromObject(data['fields']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050InwardIssue;
}();
/**
 * @member {module:model/InlineResponse20050InwardIssueFields} fields
 */


InlineResponse20050InwardIssue.prototype['fields'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20050InwardIssue.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20050InwardIssue.prototype['key'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050InwardIssue.prototype['self'] = undefined;
var _default = InlineResponse20050InwardIssue;
exports["default"] = _default;