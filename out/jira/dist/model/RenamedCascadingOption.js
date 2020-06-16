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
 * The RenamedCascadingOption model module.
 * @module model/RenamedCascadingOption
 * @version 1.4.0
 */
var RenamedCascadingOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RenamedCascadingOption</code>.
   * Details of a custom field cascading option to rename.
   * @alias module:model/RenamedCascadingOption
   * @param newValue {String} The new value of the cascading option.
   * @param value {String} The value of the cascading option.
   */
  function RenamedCascadingOption(newValue, value) {
    _classCallCheck(this, RenamedCascadingOption);

    RenamedCascadingOption.initialize(this, newValue, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RenamedCascadingOption, null, [{
    key: "initialize",
    value: function initialize(obj, newValue, value) {
      obj['newValue'] = newValue;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>RenamedCascadingOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenamedCascadingOption} obj Optional instance to populate.
     * @return {module:model/RenamedCascadingOption} The populated <code>RenamedCascadingOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RenamedCascadingOption();

        if (data.hasOwnProperty('newValue')) {
          obj['newValue'] = _ApiClient["default"].convertToType(data['newValue'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RenamedCascadingOption;
}();
/**
 * The new value of the cascading option.
 * @member {String} newValue
 */


RenamedCascadingOption.prototype['newValue'] = undefined;
/**
 * The value of the cascading option.
 * @member {String} value
 */

RenamedCascadingOption.prototype['value'] = undefined;
var _default = RenamedCascadingOption;
exports["default"] = _default;