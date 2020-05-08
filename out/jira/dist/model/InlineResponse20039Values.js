"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor = _interopRequireDefault(require("./CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor"));

var _InlineResponse20039Items = _interopRequireDefault(require("./InlineResponse20039Items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20039Values model module.
 * @module model/InlineResponse20039Values
 * @version 1.1.0
 */
var InlineResponse20039Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20039Values</code>.
   * @alias module:model/InlineResponse20039Values
   * @param created {String} 
   * @param id {String} 
   */
  function InlineResponse20039Values(created, id) {
    _classCallCheck(this, InlineResponse20039Values);

    InlineResponse20039Values.initialize(this, created, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20039Values, null, [{
    key: "initialize",
    value: function initialize(obj, created, id) {
      obj['created'] = created;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>InlineResponse20039Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20039Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20039Values} The populated <code>InlineResponse20039Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20039Values();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_InlineResponse20039Items["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20039Values;
}();
/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyAttachmentsAuthor} author
 */


InlineResponse20039Values.prototype['author'] = undefined;
/**
 * @member {String} created
 */

InlineResponse20039Values.prototype['created'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20039Values.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20039Items>} items
 */

InlineResponse20039Values.prototype['items'] = undefined;
var _default = InlineResponse20039Values;
exports["default"] = _default;