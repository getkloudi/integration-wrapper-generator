"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueFieldOptionConfiguration = _interopRequireDefault(require("./IssueFieldOptionConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueFieldOptionCreateBean model module.
 * @module model/IssueFieldOptionCreateBean
 * @version 1.4.0
 */
var IssueFieldOptionCreateBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueFieldOptionCreateBean</code>.
   * @alias module:model/IssueFieldOptionCreateBean
   * @param value {String} The option's name, which is displayed in Jira.
   */
  function IssueFieldOptionCreateBean(value) {
    _classCallCheck(this, IssueFieldOptionCreateBean);

    IssueFieldOptionCreateBean.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueFieldOptionCreateBean, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>IssueFieldOptionCreateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFieldOptionCreateBean} obj Optional instance to populate.
     * @return {module:model/IssueFieldOptionCreateBean} The populated <code>IssueFieldOptionCreateBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueFieldOptionCreateBean();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _IssueFieldOptionConfiguration["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueFieldOptionCreateBean;
}();
/**
 * @member {module:model/IssueFieldOptionConfiguration} config
 */


IssueFieldOptionCreateBean.prototype['config'] = undefined;
/**
 * The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
 * @member {Object.<String, Object>} properties
 */

IssueFieldOptionCreateBean.prototype['properties'] = undefined;
/**
 * The option's name, which is displayed in Jira.
 * @member {String} value
 */

IssueFieldOptionCreateBean.prototype['value'] = undefined;
var _default = IssueFieldOptionCreateBean;
exports["default"] = _default;