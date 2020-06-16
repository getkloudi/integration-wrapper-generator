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
 * The SearchRequestBean model module.
 * @module model/SearchRequestBean
 * @version 1.4.0
 */
var SearchRequestBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRequestBean</code>.
   * @alias module:model/SearchRequestBean
   */
  function SearchRequestBean() {
    _classCallCheck(this, SearchRequestBean);

    SearchRequestBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchRequestBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRequestBean} obj Optional instance to populate.
     * @return {module:model/SearchRequestBean} The populated <code>SearchRequestBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRequestBean();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], ['String']);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], ['String']);
        }

        if (data.hasOwnProperty('fieldsByKeys')) {
          obj['fieldsByKeys'] = _ApiClient["default"].convertToType(data['fieldsByKeys'], 'Boolean');
        }

        if (data.hasOwnProperty('jql')) {
          obj['jql'] = _ApiClient["default"].convertToType(data['jql'], 'String');
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], ['String']);
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('validateQuery')) {
          obj['validateQuery'] = _ApiClient["default"].convertToType(data['validateQuery'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SearchRequestBean;
}();
/**
 * Use [expand](em>#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
 * @member {Array.<String>} expand
 */


SearchRequestBean.prototype['expand'] = undefined;
/**
 * A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  The default is `*navigable`.  Examples:   *  `summary,comment` Returns the summary and comments fields only.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
 * @member {Array.<String>} fields
 */

SearchRequestBean.prototype['fields'] = undefined;
/**
 * Reference fields by their key (rather than ID). The default is `false`.
 * @member {Boolean} fieldsByKeys
 */

SearchRequestBean.prototype['fieldsByKeys'] = undefined;
/**
 * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.
 * @member {String} jql
 */

SearchRequestBean.prototype['jql'] = undefined;
/**
 * The maximum number of items to return per page.
 * @member {Number} maxResults
 * @default 50
 */

SearchRequestBean.prototype['maxResults'] = 50;
/**
 * A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.
 * @member {Array.<String>} properties
 */

SearchRequestBean.prototype['properties'] = undefined;
/**
 * The index of the first item to return in the page of results (page offset). The base index is `0`.
 * @member {Number} startAt
 */

SearchRequestBean.prototype['startAt'] = undefined;
/**
 * Determines how to validate the JQL query and treat the validation results. Supported values:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  The default is `strict`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.
 * @member {module:model/SearchRequestBean.ValidateQueryEnum} validateQuery
 */

SearchRequestBean.prototype['validateQuery'] = undefined;
/**
 * Allowed values for the <code>validateQuery</code> property.
 * @enum {String}
 * @readonly
 */

SearchRequestBean['ValidateQueryEnum'] = {
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
  "none": "none",

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
var _default = SearchRequestBean;
exports["default"] = _default;