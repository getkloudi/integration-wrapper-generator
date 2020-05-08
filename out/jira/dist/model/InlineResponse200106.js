"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse200106Values = _interopRequireDefault(require("./InlineResponse200106Values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200106 model module.
 * @module model/InlineResponse200106
 * @version 1.0.0
 */
var InlineResponse200106 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200106</code>.
   * 
   * @alias module:model/InlineResponse200106
   * @param lastPage {Boolean} 
   * @param nextPage {String} 
   * @param self {String} 
   * @param since {Number} 
   * @param until {Number} 
   * @param values {Array.<module:model/InlineResponse200106Values>} 
   */
  function InlineResponse200106(lastPage, nextPage, self, since, until, values) {
    _classCallCheck(this, InlineResponse200106);

    InlineResponse200106.initialize(this, lastPage, nextPage, self, since, until, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200106, null, [{
    key: "initialize",
    value: function initialize(obj, lastPage, nextPage, self, since, until, values) {
      obj['lastPage'] = lastPage;
      obj['nextPage'] = nextPage;
      obj['self'] = self;
      obj['since'] = since;
      obj['until'] = until;
      obj['values'] = values;
    }
    /**
     * Constructs a <code>InlineResponse200106</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200106} obj Optional instance to populate.
     * @return {module:model/InlineResponse200106} The populated <code>InlineResponse200106</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200106();

        if (data.hasOwnProperty('lastPage')) {
          obj['lastPage'] = _ApiClient["default"].convertToType(data['lastPage'], 'Boolean');
        }

        if (data.hasOwnProperty('nextPage')) {
          obj['nextPage'] = _ApiClient["default"].convertToType(data['nextPage'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('since')) {
          obj['since'] = _ApiClient["default"].convertToType(data['since'], 'Number');
        }

        if (data.hasOwnProperty('until')) {
          obj['until'] = _ApiClient["default"].convertToType(data['until'], 'Number');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_InlineResponse200106Values["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200106;
}();
/**
 * @member {Boolean} lastPage
 */


InlineResponse200106.prototype['lastPage'] = undefined;
/**
 * @member {String} nextPage
 */

InlineResponse200106.prototype['nextPage'] = undefined;
/**
 * @member {String} self
 */

InlineResponse200106.prototype['self'] = undefined;
/**
 * @member {Number} since
 */

InlineResponse200106.prototype['since'] = undefined;
/**
 * @member {Number} until
 */

InlineResponse200106.prototype['until'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse200106Values>} values
 */

InlineResponse200106.prototype['values'] = undefined;
var _default = InlineResponse200106;
exports["default"] = _default;