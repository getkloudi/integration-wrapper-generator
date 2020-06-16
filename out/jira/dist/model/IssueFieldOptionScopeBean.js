"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GlobalScopeBean = _interopRequireDefault(require("./GlobalScopeBean"));

var _ProjectScopeBean = _interopRequireDefault(require("./ProjectScopeBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueFieldOptionScopeBean model module.
 * @module model/IssueFieldOptionScopeBean
 * @version 1.4.0
 */
var IssueFieldOptionScopeBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueFieldOptionScopeBean</code>.
   * @alias module:model/IssueFieldOptionScopeBean
   */
  function IssueFieldOptionScopeBean() {
    _classCallCheck(this, IssueFieldOptionScopeBean);

    IssueFieldOptionScopeBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueFieldOptionScopeBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueFieldOptionScopeBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFieldOptionScopeBean} obj Optional instance to populate.
     * @return {module:model/IssueFieldOptionScopeBean} The populated <code>IssueFieldOptionScopeBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueFieldOptionScopeBean();

        if (data.hasOwnProperty('global')) {
          obj['global'] = _ApiClient["default"].convertToType(data['global'], _GlobalScopeBean["default"]);
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], ['Number']);
        }

        if (data.hasOwnProperty('projects2')) {
          obj['projects2'] = _ApiClient["default"].convertToType(data['projects2'], [_ProjectScopeBean["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IssueFieldOptionScopeBean;
}();
/**
 * Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects.
 * @member {module:model/GlobalScopeBean} global
 */


IssueFieldOptionScopeBean.prototype['global'] = undefined;
/**
 * DEPRECATED
 * @member {Array.<Number>} projects
 */

IssueFieldOptionScopeBean.prototype['projects'] = undefined;
/**
 * Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
 * @member {Array.<module:model/ProjectScopeBean>} projects2
 */

IssueFieldOptionScopeBean.prototype['projects2'] = undefined;
var _default = IssueFieldOptionScopeBean;
exports["default"] = _default;