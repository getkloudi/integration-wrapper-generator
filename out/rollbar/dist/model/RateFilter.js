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
 * The RateFilter model module.
 * @module model/RateFilter
 * @version 1.1.0
 */
var RateFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateFilter</code>.
   * @alias module:model/RateFilter
   * @param type {String} Rate of occurrences of an item
   * @param period {Number} Number of seconds
   * @param count {Number} 
   */
  function RateFilter(type, period, count) {
    _classCallCheck(this, RateFilter);

    RateFilter.initialize(this, type, period, count);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, period, count) {
      obj['type'] = type;
      obj['period'] = period;
      obj['count'] = count;
    }
    /**
     * Constructs a <code>RateFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateFilter} obj Optional instance to populate.
     * @return {module:model/RateFilter} The populated <code>RateFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateFilter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RateFilter;
}();
/**
 * Rate of occurrences of an item
 * @member {String} type
 * @default 'rate'
 */


RateFilter.prototype['type'] = 'rate';
/**
 * Number of seconds
 * @member {Number} period
 */

RateFilter.prototype['period'] = undefined;
/**
 * @member {Number} count
 */

RateFilter.prototype['count'] = undefined;
var _default = RateFilter;
exports["default"] = _default;