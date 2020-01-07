"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ArchitectureValues = _interopRequireDefault(require("./ArchitectureValues"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _Placement = _interopRequireDefault(require("./Placement"));

var _ShutdownBehavior = _interopRequireDefault(require("./ShutdownBehavior"));

var _UserData = _interopRequireDefault(require("./UserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportInstanceLaunchSpecification model module.
 * @module model/ImportInstanceLaunchSpecification
 * @version 1.1.0
 */
var ImportInstanceLaunchSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportInstanceLaunchSpecification</code>.
   * Describes the launch specification for VM import.
   * @alias module:model/ImportInstanceLaunchSpecification
   */
  function ImportInstanceLaunchSpecification() {
    _classCallCheck(this, ImportInstanceLaunchSpecification);

    ImportInstanceLaunchSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportInstanceLaunchSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportInstanceLaunchSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportInstanceLaunchSpecification} obj Optional instance to populate.
     * @return {module:model/ImportInstanceLaunchSpecification} The populated <code>ImportInstanceLaunchSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportInstanceLaunchSpecification();

        if (data.hasOwnProperty('AdditionalInfo')) {
          obj['AdditionalInfo'] = _ApiClient["default"].convertToType(data['AdditionalInfo'], 'String');
        }

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ArchitectureValues["default"].constructFromObject(data['Architecture']);
        }

        if (data.hasOwnProperty('GroupIds')) {
          obj['GroupIds'] = _ApiClient["default"].convertToType(data['GroupIds'], ['String']);
        }

        if (data.hasOwnProperty('GroupNames')) {
          obj['GroupNames'] = _ApiClient["default"].convertToType(data['GroupNames'], ['String']);
        }

        if (data.hasOwnProperty('InstanceInitiatedShutdownBehavior')) {
          obj['InstanceInitiatedShutdownBehavior'] = _ShutdownBehavior["default"].constructFromObject(data['InstanceInitiatedShutdownBehavior']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _ApiClient["default"].convertToType(data['Monitoring'], 'Boolean');
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _Placement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _UserData["default"].constructFromObject(data['UserData']);
        }
      }

      return obj;
    }
  }]);

  return ImportInstanceLaunchSpecification;
}();
/**
 * @member {String} AdditionalInfo
 */


ImportInstanceLaunchSpecification.prototype['AdditionalInfo'] = undefined;
/**
 * @member {module:model/ArchitectureValues} Architecture
 */

ImportInstanceLaunchSpecification.prototype['Architecture'] = undefined;
/**
 * @member {Array.<String>} GroupIds
 */

ImportInstanceLaunchSpecification.prototype['GroupIds'] = undefined;
/**
 * @member {Array.<String>} GroupNames
 */

ImportInstanceLaunchSpecification.prototype['GroupNames'] = undefined;
/**
 * @member {module:model/ShutdownBehavior} InstanceInitiatedShutdownBehavior
 */

ImportInstanceLaunchSpecification.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

ImportInstanceLaunchSpecification.prototype['InstanceType'] = undefined;
/**
 * @member {Boolean} Monitoring
 */

ImportInstanceLaunchSpecification.prototype['Monitoring'] = undefined;
/**
 * @member {module:model/Placement} Placement
 */

ImportInstanceLaunchSpecification.prototype['Placement'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

ImportInstanceLaunchSpecification.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {String} SubnetId
 */

ImportInstanceLaunchSpecification.prototype['SubnetId'] = undefined;
/**
 * @member {module:model/UserData} UserData
 */

ImportInstanceLaunchSpecification.prototype['UserData'] = undefined;
var _default = ImportInstanceLaunchSpecification;
exports["default"] = _default;