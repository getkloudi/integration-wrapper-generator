"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubjectTypesRepositoryEvents = _interopRequireDefault(require("./SubjectTypesRepositoryEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkspaceAllOfLinks model module.
 * @module model/WorkspaceAllOfLinks
 * @version 1.2.0
 */
var WorkspaceAllOfLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkspaceAllOfLinks</code>.
   * @alias module:model/WorkspaceAllOfLinks
   */
  function WorkspaceAllOfLinks() {
    _classCallCheck(this, WorkspaceAllOfLinks);

    WorkspaceAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkspaceAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkspaceAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceAllOfLinks} obj Optional instance to populate.
     * @return {module:model/WorkspaceAllOfLinks} The populated <code>WorkspaceAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkspaceAllOfLinks();

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['avatar']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['members']);
        }

        if (data.hasOwnProperty('owners')) {
          obj['owners'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['owners']);
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['projects']);
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['repositories']);
        }

        if (data.hasOwnProperty('snippets')) {
          obj['snippets'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['snippets']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return WorkspaceAllOfLinks;
}();
/**
 * @member {module:model/SubjectTypesRepositoryEvents} avatar
 */


WorkspaceAllOfLinks.prototype['avatar'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */

WorkspaceAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} members
 */

WorkspaceAllOfLinks.prototype['members'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} owners
 */

WorkspaceAllOfLinks.prototype['owners'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} projects
 */

WorkspaceAllOfLinks.prototype['projects'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} repositories
 */

WorkspaceAllOfLinks.prototype['repositories'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} snippets
 */

WorkspaceAllOfLinks.prototype['snippets'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */

WorkspaceAllOfLinks.prototype['self'] = undefined;
var _default = WorkspaceAllOfLinks;
exports["default"] = _default;