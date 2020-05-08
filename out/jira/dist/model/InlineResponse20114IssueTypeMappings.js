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
 * The InlineResponse20114IssueTypeMappings model module.
 * @module model/InlineResponse20114IssueTypeMappings
 * @version 1.3.0
 */
var InlineResponse20114IssueTypeMappings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20114IssueTypeMappings</code>.
   * @alias module:model/InlineResponse20114IssueTypeMappings
   * @param _10000 {String} 
   * @param _10001 {String} 
   */
  function InlineResponse20114IssueTypeMappings(_10000, _10001) {
    _classCallCheck(this, InlineResponse20114IssueTypeMappings);

    InlineResponse20114IssueTypeMappings.initialize(this, _10000, _10001);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20114IssueTypeMappings, null, [{
    key: "initialize",
    value: function initialize(obj, _10000, _10001) {
      obj['10000'] = _10000;
      obj['10001'] = _10001;
    }
    /**
     * Constructs a <code>InlineResponse20114IssueTypeMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20114IssueTypeMappings} obj Optional instance to populate.
     * @return {module:model/InlineResponse20114IssueTypeMappings} The populated <code>InlineResponse20114IssueTypeMappings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20114IssueTypeMappings();

        if (data.hasOwnProperty('10000')) {
          obj['10000'] = _ApiClient["default"].convertToType(data['10000'], 'String');
        }

        if (data.hasOwnProperty('10001')) {
          obj['10001'] = _ApiClient["default"].convertToType(data['10001'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20114IssueTypeMappings;
}();
/**
 * @member {String} 10000
 */


InlineResponse20114IssueTypeMappings.prototype['10000'] = undefined;
/**
 * @member {String} 10001
 */

InlineResponse20114IssueTypeMappings.prototype['10001'] = undefined;
var _default = InlineResponse20114IssueTypeMappings;
exports["default"] = _default;