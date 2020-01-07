"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceLifecycle = _interopRequireDefault(require("./InstanceLifecycle"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LaunchTemplateAndOverridesResponse = _interopRequireDefault(require("./LaunchTemplateAndOverridesResponse"));

var _PlatformValues = _interopRequireDefault(require("./PlatformValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFleetsInstances model module.
 * @module model/DescribeFleetsInstances
 * @version 1.1.0
 */
var DescribeFleetsInstances =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetsInstances</code>.
   * Describes the instances that were launched by the fleet.
   * @alias module:model/DescribeFleetsInstances
   */
  function DescribeFleetsInstances() {
    _classCallCheck(this, DescribeFleetsInstances);

    DescribeFleetsInstances.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetsInstances, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFleetsInstances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetsInstances} obj Optional instance to populate.
     * @return {module:model/DescribeFleetsInstances} The populated <code>DescribeFleetsInstances</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetsInstances();

        if (data.hasOwnProperty('InstanceIds')) {
          obj['InstanceIds'] = _ApiClient["default"].convertToType(data['InstanceIds'], ['String']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('LaunchTemplateAndOverrides')) {
          obj['LaunchTemplateAndOverrides'] = _LaunchTemplateAndOverridesResponse["default"].constructFromObject(data['LaunchTemplateAndOverrides']);
        }

        if (data.hasOwnProperty('Lifecycle')) {
          obj['Lifecycle'] = _InstanceLifecycle["default"].constructFromObject(data['Lifecycle']);
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _PlatformValues["default"].constructFromObject(data['Platform']);
        }
      }

      return obj;
    }
  }]);

  return DescribeFleetsInstances;
}();
/**
 * @member {Array.<String>} InstanceIds
 */


DescribeFleetsInstances.prototype['InstanceIds'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

DescribeFleetsInstances.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/LaunchTemplateAndOverridesResponse} LaunchTemplateAndOverrides
 */

DescribeFleetsInstances.prototype['LaunchTemplateAndOverrides'] = undefined;
/**
 * @member {module:model/InstanceLifecycle} Lifecycle
 */

DescribeFleetsInstances.prototype['Lifecycle'] = undefined;
/**
 * @member {module:model/PlatformValues} Platform
 */

DescribeFleetsInstances.prototype['Platform'] = undefined;
var _default = DescribeFleetsInstances;
exports["default"] = _default;