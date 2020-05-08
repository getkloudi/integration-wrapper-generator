"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20045To = _interopRequireDefault(require("./InlineResponse20045To"));

var _InlineResponse20050InwardIssueFieldsPriority = _interopRequireDefault(require("./InlineResponse20050InwardIssueFieldsPriority"));

var _InlineResponse20050OutwardIssueFieldsIssuetype = _interopRequireDefault(require("./InlineResponse20050OutwardIssueFieldsIssuetype"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050OutwardIssueFields model module.
 * @module model/InlineResponse20050OutwardIssueFields
 * @version 1.0.0
 */
var InlineResponse20050OutwardIssueFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050OutwardIssueFields</code>.
   * @alias module:model/InlineResponse20050OutwardIssueFields
   * @param issuetype {module:model/InlineResponse20050OutwardIssueFieldsIssuetype} 
   * @param priority {module:model/InlineResponse20050InwardIssueFieldsPriority} 
   * @param status {module:model/InlineResponse20045To} 
   */
  function InlineResponse20050OutwardIssueFields(issuetype, priority, status) {
    _classCallCheck(this, InlineResponse20050OutwardIssueFields);

    InlineResponse20050OutwardIssueFields.initialize(this, issuetype, priority, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050OutwardIssueFields, null, [{
    key: "initialize",
    value: function initialize(obj, issuetype, priority, status) {
      obj['issuetype'] = issuetype;
      obj['priority'] = priority;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>InlineResponse20050OutwardIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050OutwardIssueFields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050OutwardIssueFields} The populated <code>InlineResponse20050OutwardIssueFields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050OutwardIssueFields();

        if (data.hasOwnProperty('issuetype')) {
          obj['issuetype'] = _InlineResponse20050OutwardIssueFieldsIssuetype["default"].constructFromObject(data['issuetype']);
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _InlineResponse20050InwardIssueFieldsPriority["default"].constructFromObject(data['priority']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _InlineResponse20045To["default"].constructFromObject(data['status']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050OutwardIssueFields;
}();
/**
 * @member {module:model/InlineResponse20050OutwardIssueFieldsIssuetype} issuetype
 */


InlineResponse20050OutwardIssueFields.prototype['issuetype'] = undefined;
/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsPriority} priority
 */

InlineResponse20050OutwardIssueFields.prototype['priority'] = undefined;
/**
 * @member {module:model/InlineResponse20045To} status
 */

InlineResponse20050OutwardIssueFields.prototype['status'] = undefined;
var _default = InlineResponse20050OutwardIssueFields;
exports["default"] = _default;