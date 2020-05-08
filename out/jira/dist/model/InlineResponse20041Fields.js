"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20041FieldsSummary = _interopRequireDefault(require("./InlineResponse20041FieldsSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20041Fields model module.
 * @module model/InlineResponse20041Fields
 * @version 1.1.0
 */
var InlineResponse20041Fields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041Fields</code>.
   * @alias module:model/InlineResponse20041Fields
   * @param summary {module:model/InlineResponse20041FieldsSummary} 
   */
  function InlineResponse20041Fields(summary) {
    _classCallCheck(this, InlineResponse20041Fields);

    InlineResponse20041Fields.initialize(this, summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041Fields, null, [{
    key: "initialize",
    value: function initialize(obj, summary) {
      obj['summary'] = summary;
    }
    /**
     * Constructs a <code>InlineResponse20041Fields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041Fields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041Fields} The populated <code>InlineResponse20041Fields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041Fields();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _InlineResponse20041FieldsSummary["default"].constructFromObject(data['summary']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041Fields;
}();
/**
 * @member {module:model/InlineResponse20041FieldsSummary} summary
 */


InlineResponse20041Fields.prototype['summary'] = undefined;
var _default = InlineResponse20041Fields;
exports["default"] = _default;