"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _ItemStats = _interopRequireDefault(require("./ItemStats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectVersion model module.
 * @module model/ProjectVersion
 * @version 1.1.0
 */
var ProjectVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectVersion</code>.
   * @alias module:model/ProjectVersion
   */
  function ProjectVersion() {
    _classCallCheck(this, ProjectVersion);

    ProjectVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectVersion} obj Optional instance to populate.
     * @return {module:model/ProjectVersion} The populated <code>ProjectVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectVersion();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('date_created')) {
          obj['date_created'] = _ApiClient["default"].convertToType(data['date_created'], 'Number');
        }

        if (data.hasOwnProperty('first_version_occurrence_id')) {
          obj['first_version_occurrence_id'] = _ApiClient["default"].convertToType(data['first_version_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('first_occurrence_timestamp')) {
          obj['first_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['first_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('last_occurrence_id')) {
          obj['last_occurrence_id'] = _ApiClient["default"].convertToType(data['last_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('last_occurrence_timestamp')) {
          obj['last_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['last_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('deployed_by')) {
          obj['deployed_by'] = _ApiClient["default"].convertToType(data['deployed_by'], 'String');
        }

        if (data.hasOwnProperty('last_deploy_timestamp')) {
          obj['last_deploy_timestamp'] = _ApiClient["default"].convertToType(data['last_deploy_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('item_stats')) {
          obj['item_stats'] = _ItemStats["default"].constructFromObject(data['item_stats']);
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _ApiClient["default"].convertToType(data['commits'], [_Commit["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProjectVersion;
}();
/**
 * The internal ID for the project version
 * @member {Number} id
 */


ProjectVersion.prototype['id'] = undefined;
/**
 * The version value received in the item occurrences
 * @member {String} version
 */

ProjectVersion.prototype['version'] = undefined;
/**
 * Environment where this version has been deployed
 * @member {String} environment
 */

ProjectVersion.prototype['environment'] = undefined;
/**
 * Timestamp when the version is created
 * @member {Number} date_created
 */

ProjectVersion.prototype['date_created'] = undefined;
/**
 * First occurrence ID received for this version
 * @member {Number} first_version_occurrence_id
 */

ProjectVersion.prototype['first_version_occurrence_id'] = undefined;
/**
 * First occurrence timestamp of the item on the version
 * @member {Number} first_occurrence_timestamp
 */

ProjectVersion.prototype['first_occurrence_timestamp'] = undefined;
/**
 * Last received occurrence ID of the item on the version
 * @member {Number} last_occurrence_id
 */

ProjectVersion.prototype['last_occurrence_id'] = undefined;
/**
 * Last received occurrence timestamp on the version
 * @member {Number} last_occurrence_timestamp
 */

ProjectVersion.prototype['last_occurrence_timestamp'] = undefined;
/**
 * Username of the user that deployed the version. https://docs.rollbar.com/docs/deploy-tracking
 * @member {String} deployed_by
 */

ProjectVersion.prototype['deployed_by'] = undefined;
/**
 * Last received occurrence timestamp on the version
 * @member {Number} last_deploy_timestamp
 */

ProjectVersion.prototype['last_deploy_timestamp'] = undefined;
/**
 * @member {module:model/ItemStats} item_stats
 */

ProjectVersion.prototype['item_stats'] = undefined;
/**
 * Commits for this version compared to the previous project deploy. If deploy tracking feature is not used this value will be an empty array. https://docs.rollbar.com/docs/deploy-tracking
 * @member {Array.<module:model/Commit>} commits
 */

ProjectVersion.prototype['commits'] = undefined;
var _default = ProjectVersion;
exports["default"] = _default;