"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeScreenScheme = _interopRequireDefault(require("./IssueTypeScreenScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueTypeScreenSchemesProjects model module.
 * @module model/IssueTypeScreenSchemesProjects
 * @version 1.4.0
 */
var IssueTypeScreenSchemesProjects = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeScreenSchemesProjects</code>.
   * Issue type screen scheme with a list of the projects that use it.
   * @alias module:model/IssueTypeScreenSchemesProjects
   * @param projectIds {Array.<String>} The IDs of the projects using the issue type screen scheme.
   */
  function IssueTypeScreenSchemesProjects(projectIds) {
    _classCallCheck(this, IssueTypeScreenSchemesProjects);

    IssueTypeScreenSchemesProjects.initialize(this, projectIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeScreenSchemesProjects, null, [{
    key: "initialize",
    value: function initialize(obj, projectIds) {
      obj['projectIds'] = projectIds;
    }
    /**
     * Constructs a <code>IssueTypeScreenSchemesProjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemesProjects} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemesProjects} The populated <code>IssueTypeScreenSchemesProjects</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeScreenSchemesProjects();

        if (data.hasOwnProperty('issueTypeScreenScheme')) {
          obj['issueTypeScreenScheme'] = _ApiClient["default"].convertToType(data['issueTypeScreenScheme'], _IssueTypeScreenScheme["default"]);
        }

        if (data.hasOwnProperty('projectIds')) {
          obj['projectIds'] = _ApiClient["default"].convertToType(data['projectIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IssueTypeScreenSchemesProjects;
}();
/**
 * Details of an issue type screen scheme.
 * @member {module:model/IssueTypeScreenScheme} issueTypeScreenScheme
 */


IssueTypeScreenSchemesProjects.prototype['issueTypeScreenScheme'] = undefined;
/**
 * The IDs of the projects using the issue type screen scheme.
 * @member {Array.<String>} projectIds
 */

IssueTypeScreenSchemesProjects.prototype['projectIds'] = undefined;
var _default = IssueTypeScreenSchemesProjects;
exports["default"] = _default;