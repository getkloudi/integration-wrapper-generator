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
 * The SearchSegment model module.
 * @module model/SearchSegment
 * @version 1.2.0
 */
var SearchSegment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchSegment</code>.
   * @alias module:model/SearchSegment
   */
  function SearchSegment() {
    _classCallCheck(this, SearchSegment);

    SearchSegment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchSegment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchSegment} obj Optional instance to populate.
     * @return {module:model/SearchSegment} The populated <code>SearchSegment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchSegment();

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('match')) {
          obj['match'] = _ApiClient["default"].convertToType(data['match'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SearchSegment;
}();
/**
 * @member {String} text
 */


SearchSegment.prototype['text'] = undefined;
/**
 * @member {Boolean} match
 */

SearchSegment.prototype['match'] = undefined;
var _default = SearchSegment;
exports["default"] = _default;