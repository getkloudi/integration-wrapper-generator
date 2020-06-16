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
 * The VersionUsageInCustomField model module.
 * @module model/VersionUsageInCustomField
 * @version 1.4.0
 */
var VersionUsageInCustomField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionUsageInCustomField</code>.
   * List of custom fields using the version.
   * @alias module:model/VersionUsageInCustomField
   */
  function VersionUsageInCustomField() {
    _classCallCheck(this, VersionUsageInCustomField);

    VersionUsageInCustomField.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionUsageInCustomField, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionUsageInCustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionUsageInCustomField} obj Optional instance to populate.
     * @return {module:model/VersionUsageInCustomField} The populated <code>VersionUsageInCustomField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionUsageInCustomField();

        if (data.hasOwnProperty('customFieldId')) {
          obj['customFieldId'] = _ApiClient["default"].convertToType(data['customFieldId'], 'Number');
        }

        if (data.hasOwnProperty('fieldName')) {
          obj['fieldName'] = _ApiClient["default"].convertToType(data['fieldName'], 'String');
        }

        if (data.hasOwnProperty('issueCountWithVersionInCustomField')) {
          obj['issueCountWithVersionInCustomField'] = _ApiClient["default"].convertToType(data['issueCountWithVersionInCustomField'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return VersionUsageInCustomField;
}();
/**
 * The ID of the custom field.
 * @member {Number} customFieldId
 */


VersionUsageInCustomField.prototype['customFieldId'] = undefined;
/**
 * The name of the custom field.
 * @member {String} fieldName
 */

VersionUsageInCustomField.prototype['fieldName'] = undefined;
/**
 * Count of the issues where the custom field contains the version.
 * @member {Number} issueCountWithVersionInCustomField
 */

VersionUsageInCustomField.prototype['issueCountWithVersionInCustomField'] = undefined;
var _default = VersionUsageInCustomField;
exports["default"] = _default;