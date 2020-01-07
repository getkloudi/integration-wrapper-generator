"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseLaunchTemplateData = _interopRequireDefault(require("./ResponseLaunchTemplateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateVersion model module.
 * @module model/LaunchTemplateVersion
 * @version 1.1.0
 */
var LaunchTemplateVersion =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateVersion</code>.
   * Describes a launch template version.
   * @alias module:model/LaunchTemplateVersion
   */
  function LaunchTemplateVersion() {
    _classCallCheck(this, LaunchTemplateVersion);

    LaunchTemplateVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateVersion} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateVersion} The populated <code>LaunchTemplateVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateVersion();

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('CreatedBy')) {
          obj['CreatedBy'] = _ApiClient["default"].convertToType(data['CreatedBy'], 'String');
        }

        if (data.hasOwnProperty('DefaultVersion')) {
          obj['DefaultVersion'] = _ApiClient["default"].convertToType(data['DefaultVersion'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchTemplateData')) {
          obj['LaunchTemplateData'] = _ResponseLaunchTemplateData["default"].constructFromObject(data['LaunchTemplateData']);
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('VersionDescription')) {
          obj['VersionDescription'] = _ApiClient["default"].convertToType(data['VersionDescription'], 'String');
        }

        if (data.hasOwnProperty('VersionNumber')) {
          obj['VersionNumber'] = _ApiClient["default"].convertToType(data['VersionNumber'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateVersion;
}();
/**
 * @member {Date} CreateTime
 */


LaunchTemplateVersion.prototype['CreateTime'] = undefined;
/**
 * @member {String} CreatedBy
 */

LaunchTemplateVersion.prototype['CreatedBy'] = undefined;
/**
 * @member {Boolean} DefaultVersion
 */

LaunchTemplateVersion.prototype['DefaultVersion'] = undefined;
/**
 * @member {module:model/ResponseLaunchTemplateData} LaunchTemplateData
 */

LaunchTemplateVersion.prototype['LaunchTemplateData'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

LaunchTemplateVersion.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

LaunchTemplateVersion.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {String} VersionDescription
 */

LaunchTemplateVersion.prototype['VersionDescription'] = undefined;
/**
 * @member {Number} VersionNumber
 */

LaunchTemplateVersion.prototype['VersionNumber'] = undefined;
var _default = LaunchTemplateVersion;
exports["default"] = _default;