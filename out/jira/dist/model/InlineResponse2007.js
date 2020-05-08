"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2007Records = _interopRequireDefault(require("./InlineResponse2007Records"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 1.1.0
 */
var InlineResponse2007 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * 
   * @alias module:model/InlineResponse2007
   * @param limit {Number} 
   * @param offset {Number} 
   * @param records {Array.<module:model/InlineResponse2007Records>} 
   * @param total {Number} 
   */
  function InlineResponse2007(limit, offset, records, total) {
    _classCallCheck(this, InlineResponse2007);

    InlineResponse2007.initialize(this, limit, offset, records, total);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2007, null, [{
    key: "initialize",
    value: function initialize(obj, limit, offset, records, total) {
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['records'] = records;
      obj['total'] = total;
    }
    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('records')) {
          obj['records'] = _ApiClient["default"].convertToType(data['records'], [_InlineResponse2007Records["default"]]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2007;
}();
/**
 * @member {Number} limit
 */


InlineResponse2007.prototype['limit'] = undefined;
/**
 * @member {Number} offset
 */

InlineResponse2007.prototype['offset'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2007Records>} records
 */

InlineResponse2007.prototype['records'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse2007.prototype['total'] = undefined;
var _default = InlineResponse2007;
exports["default"] = _default;