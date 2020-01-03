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
 * The FleetLaunchTemplateSpecification model module.
 * @module model/FleetLaunchTemplateSpecification
 * @version 1.0.0
 */
var FleetLaunchTemplateSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetLaunchTemplateSpecification</code>.
   * Describes a launch template.
   * @alias module:model/FleetLaunchTemplateSpecification
   */
  function FleetLaunchTemplateSpecification() {
    _classCallCheck(this, FleetLaunchTemplateSpecification);

    FleetLaunchTemplateSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetLaunchTemplateSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetLaunchTemplateSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetLaunchTemplateSpecification} obj Optional instance to populate.
     * @return {module:model/FleetLaunchTemplateSpecification} The populated <code>FleetLaunchTemplateSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetLaunchTemplateSpecification();

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FleetLaunchTemplateSpecification;
}();
/**
 * @member {String} LaunchTemplateId
 */


FleetLaunchTemplateSpecification.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

FleetLaunchTemplateSpecification.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {String} Version
 */

FleetLaunchTemplateSpecification.prototype['Version'] = undefined;
var _default = FleetLaunchTemplateSpecification;
exports["default"] = _default;