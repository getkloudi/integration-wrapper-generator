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
 * The FieldLastUsed model module.
 * @module model/FieldLastUsed
 * @version 1.4.0
 */
var FieldLastUsed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldLastUsed</code>.
   * Information about the most recent use of a field.
   * @alias module:model/FieldLastUsed
   */
  function FieldLastUsed() {
    _classCallCheck(this, FieldLastUsed);

    FieldLastUsed.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldLastUsed, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FieldLastUsed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldLastUsed} obj Optional instance to populate.
     * @return {module:model/FieldLastUsed} The populated <code>FieldLastUsed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldLastUsed();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return FieldLastUsed;
}();
/**
 * Last used value type:   *  *TRACKED*: field is tracked and a last used date is available.  *  *NOT\\_TRACKED*: field is not tracked, last used date is not available.  *  *NO\\_INFORMATION*: field is tracked, but no last used date is available.
 * @member {module:model/FieldLastUsed.TypeEnum} type
 */


FieldLastUsed.prototype['type'] = undefined;
/**
 * The date when the value of the field last changed.
 * @member {Date} value
 */

FieldLastUsed.prototype['value'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

FieldLastUsed['TypeEnum'] = {
  /**
   * value: "TRACKED"
   * @const
   */
  "TRACKED": "TRACKED",

  /**
   * value: "NOT_TRACKED"
   * @const
   */
  "NOT_TRACKED": "NOT_TRACKED",

  /**
   * value: "NO_INFORMATION"
   * @const
   */
  "NO_INFORMATION": "NO_INFORMATION"
};
var _default = FieldLastUsed;
exports["default"] = _default;