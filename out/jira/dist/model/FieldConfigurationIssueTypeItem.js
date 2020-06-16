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
 * The FieldConfigurationIssueTypeItem model module.
 * @module model/FieldConfigurationIssueTypeItem
 * @version 1.4.0
 */
var FieldConfigurationIssueTypeItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfigurationIssueTypeItem</code>.
   * The field configuration for an issue type.
   * @alias module:model/FieldConfigurationIssueTypeItem
   * @param fieldConfigurationId {String} The ID of the field configuration.
   * @param fieldConfigurationSchemeId {String} The ID of the field configuration scheme.
   * @param issueTypeId {String} The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.
   */
  function FieldConfigurationIssueTypeItem(fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId) {
    _classCallCheck(this, FieldConfigurationIssueTypeItem);

    FieldConfigurationIssueTypeItem.initialize(this, fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfigurationIssueTypeItem, null, [{
    key: "initialize",
    value: function initialize(obj, fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId) {
      obj['fieldConfigurationId'] = fieldConfigurationId;
      obj['fieldConfigurationSchemeId'] = fieldConfigurationSchemeId;
      obj['issueTypeId'] = issueTypeId;
    }
    /**
     * Constructs a <code>FieldConfigurationIssueTypeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationIssueTypeItem} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationIssueTypeItem} The populated <code>FieldConfigurationIssueTypeItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfigurationIssueTypeItem();

        if (data.hasOwnProperty('fieldConfigurationId')) {
          obj['fieldConfigurationId'] = _ApiClient["default"].convertToType(data['fieldConfigurationId'], 'String');
        }

        if (data.hasOwnProperty('fieldConfigurationSchemeId')) {
          obj['fieldConfigurationSchemeId'] = _ApiClient["default"].convertToType(data['fieldConfigurationSchemeId'], 'String');
        }

        if (data.hasOwnProperty('issueTypeId')) {
          obj['issueTypeId'] = _ApiClient["default"].convertToType(data['issueTypeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldConfigurationIssueTypeItem;
}();
/**
 * The ID of the field configuration.
 * @member {String} fieldConfigurationId
 */


FieldConfigurationIssueTypeItem.prototype['fieldConfigurationId'] = undefined;
/**
 * The ID of the field configuration scheme.
 * @member {String} fieldConfigurationSchemeId
 */

FieldConfigurationIssueTypeItem.prototype['fieldConfigurationSchemeId'] = undefined;
/**
 * The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.
 * @member {String} issueTypeId
 */

FieldConfigurationIssueTypeItem.prototype['issueTypeId'] = undefined;
var _default = FieldConfigurationIssueTypeItem;
exports["default"] = _default;