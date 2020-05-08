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
 * The InlineResponse2007ChangedValues model module.
 * @module model/InlineResponse2007ChangedValues
 * @version 1.0.0
 */
var InlineResponse2007ChangedValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007ChangedValues</code>.
   * @alias module:model/InlineResponse2007ChangedValues
   * @param changedFrom {String} 
   * @param changedTo {String} 
   * @param fieldName {String} 
   */
  function InlineResponse2007ChangedValues(changedFrom, changedTo, fieldName) {
    _classCallCheck(this, InlineResponse2007ChangedValues);

    InlineResponse2007ChangedValues.initialize(this, changedFrom, changedTo, fieldName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2007ChangedValues, null, [{
    key: "initialize",
    value: function initialize(obj, changedFrom, changedTo, fieldName) {
      obj['changedFrom'] = changedFrom;
      obj['changedTo'] = changedTo;
      obj['fieldName'] = fieldName;
    }
    /**
     * Constructs a <code>InlineResponse2007ChangedValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007ChangedValues} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007ChangedValues} The populated <code>InlineResponse2007ChangedValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007ChangedValues();

        if (data.hasOwnProperty('changedFrom')) {
          obj['changedFrom'] = _ApiClient["default"].convertToType(data['changedFrom'], 'String');
        }

        if (data.hasOwnProperty('changedTo')) {
          obj['changedTo'] = _ApiClient["default"].convertToType(data['changedTo'], 'String');
        }

        if (data.hasOwnProperty('fieldName')) {
          obj['fieldName'] = _ApiClient["default"].convertToType(data['fieldName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2007ChangedValues;
}();
/**
 * @member {String} changedFrom
 */


InlineResponse2007ChangedValues.prototype['changedFrom'] = undefined;
/**
 * @member {String} changedTo
 */

InlineResponse2007ChangedValues.prototype['changedTo'] = undefined;
/**
 * @member {String} fieldName
 */

InlineResponse2007ChangedValues.prototype['fieldName'] = undefined;
var _default = InlineResponse2007ChangedValues;
exports["default"] = _default;