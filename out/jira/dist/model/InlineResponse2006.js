"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2006Entries = _interopRequireDefault(require("./InlineResponse2006Entries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 1.3.1
 */
var InlineResponse2006 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * 
   * @alias module:model/InlineResponse2006
   * @param entries {Array.<module:model/InlineResponse2006Entries>} 
   * @param totalEntryCount {Number} 
   */
  function InlineResponse2006(entries, totalEntryCount) {
    _classCallCheck(this, InlineResponse2006);

    InlineResponse2006.initialize(this, entries, totalEntryCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2006, null, [{
    key: "initialize",
    value: function initialize(obj, entries, totalEntryCount) {
      obj['entries'] = entries;
      obj['totalEntryCount'] = totalEntryCount;
    }
    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006();

        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_InlineResponse2006Entries["default"]]);
        }

        if (data.hasOwnProperty('totalEntryCount')) {
          obj['totalEntryCount'] = _ApiClient["default"].convertToType(data['totalEntryCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2006;
}();
/**
 * @member {Array.<module:model/InlineResponse2006Entries>} entries
 */


InlineResponse2006.prototype['entries'] = undefined;
/**
 * @member {Number} totalEntryCount
 */

InlineResponse2006.prototype['totalEntryCount'] = undefined;
var _default = InlineResponse2006;
exports["default"] = _default;