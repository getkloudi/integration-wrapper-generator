"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RenamedCascadingOption = _interopRequireDefault(require("./RenamedCascadingOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RenamedOption model module.
 * @module model/RenamedOption
 * @version 1.4.0
 */
var RenamedOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RenamedOption</code>.
   * Details of a custom field option to rename.
   * @alias module:model/RenamedOption
   * @param newValue {String} The new value of the option.
   * @param value {String} The current option value.
   */
  function RenamedOption(newValue, value) {
    _classCallCheck(this, RenamedOption);

    RenamedOption.initialize(this, newValue, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RenamedOption, null, [{
    key: "initialize",
    value: function initialize(obj, newValue, value) {
      obj['newValue'] = newValue;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>RenamedOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenamedOption} obj Optional instance to populate.
     * @return {module:model/RenamedOption} The populated <code>RenamedOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RenamedOption();

        if (data.hasOwnProperty('cascadingOptions')) {
          obj['cascadingOptions'] = _ApiClient["default"].convertToType(data['cascadingOptions'], [_RenamedCascadingOption["default"]]);
        }

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

  return RenamedOption;
}();
/**
 * The new values for the cascading options of this option. Only used for Select List (cascading) fields.
 * @member {Array.<module:model/RenamedCascadingOption>} cascadingOptions
 */


RenamedOption.prototype['cascadingOptions'] = undefined;
/**
 * The new value of the option.
 * @member {String} newValue
 */

RenamedOption.prototype['newValue'] = undefined;
/**
 * The current option value.
 * @member {String} value
 */

RenamedOption.prototype['value'] = undefined;
var _default = RenamedOption;
exports["default"] = _default;