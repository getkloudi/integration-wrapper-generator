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
 * The IssuesJqlMetaDataBean model module.
 * @module model/IssuesJqlMetaDataBean
 * @version 1.4.0
 */
var IssuesJqlMetaDataBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssuesJqlMetaDataBean</code>.
   * The description of the page of issues loaded by the provided JQL query.
   * @alias module:model/IssuesJqlMetaDataBean
   * @param count {Number} The number of issues that were loaded in this evaluation.
   * @param maxResults {Number} The maximum number of issues that could be loaded in this evaluation.
   * @param startAt {Number} The index of the first issue.
   * @param totalCount {Number} The total number of issues the JQL returned.
   */
  function IssuesJqlMetaDataBean(count, maxResults, startAt, totalCount) {
    _classCallCheck(this, IssuesJqlMetaDataBean);

    IssuesJqlMetaDataBean.initialize(this, count, maxResults, startAt, totalCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssuesJqlMetaDataBean, null, [{
    key: "initialize",
    value: function initialize(obj, count, maxResults, startAt, totalCount) {
      obj['count'] = count;
      obj['maxResults'] = maxResults;
      obj['startAt'] = startAt;
      obj['totalCount'] = totalCount;
    }
    /**
     * Constructs a <code>IssuesJqlMetaDataBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesJqlMetaDataBean} obj Optional instance to populate.
     * @return {module:model/IssuesJqlMetaDataBean} The populated <code>IssuesJqlMetaDataBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuesJqlMetaDataBean();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('totalCount')) {
          obj['totalCount'] = _ApiClient["default"].convertToType(data['totalCount'], 'Number');
        }

        if (data.hasOwnProperty('validationWarnings')) {
          obj['validationWarnings'] = _ApiClient["default"].convertToType(data['validationWarnings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IssuesJqlMetaDataBean;
}();
/**
 * The number of issues that were loaded in this evaluation.
 * @member {Number} count
 */


IssuesJqlMetaDataBean.prototype['count'] = undefined;
/**
 * The maximum number of issues that could be loaded in this evaluation.
 * @member {Number} maxResults
 */

IssuesJqlMetaDataBean.prototype['maxResults'] = undefined;
/**
 * The index of the first issue.
 * @member {Number} startAt
 */

IssuesJqlMetaDataBean.prototype['startAt'] = undefined;
/**
 * The total number of issues the JQL returned.
 * @member {Number} totalCount
 */

IssuesJqlMetaDataBean.prototype['totalCount'] = undefined;
/**
 * Any warnings related to the JQL query. Present only if the validation mode was set to `warn`.
 * @member {Array.<String>} validationWarnings
 */

IssuesJqlMetaDataBean.prototype['validationWarnings'] = undefined;
var _default = IssuesJqlMetaDataBean;
exports["default"] = _default;