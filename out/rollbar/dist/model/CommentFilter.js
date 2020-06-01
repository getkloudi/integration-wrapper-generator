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
 * The CommentFilter model module.
 * @module model/CommentFilter
 * @version 1.1.0
 */
var CommentFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommentFilter</code>.
   * @alias module:model/CommentFilter
   * @param type {String} Body of an item comment
   * @param operation {String} 
   * @param value {String} 
   */
  function CommentFilter(type, operation, value) {
    _classCallCheck(this, CommentFilter);

    CommentFilter.initialize(this, type, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, operation, value) {
      obj['type'] = type;
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>CommentFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentFilter} obj Optional instance to populate.
     * @return {module:model/CommentFilter} The populated <code>CommentFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentFilter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommentFilter;
}();
/**
 * Body of an item comment
 * @member {String} type
 * @default 'comment'
 */


CommentFilter.prototype['type'] = 'comment';
/**
 * @member {String} operation
 * @default 'within'
 */

CommentFilter.prototype['operation'] = 'within';
/**
 * @member {String} value
 */

CommentFilter.prototype['value'] = undefined;
var _default = CommentFilter;
exports["default"] = _default;