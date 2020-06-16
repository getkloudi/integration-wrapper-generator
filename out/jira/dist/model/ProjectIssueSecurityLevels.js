"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityLevel = _interopRequireDefault(require("./SecurityLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectIssueSecurityLevels model module.
 * @module model/ProjectIssueSecurityLevels
 * @version 1.4.0
 */
var ProjectIssueSecurityLevels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectIssueSecurityLevels</code>.
   * List of issue level security items in a project.
   * @alias module:model/ProjectIssueSecurityLevels
   * @param levels {Array.<module:model/SecurityLevel>} Issue level security items list.
   */
  function ProjectIssueSecurityLevels(levels) {
    _classCallCheck(this, ProjectIssueSecurityLevels);

    ProjectIssueSecurityLevels.initialize(this, levels);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectIssueSecurityLevels, null, [{
    key: "initialize",
    value: function initialize(obj, levels) {
      obj['levels'] = levels;
    }
    /**
     * Constructs a <code>ProjectIssueSecurityLevels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueSecurityLevels} obj Optional instance to populate.
     * @return {module:model/ProjectIssueSecurityLevels} The populated <code>ProjectIssueSecurityLevels</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectIssueSecurityLevels();

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], [_SecurityLevel["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProjectIssueSecurityLevels;
}();
/**
 * Issue level security items list.
 * @member {Array.<module:model/SecurityLevel>} levels
 */


ProjectIssueSecurityLevels.prototype['levels'] = undefined;
var _default = ProjectIssueSecurityLevels;
exports["default"] = _default;