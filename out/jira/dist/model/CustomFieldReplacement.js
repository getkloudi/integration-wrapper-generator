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
 * The CustomFieldReplacement model module.
 * @module model/CustomFieldReplacement
 * @version 1.4.0
 */
var CustomFieldReplacement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldReplacement</code>.
   * Details about the replacement for a deleted version.
   * @alias module:model/CustomFieldReplacement
   */
  function CustomFieldReplacement() {
    _classCallCheck(this, CustomFieldReplacement);

    CustomFieldReplacement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldReplacement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldReplacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldReplacement} obj Optional instance to populate.
     * @return {module:model/CustomFieldReplacement} The populated <code>CustomFieldReplacement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldReplacement();

        if (data.hasOwnProperty('customFieldId')) {
          obj['customFieldId'] = _ApiClient["default"].convertToType(data['customFieldId'], 'Number');
        }

        if (data.hasOwnProperty('moveTo')) {
          obj['moveTo'] = _ApiClient["default"].convertToType(data['moveTo'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomFieldReplacement;
}();
/**
 * The ID of the custom field in which to replace the version number.
 * @member {Number} customFieldId
 */


CustomFieldReplacement.prototype['customFieldId'] = undefined;
/**
 * The version number to use as a replacement for the deleted version.
 * @member {Number} moveTo
 */

CustomFieldReplacement.prototype['moveTo'] = undefined;
var _default = CustomFieldReplacement;
exports["default"] = _default;