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
 * The FunctionReferenceData model module.
 * @module model/FunctionReferenceData
 * @version 1.4.0
 */
var FunctionReferenceData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunctionReferenceData</code>.
   * Details of functions that can be used in advanced searches.
   * @alias module:model/FunctionReferenceData
   */
  function FunctionReferenceData() {
    _classCallCheck(this, FunctionReferenceData);

    FunctionReferenceData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FunctionReferenceData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FunctionReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionReferenceData} obj Optional instance to populate.
     * @return {module:model/FunctionReferenceData} The populated <code>FunctionReferenceData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunctionReferenceData();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('isList')) {
          obj['isList'] = _ApiClient["default"].convertToType(data['isList'], 'String');
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

  return FunctionReferenceData;
}();
/**
 * The display name of the function.
 * @member {String} displayName
 */


FunctionReferenceData.prototype['displayName'] = undefined;
/**
 * Whether the function can take a list of arguments.
 * @member {module:model/FunctionReferenceData.IsListEnum} isList
 */

FunctionReferenceData.prototype['isList'] = undefined;
/**
 * The data types returned by the function.
 * @member {Array.<String>} types
 */

FunctionReferenceData.prototype['types'] = undefined;
/**
 * The function identifier.
 * @member {String} value
 */

FunctionReferenceData.prototype['value'] = undefined;
/**
 * Allowed values for the <code>isList</code> property.
 * @enum {String}
 * @readonly
 */

FunctionReferenceData['IsListEnum'] = {
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
var _default = FunctionReferenceData;
exports["default"] = _default;