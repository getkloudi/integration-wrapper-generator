"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetLaunchTemplateOverridesRequest = _interopRequireDefault(require("./FleetLaunchTemplateOverridesRequest"));

var _FleetLaunchTemplateSpecificationRequest = _interopRequireDefault(require("./FleetLaunchTemplateSpecificationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FleetLaunchTemplateConfigRequest model module.
 * @module model/FleetLaunchTemplateConfigRequest
 * @version 1.0.0
 */
var FleetLaunchTemplateConfigRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetLaunchTemplateConfigRequest</code>.
   * Describes a launch template and overrides.
   * @alias module:model/FleetLaunchTemplateConfigRequest
   */
  function FleetLaunchTemplateConfigRequest() {
    _classCallCheck(this, FleetLaunchTemplateConfigRequest);

    FleetLaunchTemplateConfigRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetLaunchTemplateConfigRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetLaunchTemplateConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetLaunchTemplateConfigRequest} obj Optional instance to populate.
     * @return {module:model/FleetLaunchTemplateConfigRequest} The populated <code>FleetLaunchTemplateConfigRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetLaunchTemplateConfigRequest();

        if (data.hasOwnProperty('LaunchTemplateSpecification')) {
          obj['LaunchTemplateSpecification'] = _FleetLaunchTemplateSpecificationRequest["default"].constructFromObject(data['LaunchTemplateSpecification']);
        }

        if (data.hasOwnProperty('Overrides')) {
          obj['Overrides'] = _ApiClient["default"].convertToType(data['Overrides'], [_FleetLaunchTemplateOverridesRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FleetLaunchTemplateConfigRequest;
}();
/**
 * @member {module:model/FleetLaunchTemplateSpecificationRequest} LaunchTemplateSpecification
 */


FleetLaunchTemplateConfigRequest.prototype['LaunchTemplateSpecification'] = undefined;
/**
 * @member {Array.<module:model/FleetLaunchTemplateOverridesRequest>} Overrides
 */

FleetLaunchTemplateConfigRequest.prototype['Overrides'] = undefined;
var _default = FleetLaunchTemplateConfigRequest;
exports["default"] = _default;