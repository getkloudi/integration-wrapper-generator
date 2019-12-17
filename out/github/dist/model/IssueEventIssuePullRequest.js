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
 * The IssueEventIssuePullRequest model module.
 * @module model/IssueEventIssuePullRequest
 * @version 1.3.0
 */
var IssueEventIssuePullRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueEventIssuePullRequest</code>.
   * @alias module:model/IssueEventIssuePullRequest
   */
  function IssueEventIssuePullRequest() {
    _classCallCheck(this, IssueEventIssuePullRequest);

    IssueEventIssuePullRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventIssuePullRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEventIssuePullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssuePullRequest} obj Optional instance to populate.
     * @return {module:model/IssueEventIssuePullRequest} The populated <code>IssueEventIssuePullRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventIssuePullRequest();

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventIssuePullRequest;
}();
/**
 * @member {String} diff_url
 */


IssueEventIssuePullRequest.prototype['diff_url'] = undefined;
/**
 * @member {String} html_url
 */

IssueEventIssuePullRequest.prototype['html_url'] = undefined;
/**
 * @member {String} patch_url
 */

IssueEventIssuePullRequest.prototype['patch_url'] = undefined;
var _default = IssueEventIssuePullRequest;
exports["default"] = _default;