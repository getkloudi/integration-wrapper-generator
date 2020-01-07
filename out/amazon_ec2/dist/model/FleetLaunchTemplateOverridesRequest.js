"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _Placement = _interopRequireDefault(require("./Placement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FleetLaunchTemplateOverridesRequest model module.
 * @module model/FleetLaunchTemplateOverridesRequest
 * @version 1.1.0
 */
var FleetLaunchTemplateOverridesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetLaunchTemplateOverridesRequest</code>.
   * Describes overrides for a launch template.
   * @alias module:model/FleetLaunchTemplateOverridesRequest
   */
  function FleetLaunchTemplateOverridesRequest() {
    _classCallCheck(this, FleetLaunchTemplateOverridesRequest);

    FleetLaunchTemplateOverridesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetLaunchTemplateOverridesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetLaunchTemplateOverridesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetLaunchTemplateOverridesRequest} obj Optional instance to populate.
     * @return {module:model/FleetLaunchTemplateOverridesRequest} The populated <code>FleetLaunchTemplateOverridesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetLaunchTemplateOverridesRequest();

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
          obj['Placement'] = _Placement["default"].constructFromObject(data['Placement']);
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

  return FleetLaunchTemplateOverridesRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


FleetLaunchTemplateOverridesRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

FleetLaunchTemplateOverridesRequest.prototype['InstanceType'] = undefined;
/**
 * @member {String} MaxPrice
 */

FleetLaunchTemplateOverridesRequest.prototype['MaxPrice'] = undefined;
/**
 * @member {module:model/Placement} Placement
 */

FleetLaunchTemplateOverridesRequest.prototype['Placement'] = undefined;
/**
 * @member {Number} Priority
 */

FleetLaunchTemplateOverridesRequest.prototype['Priority'] = undefined;
/**
 * @member {String} SubnetId
 */

FleetLaunchTemplateOverridesRequest.prototype['SubnetId'] = undefined;
/**
 * @member {Number} WeightedCapacity
 */

FleetLaunchTemplateOverridesRequest.prototype['WeightedCapacity'] = undefined;
var _default = FleetLaunchTemplateOverridesRequest;
exports["default"] = _default;