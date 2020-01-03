"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstancesConfiguration model module.
 * @module model/ReservedInstancesConfiguration
 * @version 1.0.0
 */
var ReservedInstancesConfiguration =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstancesConfiguration</code>.
   * Describes the configuration settings for the modified Reserved Instances.
   * @alias module:model/ReservedInstancesConfiguration
   */
  function ReservedInstancesConfiguration() {
    _classCallCheck(this, ReservedInstancesConfiguration);

    ReservedInstancesConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstancesConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstancesConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesConfiguration} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesConfiguration} The populated <code>ReservedInstancesConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstancesConfiguration();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _Scope["default"].constructFromObject(data['Scope']);
        }
      }

      return obj;
    }
  }]);

  return ReservedInstancesConfiguration;
}();
/**
 * @member {String} AvailabilityZone
 */


ReservedInstancesConfiguration.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Number} InstanceCount
 */

ReservedInstancesConfiguration.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

ReservedInstancesConfiguration.prototype['InstanceType'] = undefined;
/**
 * @member {String} Platform
 */

ReservedInstancesConfiguration.prototype['Platform'] = undefined;
/**
 * @member {module:model/Scope} Scope
 */

ReservedInstancesConfiguration.prototype['Scope'] = undefined;
var _default = ReservedInstancesConfiguration;
exports["default"] = _default;