"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetLaunchTemplateSpecification = _interopRequireDefault(require("./FleetLaunchTemplateSpecification"));

var _LaunchTemplateOverrides = _interopRequireDefault(require("./LaunchTemplateOverrides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateConfig model module.
 * @module model/LaunchTemplateConfig
 * @version 1.1.0
 */
var LaunchTemplateConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateConfig</code>.
   * Describes a launch template and overrides.
   * @alias module:model/LaunchTemplateConfig
   */
  function LaunchTemplateConfig() {
    _classCallCheck(this, LaunchTemplateConfig);

    LaunchTemplateConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateConfig} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateConfig} The populated <code>LaunchTemplateConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateConfig();

        if (data.hasOwnProperty('LaunchTemplateSpecification')) {
          obj['LaunchTemplateSpecification'] = _FleetLaunchTemplateSpecification["default"].constructFromObject(data['LaunchTemplateSpecification']);
        }

        if (data.hasOwnProperty('Overrides')) {
          obj['Overrides'] = _ApiClient["default"].convertToType(data['Overrides'], [_LaunchTemplateOverrides["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateConfig;
}();
/**
 * @member {module:model/FleetLaunchTemplateSpecification} LaunchTemplateSpecification
 */


LaunchTemplateConfig.prototype['LaunchTemplateSpecification'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateOverrides>} Overrides
 */

LaunchTemplateConfig.prototype['Overrides'] = undefined;
var _default = LaunchTemplateConfig;
exports["default"] = _default;