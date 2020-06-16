"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RenamedOption = _interopRequireDefault(require("./RenamedOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateCustomFieldOption model module.
 * @module model/UpdateCustomFieldOption
 * @version 1.4.0
 */
var UpdateCustomFieldOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCustomFieldOption</code>.
   * Details of the options to update for a custom field.
   * @alias module:model/UpdateCustomFieldOption
   */
  function UpdateCustomFieldOption() {
    _classCallCheck(this, UpdateCustomFieldOption);

    UpdateCustomFieldOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateCustomFieldOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateCustomFieldOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCustomFieldOption} obj Optional instance to populate.
     * @return {module:model/UpdateCustomFieldOption} The populated <code>UpdateCustomFieldOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCustomFieldOption();

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_RenamedOption["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UpdateCustomFieldOption;
}();
/**
 * Details of the options to update.
 * @member {Array.<module:model/RenamedOption>} options
 */


UpdateCustomFieldOption.prototype['options'] = undefined;
var _default = UpdateCustomFieldOption;
exports["default"] = _default;