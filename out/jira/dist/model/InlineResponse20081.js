"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20081Errors = _interopRequireDefault(require("./InlineResponse20081Errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20081 model module.
 * @module model/InlineResponse20081
 * @version 1.2.0
 */
var InlineResponse20081 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20081</code>.
   * 
   * @alias module:model/InlineResponse20081
   * @param errorMessages {Array.<Object>} 
   * @param errors {module:model/InlineResponse20081Errors} 
   */
  function InlineResponse20081(errorMessages, errors) {
    _classCallCheck(this, InlineResponse20081);

    InlineResponse20081.initialize(this, errorMessages, errors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20081, null, [{
    key: "initialize",
    value: function initialize(obj, errorMessages, errors) {
      obj['errorMessages'] = errorMessages;
      obj['errors'] = errors;
    }
    /**
     * Constructs a <code>InlineResponse20081</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20081} obj Optional instance to populate.
     * @return {module:model/InlineResponse20081} The populated <code>InlineResponse20081</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20081();

        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], [Object]);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _InlineResponse20081Errors["default"].constructFromObject(data['errors']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20081;
}();
/**
 * @member {Array.<Object>} errorMessages
 */


InlineResponse20081.prototype['errorMessages'] = undefined;
/**
 * @member {module:model/InlineResponse20081Errors} errors
 */

InlineResponse20081.prototype['errors'] = undefined;
var _default = InlineResponse20081;
exports["default"] = _default;