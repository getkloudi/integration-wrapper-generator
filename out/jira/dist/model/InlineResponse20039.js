"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20039Values = _interopRequireDefault(require("./InlineResponse20039Values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20039 model module.
 * @module model/InlineResponse20039
 * @version 1.1.0
 */
var InlineResponse20039 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20039</code>.
   * 
   * @alias module:model/InlineResponse20039
   * @param isLast {Boolean} 
   * @param maxResults {Number} 
   * @param nextPage {String} 
   * @param self {String} 
   * @param startAt {Number} 
   * @param total {Number} 
   * @param values {Array.<module:model/InlineResponse20039Values>} 
   */
  function InlineResponse20039(isLast, maxResults, nextPage, self, startAt, total, values) {
    _classCallCheck(this, InlineResponse20039);

    InlineResponse20039.initialize(this, isLast, maxResults, nextPage, self, startAt, total, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20039, null, [{
    key: "initialize",
    value: function initialize(obj, isLast, maxResults, nextPage, self, startAt, total, values) {
      obj['isLast'] = isLast;
      obj['maxResults'] = maxResults;
      obj['nextPage'] = nextPage;
      obj['self'] = self;
      obj['startAt'] = startAt;
      obj['total'] = total;
      obj['values'] = values;
    }
    /**
     * Constructs a <code>InlineResponse20039</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20039} obj Optional instance to populate.
     * @return {module:model/InlineResponse20039} The populated <code>InlineResponse20039</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20039();

        if (data.hasOwnProperty('isLast')) {
          obj['isLast'] = _ApiClient["default"].convertToType(data['isLast'], 'Boolean');
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('nextPage')) {
          obj['nextPage'] = _ApiClient["default"].convertToType(data['nextPage'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_InlineResponse20039Values["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20039;
}();
/**
 * @member {Boolean} isLast
 */


InlineResponse20039.prototype['isLast'] = undefined;
/**
 * @member {Number} maxResults
 */

InlineResponse20039.prototype['maxResults'] = undefined;
/**
 * @member {String} nextPage
 */

InlineResponse20039.prototype['nextPage'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20039.prototype['self'] = undefined;
/**
 * @member {Number} startAt
 */

InlineResponse20039.prototype['startAt'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20039.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20039Values>} values
 */

InlineResponse20039.prototype['values'] = undefined;
var _default = InlineResponse20039;
exports["default"] = _default;