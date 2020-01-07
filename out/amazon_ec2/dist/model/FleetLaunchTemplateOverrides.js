"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _PlacementResponse = _interopRequireDefault(require("./PlacementResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FleetLaunchTemplateOverrides model module.
 * @module model/FleetLaunchTemplateOverrides
 * @version 1.1.0
 */
var FleetLaunchTemplateOverrides =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetLaunchTemplateOverrides</code>.
   * Describes overrides for a launch template.
   * @alias module:model/FleetLaunchTemplateOverrides
   */
  function FleetLaunchTemplateOverrides() {
    _classCallCheck(this, FleetLaunchTemplateOverrides);

    FleetLaunchTemplateOverrides.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetLaunchTemplateOverrides, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetLaunchTemplateOverrides</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetLaunchTemplateOverrides} obj Optional instance to populate.
     * @return {module:model/FleetLaunchTemplateOverrides} The populated <code>FleetLaunchTemplateOverrides</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetLaunchTemplateOverrides();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('MaxPrice')) {
          obj['MaxPrice'] = _ApiClient["default"].convertToType(data['MaxPrice'], 'String');
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _PlacementResponse["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('Priority')) {
          obj['Priority'] = _ApiClient["default"].convertToType(data['Priority'], 'Number');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('WeightedCapacity')) {
          obj['WeightedCapacity'] = _ApiClient["default"].convertToType(data['WeightedCapacity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FleetLaunchTemplateOverrides;
}();
/**
 * @member {String} AvailabilityZone
 */


FleetLaunchTemplateOverrides.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

FleetLaunchTemplateOverrides.prototype['InstanceType'] = undefined;
/**
 * @member {String} MaxPrice
 */

FleetLaunchTemplateOverrides.prototype['MaxPrice'] = undefined;
/**
 * @member {module:model/PlacementResponse} Placement
 */

FleetLaunchTemplateOverrides.prototype['Placement'] = undefined;
/**
 * @member {Number} Priority
 */

FleetLaunchTemplateOverrides.prototype['Priority'] = undefined;
/**
 * @member {String} SubnetId
 */

FleetLaunchTemplateOverrides.prototype['SubnetId'] = undefined;
/**
 * @member {Number} WeightedCapacity
 */

FleetLaunchTemplateOverrides.prototype['WeightedCapacity'] = undefined;
var _default = FleetLaunchTemplateOverrides;
exports["default"] = _default;