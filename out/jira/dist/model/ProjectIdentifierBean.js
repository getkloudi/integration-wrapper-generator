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
 * The ProjectIdentifierBean model module.
 * @module model/ProjectIdentifierBean
 * @version 1.4.0
 */
var ProjectIdentifierBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectIdentifierBean</code>.
   * The identifiers for a project.
   * @alias module:model/ProjectIdentifierBean
   */
  function ProjectIdentifierBean() {
    _classCallCheck(this, ProjectIdentifierBean);

    ProjectIdentifierBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectIdentifierBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectIdentifierBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIdentifierBean} obj Optional instance to populate.
     * @return {module:model/ProjectIdentifierBean} The populated <code>ProjectIdentifierBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectIdentifierBean();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectIdentifierBean;
}();
/**
 * The ID of the project.
 * @member {Number} id
 */


ProjectIdentifierBean.prototype['id'] = undefined;
/**
 * The key of the project.
 * @member {String} key
 */

ProjectIdentifierBean.prototype['key'] = undefined;
var _default = ProjectIdentifierBean;
exports["default"] = _default;