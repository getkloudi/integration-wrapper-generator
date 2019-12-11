"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicProjectDetails = _interopRequireDefault(require("./BasicProjectDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RunnerDetails model module.
 * @module model/RunnerDetails
 * @version 1.1.0
 */
var RunnerDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RunnerDetails</code>.
   * Update runner&#39;s details
   * @alias module:model/RunnerDetails
   */
  function RunnerDetails() {
    _classCallCheck(this, RunnerDetails);

    RunnerDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RunnerDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RunnerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunnerDetails} obj Optional instance to populate.
     * @return {module:model/RunnerDetails} The populated <code>RunnerDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RunnerDetails();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'String');
        }

        if (data.hasOwnProperty('architecture')) {
          obj['architecture'] = _ApiClient["default"].convertToType(data['architecture'], 'String');
        }

        if (data.hasOwnProperty('contacted_at')) {
          obj['contacted_at'] = _ApiClient["default"].convertToType(data['contacted_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('is_shared')) {
          obj['is_shared'] = _ApiClient["default"].convertToType(data['is_shared'], 'String');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _BasicProjectDetails["default"].constructFromObject(data['projects']);
        }

        if (data.hasOwnProperty('revision')) {
          obj['revision'] = _ApiClient["default"].convertToType(data['revision'], 'String');
        }

        if (data.hasOwnProperty('run_untagged')) {
          obj['run_untagged'] = _ApiClient["default"].convertToType(data['run_untagged'], 'String');
        }

        if (data.hasOwnProperty('tag_list')) {
          obj['tag_list'] = _ApiClient["default"].convertToType(data['tag_list'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RunnerDetails;
}();
/**
 * @member {String} active
 */


RunnerDetails.prototype['active'] = undefined;
/**
 * @member {String} architecture
 */

RunnerDetails.prototype['architecture'] = undefined;
/**
 * @member {String} contacted_at
 */

RunnerDetails.prototype['contacted_at'] = undefined;
/**
 * @member {String} description
 */

RunnerDetails.prototype['description'] = undefined;
/**
 * @member {String} id
 */

RunnerDetails.prototype['id'] = undefined;
/**
 * @member {String} is_shared
 */

RunnerDetails.prototype['is_shared'] = undefined;
/**
 * @member {String} locked
 */

RunnerDetails.prototype['locked'] = undefined;
/**
 * @member {String} name
 */

RunnerDetails.prototype['name'] = undefined;
/**
 * @member {String} platform
 */

RunnerDetails.prototype['platform'] = undefined;
/**
 * @member {module:model/BasicProjectDetails} projects
 */

RunnerDetails.prototype['projects'] = undefined;
/**
 * @member {String} revision
 */

RunnerDetails.prototype['revision'] = undefined;
/**
 * @member {String} run_untagged
 */

RunnerDetails.prototype['run_untagged'] = undefined;
/**
 * @member {String} tag_list
 */

RunnerDetails.prototype['tag_list'] = undefined;
/**
 * @member {String} token
 */

RunnerDetails.prototype['token'] = undefined;
/**
 * @member {String} version
 */

RunnerDetails.prototype['version'] = undefined;
var _default = RunnerDetails;
exports["default"] = _default;