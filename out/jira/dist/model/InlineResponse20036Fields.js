"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20036FieldsIssuetype = _interopRequireDefault(require("./InlineResponse20036FieldsIssuetype"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20036Fields model module.
 * @module model/InlineResponse20036Fields
 * @version 1.2.0
 */
var InlineResponse20036Fields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20036Fields</code>.
   * @alias module:model/InlineResponse20036Fields
   * @param issuetype {module:model/InlineResponse20036FieldsIssuetype} 
   */
  function InlineResponse20036Fields(issuetype) {
    _classCallCheck(this, InlineResponse20036Fields);

    InlineResponse20036Fields.initialize(this, issuetype);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20036Fields, null, [{
    key: "initialize",
    value: function initialize(obj, issuetype) {
      obj['issuetype'] = issuetype;
    }
    /**
     * Constructs a <code>InlineResponse20036Fields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036Fields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036Fields} The populated <code>InlineResponse20036Fields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20036Fields();

        if (data.hasOwnProperty('issuetype')) {
          obj['issuetype'] = _InlineResponse20036FieldsIssuetype["default"].constructFromObject(data['issuetype']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20036Fields;
}();
/**
 * @member {module:model/InlineResponse20036FieldsIssuetype} issuetype
 */


InlineResponse20036Fields.prototype['issuetype'] = undefined;
var _default = InlineResponse20036Fields;
exports["default"] = _default;