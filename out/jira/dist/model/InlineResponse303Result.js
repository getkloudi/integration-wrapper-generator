"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse303ResultErrors = _interopRequireDefault(require("./InlineResponse303ResultErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse303Result model module.
 * @module model/InlineResponse303Result
 * @version 1.0.0
 */
var InlineResponse303Result = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse303Result</code>.
   * @alias module:model/InlineResponse303Result
   * @param errors {module:model/InlineResponse303ResultErrors} 
   * @param modifiedIssues {Array.<Object>} 
   * @param unmodifiedIssues {Array.<Object>} 
   */
  function InlineResponse303Result(errors, modifiedIssues, unmodifiedIssues) {
    _classCallCheck(this, InlineResponse303Result);

    InlineResponse303Result.initialize(this, errors, modifiedIssues, unmodifiedIssues);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse303Result, null, [{
    key: "initialize",
    value: function initialize(obj, errors, modifiedIssues, unmodifiedIssues) {
      obj['errors'] = errors;
      obj['modifiedIssues'] = modifiedIssues;
      obj['unmodifiedIssues'] = unmodifiedIssues;
    }
    /**
     * Constructs a <code>InlineResponse303Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse303Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse303Result} The populated <code>InlineResponse303Result</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse303Result();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _InlineResponse303ResultErrors["default"].constructFromObject(data['errors']);
        }

        if (data.hasOwnProperty('modifiedIssues')) {
          obj['modifiedIssues'] = _ApiClient["default"].convertToType(data['modifiedIssues'], [Object]);
        }

        if (data.hasOwnProperty('unmodifiedIssues')) {
          obj['unmodifiedIssues'] = _ApiClient["default"].convertToType(data['unmodifiedIssues'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse303Result;
}();
/**
 * @member {module:model/InlineResponse303ResultErrors} errors
 */


InlineResponse303Result.prototype['errors'] = undefined;
/**
 * @member {Array.<Object>} modifiedIssues
 */

InlineResponse303Result.prototype['modifiedIssues'] = undefined;
/**
 * @member {Array.<Object>} unmodifiedIssues
 */

InlineResponse303Result.prototype['unmodifiedIssues'] = undefined;
var _default = InlineResponse303Result;
exports["default"] = _default;