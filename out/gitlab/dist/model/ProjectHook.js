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
 * The ProjectHook model module.
 * @module model/ProjectHook
 * @version 1.1.0
 */
var ProjectHook =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectHook</code>.
   * Deletes project hook
   * @alias module:model/ProjectHook
   */
  function ProjectHook() {
    _classCallCheck(this, ProjectHook);

    ProjectHook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectHook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectHook} obj Optional instance to populate.
     * @return {module:model/ProjectHook} The populated <code>ProjectHook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectHook();

        if (data.hasOwnProperty('build_events')) {
          obj['build_events'] = _ApiClient["default"].convertToType(data['build_events'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('enable_ssl_verification')) {
          obj['enable_ssl_verification'] = _ApiClient["default"].convertToType(data['enable_ssl_verification'], 'String');
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

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('push_events')) {
          obj['push_events'] = _ApiClient["default"].convertToType(data['push_events'], 'String');
        }

        if (data.hasOwnProperty('tag_push_events')) {
          obj['tag_push_events'] = _ApiClient["default"].convertToType(data['tag_push_events'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('wiki_page_events')) {
          obj['wiki_page_events'] = _ApiClient["default"].convertToType(data['wiki_page_events'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectHook;
}();
/**
 * @member {String} build_events
 */


ProjectHook.prototype['build_events'] = undefined;
/**
 * @member {String} created_at
 */

ProjectHook.prototype['created_at'] = undefined;
/**
 * @member {String} enable_ssl_verification
 */

ProjectHook.prototype['enable_ssl_verification'] = undefined;
/**
 * @member {String} id
 */

ProjectHook.prototype['id'] = undefined;
/**
 * @member {String} issues_events
 */

ProjectHook.prototype['issues_events'] = undefined;
/**
 * @member {String} merge_requests_events
 */

ProjectHook.prototype['merge_requests_events'] = undefined;
/**
 * @member {String} note_events
 */

ProjectHook.prototype['note_events'] = undefined;
/**
 * @member {String} pipeline_events
 */

ProjectHook.prototype['pipeline_events'] = undefined;
/**
 * @member {String} project_id
 */

ProjectHook.prototype['project_id'] = undefined;
/**
 * @member {String} push_events
 */

ProjectHook.prototype['push_events'] = undefined;
/**
 * @member {String} tag_push_events
 */

ProjectHook.prototype['tag_push_events'] = undefined;
/**
 * @member {String} url
 */

ProjectHook.prototype['url'] = undefined;
/**
 * @member {String} wiki_page_events
 */

ProjectHook.prototype['wiki_page_events'] = undefined;
var _default = ProjectHook;
exports["default"] = _default;