"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOfLinksAvatar = _interopRequireDefault(require("./AccountAllOfLinksAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectAllOfLinks model module.
 * @module model/ProjectAllOfLinks
 * @version 1.0.0
 */
var ProjectAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectAllOfLinks</code>.
   * @alias module:model/ProjectAllOfLinks
   */
  function ProjectAllOfLinks() {
    _classCallCheck(this, ProjectAllOfLinks);

    ProjectAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAllOfLinks} obj Optional instance to populate.
     * @return {module:model/ProjectAllOfLinks} The populated <code>ProjectAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectAllOfLinks();

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['avatar']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['html']);
        }
      }

      return obj;
    }
  }]);

  return ProjectAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} avatar
 */


ProjectAllOfLinks.prototype['avatar'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} html
 */

ProjectAllOfLinks.prototype['html'] = undefined;
var _default = ProjectAllOfLinks;
exports["default"] = _default;