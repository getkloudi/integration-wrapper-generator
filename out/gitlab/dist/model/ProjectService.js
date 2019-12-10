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
 * The ProjectService model module.
 * @module model/ProjectService
 * @version 1.0.0
 */
var ProjectService =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectService</code>.
   * Get the service settings for project
   * @alias module:model/ProjectService
   */
  function ProjectService() {
    _classCallCheck(this, ProjectService);

    ProjectService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectService} obj Optional instance to populate.
     * @return {module:model/ProjectService} The populated <code>ProjectService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectService();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'String');
        }

        if (data.hasOwnProperty('build_events')) {
          obj['build_events'] = _ApiClient["default"].convertToType(data['build_events'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issues_events')) {
          obj['issues_events'] = _ApiClient["default"].convertToType(data['issues_events'], 'String');
        }

        if (data.hasOwnProperty('merge_requests_events')) {
          obj['merge_requests_events'] = _ApiClient["default"].convertToType(data['merge_requests_events'], 'String');
        }

        if (data.hasOwnProperty('note_events')) {
          obj['note_events'] = _ApiClient["default"].convertToType(data['note_events'], 'String');
        }

        if (data.hasOwnProperty('pipeline_events')) {
          obj['pipeline_events'] = _ApiClient["default"].convertToType(data['pipeline_events'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], 'String');
        }

        if (data.hasOwnProperty('push_events')) {
          obj['push_events'] = _ApiClient["default"].convertToType(data['push_events'], 'String');
        }

        if (data.hasOwnProperty('tag_push_events')) {
          obj['tag_push_events'] = _ApiClient["default"].convertToType(data['tag_push_events'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectService;
}();
/**
 * @member {String} active
 */


ProjectService.prototype['active'] = undefined;
/**
 * @member {String} build_events
 */

ProjectService.prototype['build_events'] = undefined;
/**
 * @member {String} created_at
 */

ProjectService.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

ProjectService.prototype['id'] = undefined;
/**
 * @member {String} issues_events
 */

ProjectService.prototype['issues_events'] = undefined;
/**
 * @member {String} merge_requests_events
 */

ProjectService.prototype['merge_requests_events'] = undefined;
/**
 * @member {String} note_events
 */

ProjectService.prototype['note_events'] = undefined;
/**
 * @member {String} pipeline_events
 */

ProjectService.prototype['pipeline_events'] = undefined;
/**
 * @member {String} properties
 */

ProjectService.prototype['properties'] = undefined;
/**
 * @member {String} push_events
 */

ProjectService.prototype['push_events'] = undefined;
/**
 * @member {String} tag_push_events
 */

ProjectService.prototype['tag_push_events'] = undefined;
/**
 * @member {String} title
 */

ProjectService.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

ProjectService.prototype['updated_at'] = undefined;
var _default = ProjectService;
exports["default"] = _default;