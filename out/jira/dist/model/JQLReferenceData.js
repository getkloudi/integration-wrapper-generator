"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldReferenceData = _interopRequireDefault(require("./FieldReferenceData"));

var _FunctionReferenceData = _interopRequireDefault(require("./FunctionReferenceData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JQLReferenceData model module.
 * @module model/JQLReferenceData
 * @version 1.4.0
 */
var JQLReferenceData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JQLReferenceData</code>.
   * Lists of JQL reference data.
   * @alias module:model/JQLReferenceData
   */
  function JQLReferenceData() {
    _classCallCheck(this, JQLReferenceData);

    JQLReferenceData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JQLReferenceData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JQLReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JQLReferenceData} obj Optional instance to populate.
     * @return {module:model/JQLReferenceData} The populated <code>JQLReferenceData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JQLReferenceData();

        if (data.hasOwnProperty('jqlReservedWords')) {
          obj['jqlReservedWords'] = _ApiClient["default"].convertToType(data['jqlReservedWords'], ['String']);
        }

        if (data.hasOwnProperty('visibleFieldNames')) {
          obj['visibleFieldNames'] = _ApiClient["default"].convertToType(data['visibleFieldNames'], [_FieldReferenceData["default"]]);
        }

        if (data.hasOwnProperty('visibleFunctionNames')) {
          obj['visibleFunctionNames'] = _ApiClient["default"].convertToType(data['visibleFunctionNames'], [_FunctionReferenceData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JQLReferenceData;
}();
/**
 * List of JQL query reserved words.
 * @member {Array.<String>} jqlReservedWords
 */


JQLReferenceData.prototype['jqlReservedWords'] = undefined;
/**
 * List of fields usable in JQL queries.
 * @member {Array.<module:model/FieldReferenceData>} visibleFieldNames
 */

JQLReferenceData.prototype['visibleFieldNames'] = undefined;
/**
 * List of functions usable in JQL queries.
 * @member {Array.<module:model/FunctionReferenceData>} visibleFunctionNames
 */

JQLReferenceData.prototype['visibleFunctionNames'] = undefined;
var _default = JQLReferenceData;
exports["default"] = _default;