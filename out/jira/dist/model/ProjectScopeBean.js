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
 * The ProjectScopeBean model module.
 * @module model/ProjectScopeBean
 * @version 1.4.0
 */
var ProjectScopeBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectScopeBean</code>.
   * @alias module:model/ProjectScopeBean
   */
  function ProjectScopeBean() {
    _classCallCheck(this, ProjectScopeBean);

    ProjectScopeBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectScopeBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectScopeBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectScopeBean} obj Optional instance to populate.
     * @return {module:model/ProjectScopeBean} The populated <code>ProjectScopeBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectScopeBean();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProjectScopeBean;
}();
/**
 * Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
 * @member {Array.<module:model/ProjectScopeBean.AttributesEnum>} attributes
 */


ProjectScopeBean.prototype['attributes'] = undefined;
/**
 * The ID of the project that the option's behavior applies to.
 * @member {Number} id
 */

ProjectScopeBean.prototype['id'] = undefined;
/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */

ProjectScopeBean['AttributesEnum'] = {
  /**
   * value: "notSelectable"
   * @const
   */
  "notSelectable": "notSelectable",

  /**
   * value: "defaultValue"
   * @const
   */
  "defaultValue": "defaultValue"
};
var _default = ProjectScopeBean;
exports["default"] = _default;