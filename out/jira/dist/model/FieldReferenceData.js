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
 * The FieldReferenceData model module.
 * @module model/FieldReferenceData
 * @version 1.4.0
 */
var FieldReferenceData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldReferenceData</code>.
   * Details of a field that can be used in advanced searches.
   * @alias module:model/FieldReferenceData
   */
  function FieldReferenceData() {
    _classCallCheck(this, FieldReferenceData);

    FieldReferenceData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldReferenceData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FieldReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldReferenceData} obj Optional instance to populate.
     * @return {module:model/FieldReferenceData} The populated <code>FieldReferenceData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldReferenceData();

        if (data.hasOwnProperty('auto')) {
          obj['auto'] = _ApiClient["default"].convertToType(data['auto'], 'String');
        }

        if (data.hasOwnProperty('cfid')) {
          obj['cfid'] = _ApiClient["default"].convertToType(data['cfid'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('operators')) {
          obj['operators'] = _ApiClient["default"].convertToType(data['operators'], ['String']);
        }

        if (data.hasOwnProperty('orderable')) {
          obj['orderable'] = _ApiClient["default"].convertToType(data['orderable'], 'String');
        }

        if (data.hasOwnProperty('searchable')) {
          obj['searchable'] = _ApiClient["default"].convertToType(data['searchable'], 'String');
        }

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], ['String']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldReferenceData;
}();
/**
 * Whether the field provide auto-complete suggestions.
 * @member {module:model/FieldReferenceData.AutoEnum} auto
 */


FieldReferenceData.prototype['auto'] = undefined;
/**
 * If the item is a custom field, the ID of the custom field.
 * @member {String} cfid
 */

FieldReferenceData.prototype['cfid'] = undefined;
/**
 * The display name of the field.
 * @member {String} displayName
 */

FieldReferenceData.prototype['displayName'] = undefined;
/**
 * The valid search operators for the field.
 * @member {Array.<String>} operators
 */

FieldReferenceData.prototype['operators'] = undefined;
/**
 * Whether the field can be used in a query's `ORDER BY` clause.
 * @member {module:model/FieldReferenceData.OrderableEnum} orderable
 */

FieldReferenceData.prototype['orderable'] = undefined;
/**
 * Whether the content of this field can be searched.
 * @member {module:model/FieldReferenceData.SearchableEnum} searchable
 */

FieldReferenceData.prototype['searchable'] = undefined;
/**
 * The data types of items in the field.
 * @member {Array.<String>} types
 */

FieldReferenceData.prototype['types'] = undefined;
/**
 * The field identifier.
 * @member {String} value
 */

FieldReferenceData.prototype['value'] = undefined;
/**
 * Allowed values for the <code>auto</code> property.
 * @enum {String}
 * @readonly
 */

FieldReferenceData['AutoEnum'] = {
  /**
   * value: "true"
   * @const
   */
  "true": "true",

  /**
   * value: "false"
   * @const
   */
  "false": "false"
};
/**
 * Allowed values for the <code>orderable</code> property.
 * @enum {String}
 * @readonly
 */

FieldReferenceData['OrderableEnum'] = {
  /**
   * value: "true"
   * @const
   */
  "true": "true",

  /**
   * value: "false"
   * @const
   */
  "false": "false"
};
/**
 * Allowed values for the <code>searchable</code> property.
 * @enum {String}
 * @readonly
 */

FieldReferenceData['SearchableEnum'] = {
  /**
   * value: "true"
   * @const
   */
  "true": "true",

  /**
   * value: "false"
   * @const
   */
  "false": "false"
};
var _default = FieldReferenceData;
exports["default"] = _default;