"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeDetails = _interopRequireDefault(require("./IssueTypeDetails"));

var _Priority = _interopRequireDefault(require("./Priority"));

var _StatusDetails = _interopRequireDefault(require("./StatusDetails"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Fields model module.
 * @module model/Fields
 * @version 1.4.0
 */
var Fields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Fields</code>.
   * Key fields from the linked issue.
   * @alias module:model/Fields
   */
  function Fields() {
    _classCallCheck(this, Fields);

    Fields.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Fields, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Fields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fields} obj Optional instance to populate.
     * @return {module:model/Fields} The populated <code>Fields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Fields();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('issueType')) {
          obj['issueType'] = _ApiClient["default"].convertToType(data['issueType'], _IssueTypeDetails["default"]);
        }

        if (data.hasOwnProperty('issuetype')) {
          obj['issuetype'] = _IssueTypeDetails["default"].constructFromObject(data['issuetype']);
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], _Priority["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _StatusDetails["default"]);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Fields;
}();
/**
 * The assignee of the linked issue.
 * @member {module:model/UserDetails} assignee
 */


Fields.prototype['assignee'] = undefined;
/**
 * The type of the linked issue.
 * @member {module:model/IssueTypeDetails} issueType
 */

Fields.prototype['issueType'] = undefined;
/**
 * @member {module:model/IssueTypeDetails} issuetype
 */

Fields.prototype['issuetype'] = undefined;
/**
 * The priority of the linked issue.
 * @member {module:model/Priority} priority
 */

Fields.prototype['priority'] = undefined;
/**
 * The status of the linked issue.
 * @member {module:model/StatusDetails} status
 */

Fields.prototype['status'] = undefined;
/**
 * The summary description of the linked issue.
 * @member {String} summary
 */

Fields.prototype['summary'] = undefined;
var _default = Fields;
exports["default"] = _default;