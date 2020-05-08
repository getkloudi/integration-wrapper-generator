"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20037FieldsOutwardIssueFieldsStatus = _interopRequireDefault(require("./InlineResponse20037FieldsOutwardIssueFieldsStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20037FieldsOutwardIssueFields model module.
 * @module model/InlineResponse20037FieldsOutwardIssueFields
 * @version 1.3.1
 */
var InlineResponse20037FieldsOutwardIssueFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsOutwardIssueFields</code>.
   * @alias module:model/InlineResponse20037FieldsOutwardIssueFields
   * @param status {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} 
   */
  function InlineResponse20037FieldsOutwardIssueFields(status) {
    _classCallCheck(this, InlineResponse20037FieldsOutwardIssueFields);

    InlineResponse20037FieldsOutwardIssueFields.initialize(this, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsOutwardIssueFields, null, [{
    key: "initialize",
    value: function initialize(obj, status) {
      obj['status'] = status;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsOutwardIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsOutwardIssueFields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsOutwardIssueFields} The populated <code>InlineResponse20037FieldsOutwardIssueFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsOutwardIssueFields();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _InlineResponse20037FieldsOutwardIssueFieldsStatus["default"].constructFromObject(data['status']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037FieldsOutwardIssueFields;
}();
/**
 * @member {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} status
 */


InlineResponse20037FieldsOutwardIssueFields.prototype['status'] = undefined;
var _default = InlineResponse20037FieldsOutwardIssueFields;
exports["default"] = _default;