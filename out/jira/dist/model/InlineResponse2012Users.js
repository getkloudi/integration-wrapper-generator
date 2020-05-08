"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009Author = _interopRequireDefault(require("./InlineResponse2009Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2012Users model module.
 * @module model/InlineResponse2012Users
 * @version 1.0.0
 */
var InlineResponse2012Users = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2012Users</code>.
   * @alias module:model/InlineResponse2012Users
   * @param endIndex {Number} 
   * @param items {Array.<module:model/InlineResponse2009Author>} 
   * @param maxResults {Number} 
   * @param size {Number} 
   * @param startIndex {Number} 
   */
  function InlineResponse2012Users(endIndex, items, maxResults, size, startIndex) {
    _classCallCheck(this, InlineResponse2012Users);

    InlineResponse2012Users.initialize(this, endIndex, items, maxResults, size, startIndex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2012Users, null, [{
    key: "initialize",
    value: function initialize(obj, endIndex, items, maxResults, size, startIndex) {
      obj['end-index'] = endIndex;
      obj['items'] = items;
      obj['max-results'] = maxResults;
      obj['size'] = size;
      obj['start-index'] = startIndex;
    }
    /**
     * Constructs a <code>InlineResponse2012Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2012Users} obj Optional instance to populate.
     * @return {module:model/InlineResponse2012Users} The populated <code>InlineResponse2012Users</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2012Users();

        if (data.hasOwnProperty('end-index')) {
          obj['end-index'] = _ApiClient["default"].convertToType(data['end-index'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_InlineResponse2009Author["default"]]);
        }

        if (data.hasOwnProperty('max-results')) {
          obj['max-results'] = _ApiClient["default"].convertToType(data['max-results'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('start-index')) {
          obj['start-index'] = _ApiClient["default"].convertToType(data['start-index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2012Users;
}();
/**
 * @member {Number} end-index
 */


InlineResponse2012Users.prototype['end-index'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2009Author>} items
 */

InlineResponse2012Users.prototype['items'] = undefined;
/**
 * @member {Number} max-results
 */

InlineResponse2012Users.prototype['max-results'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse2012Users.prototype['size'] = undefined;
/**
 * @member {Number} start-index
 */

InlineResponse2012Users.prototype['start-index'] = undefined;
var _default = InlineResponse2012Users;
exports["default"] = _default;