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
 * The ProjectType model module.
 * @module model/ProjectType
 * @version 1.4.0
 */
var ProjectType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectType</code>.
   * Details about a project type.
   * @alias module:model/ProjectType
   */
  function ProjectType() {
    _classCallCheck(this, ProjectType);

    ProjectType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectType} obj Optional instance to populate.
     * @return {module:model/ProjectType} The populated <code>ProjectType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectType();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('descriptionI18nKey')) {
          obj['descriptionI18nKey'] = _ApiClient["default"].convertToType(data['descriptionI18nKey'], 'String');
        }

        if (data.hasOwnProperty('formattedKey')) {
          obj['formattedKey'] = _ApiClient["default"].convertToType(data['formattedKey'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectType;
}();
/**
 * The color of the project type.
 * @member {String} color
 */


ProjectType.prototype['color'] = undefined;
/**
 * The key of the project type's description.
 * @member {String} descriptionI18nKey
 */

ProjectType.prototype['descriptionI18nKey'] = undefined;
/**
 * The formatted key of the project type.
 * @member {String} formattedKey
 */

ProjectType.prototype['formattedKey'] = undefined;
/**
 * The icon of the project type.
 * @member {String} icon
 */

ProjectType.prototype['icon'] = undefined;
/**
 * The key of the project type.
 * @member {String} key
 */

ProjectType.prototype['key'] = undefined;
var _default = ProjectType;
exports["default"] = _default;