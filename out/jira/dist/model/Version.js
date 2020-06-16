"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleLink = _interopRequireDefault(require("./SimpleLink"));

var _VersionIssuesStatus = _interopRequireDefault(require("./VersionIssuesStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Version model module.
 * @module model/Version
 * @version 1.4.0
 */
var Version = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Version</code>.
   * Details about a project version.
   * @alias module:model/Version
   */
  function Version() {
    _classCallCheck(this, Version);

    Version.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issuesStatusForFixVersion')) {
          obj['issuesStatusForFixVersion'] = _ApiClient["default"].convertToType(data['issuesStatusForFixVersion'], _VersionIssuesStatus["default"]);
        }

        if (data.hasOwnProperty('moveUnfixedIssuesTo')) {
          obj['moveUnfixedIssuesTo'] = _ApiClient["default"].convertToType(data['moveUnfixedIssuesTo'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [_SimpleLink["default"]]);
        }

        if (data.hasOwnProperty('overdue')) {
          obj['overdue'] = _ApiClient["default"].convertToType(data['overdue'], 'Boolean');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }

        if (data.hasOwnProperty('releaseDate')) {
          obj['releaseDate'] = _ApiClient["default"].convertToType(data['releaseDate'], 'Date');
        }

        if (data.hasOwnProperty('released')) {
          obj['released'] = _ApiClient["default"].convertToType(data['released'], 'Boolean');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Date');
        }

        if (data.hasOwnProperty('userReleaseDate')) {
          obj['userReleaseDate'] = _ApiClient["default"].convertToType(data['userReleaseDate'], 'String');
        }

        if (data.hasOwnProperty('userStartDate')) {
          obj['userStartDate'] = _ApiClient["default"].convertToType(data['userStartDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Version;
}();
/**
 * Indicates that the version is archived. Optional when creating or updating a version.
 * @member {Boolean} archived
 */


Version.prototype['archived'] = undefined;
/**
 * The description of the version. Optional when creating or updating a version.
 * @member {String} description
 */

Version.prototype['description'] = undefined;
/**
 * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  Optional for create and update.
 * @member {String} expand
 */

Version.prototype['expand'] = undefined;
/**
 * The ID of the version.
 * @member {String} id
 */

Version.prototype['id'] = undefined;
/**
 * If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
 * @member {module:model/VersionIssuesStatus} issuesStatusForFixVersion
 */

Version.prototype['issuesStatusForFixVersion'] = undefined;
/**
 * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
 * @member {String} moveUnfixedIssuesTo
 */

Version.prototype['moveUnfixedIssuesTo'] = undefined;
/**
 * The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
 * @member {String} name
 */

Version.prototype['name'] = undefined;
/**
 * If the expand option `operations` is used, returns the list of operations available for this version.
 * @member {Array.<module:model/SimpleLink>} operations
 */

Version.prototype['operations'] = undefined;
/**
 * Indicates that the version is overdue.
 * @member {Boolean} overdue
 */

Version.prototype['overdue'] = undefined;
/**
 * Deprecated. Use `projectId`.
 * @member {String} project
 */

Version.prototype['project'] = undefined;
/**
 * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
 * @member {Number} projectId
 */

Version.prototype['projectId'] = undefined;
/**
 * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} releaseDate
 */

Version.prototype['releaseDate'] = undefined;
/**
 * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
 * @member {Boolean} released
 */

Version.prototype['released'] = undefined;
/**
 * The URL of the version.
 * @member {String} self
 */

Version.prototype['self'] = undefined;
/**
 * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} startDate
 */

Version.prototype['startDate'] = undefined;
/**
 * The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userReleaseDate
 */

Version.prototype['userReleaseDate'] = undefined;
/**
 * The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userStartDate
 */

Version.prototype['userStartDate'] = undefined;
var _default = Version;
exports["default"] = _default;