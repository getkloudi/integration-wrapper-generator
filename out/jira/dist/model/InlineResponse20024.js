"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20024Values = _interopRequireDefault(require("./InlineResponse20024Values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20024 model module.
 * @module model/InlineResponse20024
 * @version 1.3.1
 */
var InlineResponse20024 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20024</code>.
   * 
   * @alias module:model/InlineResponse20024
   * @param isLast {Boolean} 
   * @param maxResults {Number} 
   * @param nextPage {String} 
   * @param self {String} 
   * @param startAt {Number} 
   * @param total {Number} 
   * @param values {Array.<module:model/InlineResponse20024Values>} 
   */
  function InlineResponse20024(isLast, maxResults, nextPage, self, startAt, total, values) {
    _classCallCheck(this, InlineResponse20024);

    InlineResponse20024.initialize(this, isLast, maxResults, nextPage, self, startAt, total, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20024, null, [{
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
     * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20024();

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
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_InlineResponse20024Values["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20024;
}();
/**
 * @member {Boolean} isLast
 */


InlineResponse20024.prototype['isLast'] = undefined;
/**
 * @member {Number} maxResults
 */

InlineResponse20024.prototype['maxResults'] = undefined;
/**
 * @member {String} nextPage
 */

InlineResponse20024.prototype['nextPage'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20024.prototype['self'] = undefined;
/**
 * @member {Number} startAt
 */

InlineResponse20024.prototype['startAt'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20024.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20024Values>} values
 */

InlineResponse20024.prototype['values'] = undefined;
var _default = InlineResponse20024;
exports["default"] = _default;