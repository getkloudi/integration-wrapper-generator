"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20050InwardIssueFieldsIssuetype = _interopRequireDefault(require("./InlineResponse20050InwardIssueFieldsIssuetype"));

var _InlineResponse20050InwardIssueFieldsPriority = _interopRequireDefault(require("./InlineResponse20050InwardIssueFieldsPriority"));

var _InlineResponse20050InwardIssueFieldsStatus = _interopRequireDefault(require("./InlineResponse20050InwardIssueFieldsStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050InwardIssueFields model module.
 * @module model/InlineResponse20050InwardIssueFields
 * @version 1.3.1
 */
var InlineResponse20050InwardIssueFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050InwardIssueFields</code>.
   * @alias module:model/InlineResponse20050InwardIssueFields
   * @param issuetype {module:model/InlineResponse20050InwardIssueFieldsIssuetype} 
   * @param priority {module:model/InlineResponse20050InwardIssueFieldsPriority} 
   * @param status {module:model/InlineResponse20050InwardIssueFieldsStatus} 
   */
  function InlineResponse20050InwardIssueFields(issuetype, priority, status) {
    _classCallCheck(this, InlineResponse20050InwardIssueFields);

    InlineResponse20050InwardIssueFields.initialize(this, issuetype, priority, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050InwardIssueFields, null, [{
    key: "initialize",
    value: function initialize(obj, issuetype, priority, status) {
      obj['issuetype'] = issuetype;
      obj['priority'] = priority;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>InlineResponse20050InwardIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFields} The populated <code>InlineResponse20050InwardIssueFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050InwardIssueFields();

        if (data.hasOwnProperty('issuetype')) {
          obj['issuetype'] = _InlineResponse20050InwardIssueFieldsIssuetype["default"].constructFromObject(data['issuetype']);
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _InlineResponse20050InwardIssueFieldsPriority["default"].constructFromObject(data['priority']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _InlineResponse20050InwardIssueFieldsStatus["default"].constructFromObject(data['status']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050InwardIssueFields;
}();
/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsIssuetype} issuetype
 */


InlineResponse20050InwardIssueFields.prototype['issuetype'] = undefined;
/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsPriority} priority
 */

InlineResponse20050InwardIssueFields.prototype['priority'] = undefined;
/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsStatus} status
 */

InlineResponse20050InwardIssueFields.prototype['status'] = undefined;
var _default = InlineResponse20050InwardIssueFields;
exports["default"] = _default;