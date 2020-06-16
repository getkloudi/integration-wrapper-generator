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
 * The IssueTypeSchemeProjectAssociation model module.
 * @module model/IssueTypeSchemeProjectAssociation
 * @version 1.4.0
 */
var IssueTypeSchemeProjectAssociation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeSchemeProjectAssociation</code>.
   * Details of the association between an issue type scheme and project.
   * @alias module:model/IssueTypeSchemeProjectAssociation
   * @param issueTypeSchemeId {String} The ID of the issue type scheme.
   * @param projectId {String} The ID of the project.
   */
  function IssueTypeSchemeProjectAssociation(issueTypeSchemeId, projectId) {
    _classCallCheck(this, IssueTypeSchemeProjectAssociation);

    IssueTypeSchemeProjectAssociation.initialize(this, issueTypeSchemeId, projectId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeSchemeProjectAssociation, null, [{
    key: "initialize",
    value: function initialize(obj, issueTypeSchemeId, projectId) {
      obj['issueTypeSchemeId'] = issueTypeSchemeId;
      obj['projectId'] = projectId;
    }
    /**
     * Constructs a <code>IssueTypeSchemeProjectAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeSchemeProjectAssociation} obj Optional instance to populate.
     * @return {module:model/IssueTypeSchemeProjectAssociation} The populated <code>IssueTypeSchemeProjectAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeSchemeProjectAssociation();

        if (data.hasOwnProperty('issueTypeSchemeId')) {
          obj['issueTypeSchemeId'] = _ApiClient["default"].convertToType(data['issueTypeSchemeId'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeSchemeProjectAssociation;
}();
/**
 * The ID of the issue type scheme.
 * @member {String} issueTypeSchemeId
 */


IssueTypeSchemeProjectAssociation.prototype['issueTypeSchemeId'] = undefined;
/**
 * The ID of the project.
 * @member {String} projectId
 */

IssueTypeSchemeProjectAssociation.prototype['projectId'] = undefined;
var _default = IssueTypeSchemeProjectAssociation;
exports["default"] = _default;