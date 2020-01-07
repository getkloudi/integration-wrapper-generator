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
 * The CreateFleetInstance model module.
 * @module model/CreateFleetInstance
 * @version 1.1.0
 */
var CreateFleetInstance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFleetInstance</code>.
   * Describes the instances that were launched by the fleet.
   * @alias module:model/CreateFleetInstance
   */
  function CreateFleetInstance() {
    _classCallCheck(this, CreateFleetInstance);

    CreateFleetInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFleetInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFleetInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFleetInstance} obj Optional instance to populate.
     * @return {module:model/CreateFleetInstance} The populated <code>CreateFleetInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFleetInstance();

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

  return CreateFleetInstance;
}();
/**
 * @member {Array.<String>} InstanceIds
 */


CreateFleetInstance.prototype['InstanceIds'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

CreateFleetInstance.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/LaunchTemplateAndOverridesResponse} LaunchTemplateAndOverrides
 */

CreateFleetInstance.prototype['LaunchTemplateAndOverrides'] = undefined;
/**
 * @member {module:model/InstanceLifecycle} Lifecycle
 */

CreateFleetInstance.prototype['Lifecycle'] = undefined;
/**
 * @member {module:model/PlatformValues} Platform
 */

CreateFleetInstance.prototype['Platform'] = undefined;
var _default = CreateFleetInstance;
exports["default"] = _default;