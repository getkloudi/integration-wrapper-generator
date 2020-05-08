"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2014Issues = _interopRequireDefault(require("./InlineResponse2014Issues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2014 model module.
 * @module model/InlineResponse2014
 * @version 1.1.0
 */
var InlineResponse2014 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2014</code>.
   * 
   * @alias module:model/InlineResponse2014
   * @param errors {Array.<Object>} 
   * @param issues {Array.<module:model/InlineResponse2014Issues>} 
   */
  function InlineResponse2014(errors, issues) {
    _classCallCheck(this, InlineResponse2014);

    InlineResponse2014.initialize(this, errors, issues);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2014, null, [{
    key: "initialize",
    value: function initialize(obj, errors, issues) {
      obj['errors'] = errors;
      obj['issues'] = issues;
    }
    /**
     * Constructs a <code>InlineResponse2014</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2014} obj Optional instance to populate.
     * @return {module:model/InlineResponse2014} The populated <code>InlineResponse2014</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2014();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [Object]);
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_InlineResponse2014Issues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2014;
}();
/**
 * @member {Array.<Object>} errors
 */


InlineResponse2014.prototype['errors'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2014Issues>} issues
 */

InlineResponse2014.prototype['issues'] = undefined;
var _default = InlineResponse2014;
exports["default"] = _default;