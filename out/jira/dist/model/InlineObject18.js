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
 * The InlineObject18 model module.
 * @module model/InlineObject18
 * @version 1.3.1
 */
var InlineObject18 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject18</code>.
   * @alias module:model/InlineObject18
   */
  function InlineObject18() {
    _classCallCheck(this, InlineObject18);

    InlineObject18.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject18, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject18</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject18} obj Optional instance to populate.
     * @return {module:model/InlineObject18} The populated <code>InlineObject18</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject18();

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], Object);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject18;
}();
/**
 * Bulk operation filter details.
 * @member {Object} filter
 */


InlineObject18.prototype['filter'] = undefined;
/**
 * The value of the property. The value must be a valid, non-empty JSON blob. The maximum length is 32768 characters.
 * @member {Object} value
 */

InlineObject18.prototype['value'] = undefined;
var _default = InlineObject18;
exports["default"] = _default;