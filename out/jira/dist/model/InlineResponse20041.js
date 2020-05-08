"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20041Fields = _interopRequireDefault(require("./InlineResponse20041Fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20041 model module.
 * @module model/InlineResponse20041
 * @version 1.1.0
 */
var InlineResponse20041 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041</code>.
   * 
   * @alias module:model/InlineResponse20041
   * @param fields {module:model/InlineResponse20041Fields} 
   */
  function InlineResponse20041(fields) {
    _classCallCheck(this, InlineResponse20041);

    InlineResponse20041.initialize(this, fields);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041, null, [{
    key: "initialize",
    value: function initialize(obj, fields) {
      obj['fields'] = fields;
    }
    /**
     * Constructs a <code>InlineResponse20041</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041} The populated <code>InlineResponse20041</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _InlineResponse20041Fields["default"].constructFromObject(data['fields']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041;
}();
/**
 * @member {module:model/InlineResponse20041Fields} fields
 */


InlineResponse20041.prototype['fields'] = undefined;
var _default = InlineResponse20041;
exports["default"] = _default;