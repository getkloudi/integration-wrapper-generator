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
 * The FieldConfigurationSchemeProjectAssociation model module.
 * @module model/FieldConfigurationSchemeProjectAssociation
 * @version 1.4.0
 */
var FieldConfigurationSchemeProjectAssociation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfigurationSchemeProjectAssociation</code>.
   * Associated field configuration scheme and project.
   * @alias module:model/FieldConfigurationSchemeProjectAssociation
   * @param projectId {String} The ID of the project.
   */
  function FieldConfigurationSchemeProjectAssociation(projectId) {
    _classCallCheck(this, FieldConfigurationSchemeProjectAssociation);

    FieldConfigurationSchemeProjectAssociation.initialize(this, projectId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfigurationSchemeProjectAssociation, null, [{
    key: "initialize",
    value: function initialize(obj, projectId) {
      obj['projectId'] = projectId;
    }
    /**
     * Constructs a <code>FieldConfigurationSchemeProjectAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationSchemeProjectAssociation} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationSchemeProjectAssociation} The populated <code>FieldConfigurationSchemeProjectAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfigurationSchemeProjectAssociation();

        if (data.hasOwnProperty('fieldConfigurationSchemeId')) {
          obj['fieldConfigurationSchemeId'] = _ApiClient["default"].convertToType(data['fieldConfigurationSchemeId'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldConfigurationSchemeProjectAssociation;
}();
/**
 * The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
 * @member {String} fieldConfigurationSchemeId
 */


FieldConfigurationSchemeProjectAssociation.prototype['fieldConfigurationSchemeId'] = undefined;
/**
 * The ID of the project.
 * @member {String} projectId
 */

FieldConfigurationSchemeProjectAssociation.prototype['projectId'] = undefined;
var _default = FieldConfigurationSchemeProjectAssociation;
exports["default"] = _default;