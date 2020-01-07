"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetLaunchTemplateOverrides = _interopRequireDefault(require("./FleetLaunchTemplateOverrides"));

var _FleetLaunchTemplateSpecification = _interopRequireDefault(require("./FleetLaunchTemplateSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateAndOverridesResponse model module.
 * @module model/LaunchTemplateAndOverridesResponse
 * @version 1.1.0
 */
var LaunchTemplateAndOverridesResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateAndOverridesResponse</code>.
   * Describes a launch template and overrides.
   * @alias module:model/LaunchTemplateAndOverridesResponse
   */
  function LaunchTemplateAndOverridesResponse() {
    _classCallCheck(this, LaunchTemplateAndOverridesResponse);

    LaunchTemplateAndOverridesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateAndOverridesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateAndOverridesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateAndOverridesResponse} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateAndOverridesResponse} The populated <code>LaunchTemplateAndOverridesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateAndOverridesResponse();

        if (data.hasOwnProperty('LaunchTemplateSpecification')) {
          obj['LaunchTemplateSpecification'] = _FleetLaunchTemplateSpecification["default"].constructFromObject(data['LaunchTemplateSpecification']);
        }

        if (data.hasOwnProperty('Overrides')) {
          obj['Overrides'] = _FleetLaunchTemplateOverrides["default"].constructFromObject(data['Overrides']);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateAndOverridesResponse;
}();
/**
 * @member {module:model/FleetLaunchTemplateSpecification} LaunchTemplateSpecification
 */


LaunchTemplateAndOverridesResponse.prototype['LaunchTemplateSpecification'] = undefined;
/**
 * @member {module:model/FleetLaunchTemplateOverrides} Overrides
 */

LaunchTemplateAndOverridesResponse.prototype['Overrides'] = undefined;
var _default = LaunchTemplateAndOverridesResponse;
exports["default"] = _default;