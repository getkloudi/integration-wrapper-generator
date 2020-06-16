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
 * The CustomFieldOption model module.
 * @module model/CustomFieldOption
 * @version 1.4.0
 */
var CustomFieldOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldOption</code>.
   * Details of a custom option for a field.
   * @alias module:model/CustomFieldOption
   */
  function CustomFieldOption() {
    _classCallCheck(this, CustomFieldOption);

    CustomFieldOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldOption} obj Optional instance to populate.
     * @return {module:model/CustomFieldOption} The populated <code>CustomFieldOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldOption();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomFieldOption;
}();
/**
 * The URL of these custom field option details.
 * @member {String} self
 */


CustomFieldOption.prototype['self'] = undefined;
/**
 * The value of the custom field option.
 * @member {String} value
 */

CustomFieldOption.prototype['value'] = undefined;
var _default = CustomFieldOption;
exports["default"] = _default;