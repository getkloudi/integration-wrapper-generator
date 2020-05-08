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
 * The InlineResponse20026Subscriptions model module.
 * @module model/InlineResponse20026Subscriptions
 * @version 1.2.0
 */
var InlineResponse20026Subscriptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20026Subscriptions</code>.
   * @alias module:model/InlineResponse20026Subscriptions
   * @param endIndex {Number} 
   * @param items {Array.<Object>} 
   * @param maxResults {Number} 
   * @param size {Number} 
   * @param startIndex {Number} 
   */
  function InlineResponse20026Subscriptions(endIndex, items, maxResults, size, startIndex) {
    _classCallCheck(this, InlineResponse20026Subscriptions);

    InlineResponse20026Subscriptions.initialize(this, endIndex, items, maxResults, size, startIndex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20026Subscriptions, null, [{
    key: "initialize",
    value: function initialize(obj, endIndex, items, maxResults, size, startIndex) {
      obj['end-index'] = endIndex;
      obj['items'] = items;
      obj['max-results'] = maxResults;
      obj['size'] = size;
      obj['start-index'] = startIndex;
    }
    /**
     * Constructs a <code>InlineResponse20026Subscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20026Subscriptions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20026Subscriptions} The populated <code>InlineResponse20026Subscriptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20026Subscriptions();

        if (data.hasOwnProperty('end-index')) {
          obj['end-index'] = _ApiClient["default"].convertToType(data['end-index'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [Object]);
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

  return InlineResponse20026Subscriptions;
}();
/**
 * @member {Number} end-index
 */


InlineResponse20026Subscriptions.prototype['end-index'] = undefined;
/**
 * @member {Array.<Object>} items
 */

InlineResponse20026Subscriptions.prototype['items'] = undefined;
/**
 * @member {Number} max-results
 */

InlineResponse20026Subscriptions.prototype['max-results'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse20026Subscriptions.prototype['size'] = undefined;
/**
 * @member {Number} start-index
 */

InlineResponse20026Subscriptions.prototype['start-index'] = undefined;
var _default = InlineResponse20026Subscriptions;
exports["default"] = _default;