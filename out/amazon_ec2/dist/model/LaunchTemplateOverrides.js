"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateOverrides model module.
 * @module model/LaunchTemplateOverrides
 * @version 1.0.0
 */
var LaunchTemplateOverrides =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateOverrides</code>.
   * Describes overrides for a launch template.
   * @alias module:model/LaunchTemplateOverrides
   */
  function LaunchTemplateOverrides() {
    _classCallCheck(this, LaunchTemplateOverrides);

    LaunchTemplateOverrides.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateOverrides, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateOverrides</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateOverrides} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateOverrides} The populated <code>LaunchTemplateOverrides</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateOverrides();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Priority')) {
          obj['Priority'] = _ApiClient["default"].convertToType(data['Priority'], 'Number');
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
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

  return LaunchTemplateOverrides;
}();
/**
 * @member {String} AvailabilityZone
 */


LaunchTemplateOverrides.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

LaunchTemplateOverrides.prototype['InstanceType'] = undefined;
/**
 * @member {Number} Priority
 */

LaunchTemplateOverrides.prototype['Priority'] = undefined;
/**
 * @member {String} SpotPrice
 */

LaunchTemplateOverrides.prototype['SpotPrice'] = undefined;
/**
 * @member {String} SubnetId
 */

LaunchTemplateOverrides.prototype['SubnetId'] = undefined;
/**
 * @member {Number} WeightedCapacity
 */

LaunchTemplateOverrides.prototype['WeightedCapacity'] = undefined;
var _default = LaunchTemplateOverrides;
exports["default"] = _default;