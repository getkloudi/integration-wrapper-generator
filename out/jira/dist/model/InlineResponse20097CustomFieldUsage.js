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
 * The InlineResponse20097CustomFieldUsage model module.
 * @module model/InlineResponse20097CustomFieldUsage
 * @version 1.2.0
 */
var InlineResponse20097CustomFieldUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20097CustomFieldUsage</code>.
   * @alias module:model/InlineResponse20097CustomFieldUsage
   * @param customFieldId {Number} 
   * @param fieldName {String} 
   * @param issueCountWithVersionInCustomField {Number} 
   */
  function InlineResponse20097CustomFieldUsage(customFieldId, fieldName, issueCountWithVersionInCustomField) {
    _classCallCheck(this, InlineResponse20097CustomFieldUsage);

    InlineResponse20097CustomFieldUsage.initialize(this, customFieldId, fieldName, issueCountWithVersionInCustomField);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20097CustomFieldUsage, null, [{
    key: "initialize",
    value: function initialize(obj, customFieldId, fieldName, issueCountWithVersionInCustomField) {
      obj['customFieldId'] = customFieldId;
      obj['fieldName'] = fieldName;
      obj['issueCountWithVersionInCustomField'] = issueCountWithVersionInCustomField;
    }
    /**
     * Constructs a <code>InlineResponse20097CustomFieldUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20097CustomFieldUsage} obj Optional instance to populate.
     * @return {module:model/InlineResponse20097CustomFieldUsage} The populated <code>InlineResponse20097CustomFieldUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20097CustomFieldUsage();

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

  return InlineResponse20097CustomFieldUsage;
}();
/**
 * @member {Number} customFieldId
 */


InlineResponse20097CustomFieldUsage.prototype['customFieldId'] = undefined;
/**
 * @member {String} fieldName
 */

InlineResponse20097CustomFieldUsage.prototype['fieldName'] = undefined;
/**
 * @member {Number} issueCountWithVersionInCustomField
 */

InlineResponse20097CustomFieldUsage.prototype['issueCountWithVersionInCustomField'] = undefined;
var _default = InlineResponse20097CustomFieldUsage;
exports["default"] = _default;