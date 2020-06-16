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
 * The JexpJqlIssues model module.
 * @module model/JexpJqlIssues
 * @version 1.4.0
 */
var JexpJqlIssues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JexpJqlIssues</code>.
   * The JQL specifying the issues available in the evaluated Jira expression under the &#x60;issues&#x60; context variable. Not all issues returned by the JQL query are loaded, only those described by the &#x60;startAt&#x60; and &#x60;maxResults&#x60; properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect &#x60;meta.issues.jql.count&#x60; in the response.
   * @alias module:model/JexpJqlIssues
   */
  function JexpJqlIssues() {
    _classCallCheck(this, JexpJqlIssues);

    JexpJqlIssues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JexpJqlIssues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JexpJqlIssues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JexpJqlIssues} obj Optional instance to populate.
     * @return {module:model/JexpJqlIssues} The populated <code>JexpJqlIssues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JexpJqlIssues();

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('validation')) {
          obj['validation'] = _ApiClient["default"].convertToType(data['validation'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JexpJqlIssues;
}();
/**
 * The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
 * @member {Number} maxResults
 */


JexpJqlIssues.prototype['maxResults'] = undefined;
/**
 * The JQL query.
 * @member {String} query
 */

JexpJqlIssues.prototype['query'] = undefined;
/**
 * The index of the first issue to return from the JQL query.
 * @member {Number} startAt
 */

JexpJqlIssues.prototype['startAt'] = undefined;
/**
 * Determines how to validate the JQL query and treat the validation results.
 * @member {module:model/JexpJqlIssues.ValidationEnum} validation
 * @default 'strict'
 */

JexpJqlIssues.prototype['validation'] = 'strict';
/**
 * Allowed values for the <code>validation</code> property.
 * @enum {String}
 * @readonly
 */

JexpJqlIssues['ValidationEnum'] = {
  /**
   * value: "strict"
   * @const
   */
  "strict": "strict",

  /**
   * value: "warn"
   * @const
   */
  "warn": "warn",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
var _default = JexpJqlIssues;
exports["default"] = _default;