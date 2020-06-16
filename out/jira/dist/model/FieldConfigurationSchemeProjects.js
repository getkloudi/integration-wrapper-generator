"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldConfigurationScheme = _interopRequireDefault(require("./FieldConfigurationScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FieldConfigurationSchemeProjects model module.
 * @module model/FieldConfigurationSchemeProjects
 * @version 1.4.0
 */
var FieldConfigurationSchemeProjects = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfigurationSchemeProjects</code>.
   * Project list with assigned field configuration schema.
   * @alias module:model/FieldConfigurationSchemeProjects
   * @param projectIds {Array.<String>} The IDs of projects using the field configuration scheme.
   */
  function FieldConfigurationSchemeProjects(projectIds) {
    _classCallCheck(this, FieldConfigurationSchemeProjects);

    FieldConfigurationSchemeProjects.initialize(this, projectIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfigurationSchemeProjects, null, [{
    key: "initialize",
    value: function initialize(obj, projectIds) {
      obj['projectIds'] = projectIds;
    }
    /**
     * Constructs a <code>FieldConfigurationSchemeProjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationSchemeProjects} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationSchemeProjects} The populated <code>FieldConfigurationSchemeProjects</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfigurationSchemeProjects();

        if (data.hasOwnProperty('fieldConfigurationScheme')) {
          obj['fieldConfigurationScheme'] = _FieldConfigurationScheme["default"].constructFromObject(data['fieldConfigurationScheme']);
        }

        if (data.hasOwnProperty('projectIds')) {
          obj['projectIds'] = _ApiClient["default"].convertToType(data['projectIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return FieldConfigurationSchemeProjects;
}();
/**
 * @member {module:model/FieldConfigurationScheme} fieldConfigurationScheme
 */


FieldConfigurationSchemeProjects.prototype['fieldConfigurationScheme'] = undefined;
/**
 * The IDs of projects using the field configuration scheme.
 * @member {Array.<String>} projectIds
 */

FieldConfigurationSchemeProjects.prototype['projectIds'] = undefined;
var _default = FieldConfigurationSchemeProjects;
exports["default"] = _default;