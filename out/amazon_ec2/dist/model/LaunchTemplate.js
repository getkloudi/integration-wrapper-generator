"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplate model module.
 * @module model/LaunchTemplate
 * @version 1.0.0
 */
var LaunchTemplate =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplate</code>.
   * Describes a launch template.
   * @alias module:model/LaunchTemplate
   */
  function LaunchTemplate() {
    _classCallCheck(this, LaunchTemplate);

    LaunchTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplate} obj Optional instance to populate.
     * @return {module:model/LaunchTemplate} The populated <code>LaunchTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplate();

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('CreatedBy')) {
          obj['CreatedBy'] = _ApiClient["default"].convertToType(data['CreatedBy'], 'String');
        }

        if (data.hasOwnProperty('DefaultVersionNumber')) {
          obj['DefaultVersionNumber'] = _ApiClient["default"].convertToType(data['DefaultVersionNumber'], 'Number');
        }

        if (data.hasOwnProperty('LatestVersionNumber')) {
          obj['LatestVersionNumber'] = _ApiClient["default"].convertToType(data['LatestVersionNumber'], 'Number');
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplate;
}();
/**
 * @member {Date} CreateTime
 */


LaunchTemplate.prototype['CreateTime'] = undefined;
/**
 * @member {String} CreatedBy
 */

LaunchTemplate.prototype['CreatedBy'] = undefined;
/**
 * @member {Number} DefaultVersionNumber
 */

LaunchTemplate.prototype['DefaultVersionNumber'] = undefined;
/**
 * @member {Number} LatestVersionNumber
 */

LaunchTemplate.prototype['LatestVersionNumber'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

LaunchTemplate.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

LaunchTemplate.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

LaunchTemplate.prototype['Tags'] = undefined;
var _default = LaunchTemplate;
exports["default"] = _default;