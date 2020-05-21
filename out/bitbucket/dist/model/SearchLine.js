"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchSegment = _interopRequireDefault(require("./SearchSegment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchLine model module.
 * @module model/SearchLine
 * @version 1.2.0
 */
var SearchLine = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchLine</code>.
   * @alias module:model/SearchLine
   */
  function SearchLine() {
    _classCallCheck(this, SearchLine);

    SearchLine.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchLine, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchLine} obj Optional instance to populate.
     * @return {module:model/SearchLine} The populated <code>SearchLine</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchLine();

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], [_SearchSegment["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchLine;
}();
/**
 * @member {Number} line
 */


SearchLine.prototype['line'] = undefined;
/**
 * @member {Array.<module:model/SearchSegment>} segments
 */

SearchLine.prototype['segments'] = undefined;
var _default = SearchLine;
exports["default"] = _default;