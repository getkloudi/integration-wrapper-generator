"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BuildArtifactFile = _interopRequireDefault(require("./BuildArtifactFile"));

var _PipelineBasic = _interopRequireDefault(require("./PipelineBasic"));

var _RepoCommit = _interopRequireDefault(require("./RepoCommit"));

var _Runner = _interopRequireDefault(require("./Runner"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Build model module.
 * @module model/Build
 * @version 1.0.0
 */
var Build =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Build</code>.
   * This feature was added in GitLab 8.11
   * @alias module:model/Build
   */
  function Build() {
    _classCallCheck(this, Build);

    Build.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Build, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Build</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Build} obj Optional instance to populate.
     * @return {module:model/Build} The populated <code>Build</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Build();

        if (data.hasOwnProperty('artifacts_file')) {
          obj['artifacts_file'] = _BuildArtifactFile["default"].constructFromObject(data['artifacts_file']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _RepoCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('coverage')) {
          obj['coverage'] = _ApiClient["default"].convertToType(data['coverage'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('finished_at')) {
          obj['finished_at'] = _ApiClient["default"].convertToType(data['finished_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pipeline')) {
          obj['pipeline'] = _PipelineBasic["default"].constructFromObject(data['pipeline']);
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('runner')) {
          obj['runner'] = _Runner["default"].constructFromObject(data['runner']);
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return Build;
}();
/**
 * @member {module:model/BuildArtifactFile} artifacts_file
 */


Build.prototype['artifacts_file'] = undefined;
/**
 * @member {module:model/RepoCommit} commit
 */

Build.prototype['commit'] = undefined;
/**
 * @member {String} coverage
 */

Build.prototype['coverage'] = undefined;
/**
 * @member {String} created_at
 */

Build.prototype['created_at'] = undefined;
/**
 * @member {String} finished_at
 */

Build.prototype['finished_at'] = undefined;
/**
 * @member {String} id
 */

Build.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Build.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineBasic} pipeline
 */

Build.prototype['pipeline'] = undefined;
/**
 * @member {String} ref
 */

Build.prototype['ref'] = undefined;
/**
 * @member {module:model/Runner} runner
 */

Build.prototype['runner'] = undefined;
/**
 * @member {String} stage
 */

Build.prototype['stage'] = undefined;
/**
 * @member {String} started_at
 */

Build.prototype['started_at'] = undefined;
/**
 * @member {String} status
 */

Build.prototype['status'] = undefined;
/**
 * @member {String} tag
 */

Build.prototype['tag'] = undefined;
/**
 * @member {module:model/User} user
 */

Build.prototype['user'] = undefined;
var _default = Build;
exports["default"] = _default;