"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeScheme = _interopRequireDefault(require("./IssueTypeScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueTypeSchemeProjects model module.
 * @module model/IssueTypeSchemeProjects
 * @version 1.4.0
 */
var IssueTypeSchemeProjects = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeSchemeProjects</code>.
   * Issue type scheme with a list of the projects that use it.
   * @alias module:model/IssueTypeSchemeProjects
   * @param projectIds {Array.<String>} The IDs of the projects using the issue type scheme.
   */
  function IssueTypeSchemeProjects(projectIds) {
    _classCallCheck(this, IssueTypeSchemeProjects);

    IssueTypeSchemeProjects.initialize(this, projectIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeSchemeProjects, null, [{
    key: "initialize",
    value: function initialize(obj, projectIds) {
      obj['projectIds'] = projectIds;
    }
    /**
     * Constructs a <code>IssueTypeSchemeProjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeSchemeProjects} obj Optional instance to populate.
     * @return {module:model/IssueTypeSchemeProjects} The populated <code>IssueTypeSchemeProjects</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeSchemeProjects();

        if (data.hasOwnProperty('issueTypeScheme')) {
          obj['issueTypeScheme'] = _ApiClient["default"].convertToType(data['issueTypeScheme'], _IssueTypeScheme["default"]);
        }

        if (data.hasOwnProperty('projectIds')) {
          obj['projectIds'] = _ApiClient["default"].convertToType(data['projectIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IssueTypeSchemeProjects;
}();
/**
 * Details of an issue type scheme.
 * @member {module:model/IssueTypeScheme} issueTypeScheme
 */


IssueTypeSchemeProjects.prototype['issueTypeScheme'] = undefined;
/**
 * The IDs of the projects using the issue type scheme.
 * @member {Array.<String>} projectIds
 */

IssueTypeSchemeProjects.prototype['projectIds'] = undefined;
var _default = IssueTypeSchemeProjects;
exports["default"] = _default;