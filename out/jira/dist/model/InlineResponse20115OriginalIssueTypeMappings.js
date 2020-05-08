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
 * The InlineResponse20115OriginalIssueTypeMappings model module.
 * @module model/InlineResponse20115OriginalIssueTypeMappings
 * @version 1.3.0
 */
var InlineResponse20115OriginalIssueTypeMappings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20115OriginalIssueTypeMappings</code>.
   * @alias module:model/InlineResponse20115OriginalIssueTypeMappings
   * @param _10001 {String} 
   */
  function InlineResponse20115OriginalIssueTypeMappings(_10001) {
    _classCallCheck(this, InlineResponse20115OriginalIssueTypeMappings);

    InlineResponse20115OriginalIssueTypeMappings.initialize(this, _10001);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20115OriginalIssueTypeMappings, null, [{
    key: "initialize",
    value: function initialize(obj, _10001) {
      obj['10001'] = _10001;
    }
    /**
     * Constructs a <code>InlineResponse20115OriginalIssueTypeMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20115OriginalIssueTypeMappings} obj Optional instance to populate.
     * @return {module:model/InlineResponse20115OriginalIssueTypeMappings} The populated <code>InlineResponse20115OriginalIssueTypeMappings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20115OriginalIssueTypeMappings();

        if (data.hasOwnProperty('10001')) {
          obj['10001'] = _ApiClient["default"].convertToType(data['10001'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20115OriginalIssueTypeMappings;
}();
/**
 * @member {String} 10001
 */


InlineResponse20115OriginalIssueTypeMappings.prototype['10001'] = undefined;
var _default = InlineResponse20115OriginalIssueTypeMappings;
exports["default"] = _default;