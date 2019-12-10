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
 * The ProjectStatistics model module.
 * @module model/ProjectStatistics
 * @version 1.0.0
 */
var ProjectStatistics =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectStatistics</code>.
   * @alias module:model/ProjectStatistics
   */
  function ProjectStatistics() {
    _classCallCheck(this, ProjectStatistics);

    ProjectStatistics.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectStatistics, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatistics} obj Optional instance to populate.
     * @return {module:model/ProjectStatistics} The populated <code>ProjectStatistics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectStatistics();

        if (data.hasOwnProperty('build_artifacts_size')) {
          obj['build_artifacts_size'] = _ApiClient["default"].convertToType(data['build_artifacts_size'], 'String');
        }

        if (data.hasOwnProperty('commit_count')) {
          obj['commit_count'] = _ApiClient["default"].convertToType(data['commit_count'], 'String');
        }

        if (data.hasOwnProperty('lfs_objects_size')) {
          obj['lfs_objects_size'] = _ApiClient["default"].convertToType(data['lfs_objects_size'], 'String');
        }

        if (data.hasOwnProperty('repository_size')) {
          obj['repository_size'] = _ApiClient["default"].convertToType(data['repository_size'], 'String');
        }

        if (data.hasOwnProperty('storage_size')) {
          obj['storage_size'] = _ApiClient["default"].convertToType(data['storage_size'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectStatistics;
}();
/**
 * @member {String} build_artifacts_size
 */


ProjectStatistics.prototype['build_artifacts_size'] = undefined;
/**
 * @member {String} commit_count
 */

ProjectStatistics.prototype['commit_count'] = undefined;
/**
 * @member {String} lfs_objects_size
 */

ProjectStatistics.prototype['lfs_objects_size'] = undefined;
/**
 * @member {String} repository_size
 */

ProjectStatistics.prototype['repository_size'] = undefined;
/**
 * @member {String} storage_size
 */

ProjectStatistics.prototype['storage_size'] = undefined;
var _default = ProjectStatistics;
exports["default"] = _default;