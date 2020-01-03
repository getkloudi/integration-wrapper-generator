"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstancesEbs = _interopRequireDefault(require("./ScheduledInstancesEbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInstancesBlockDeviceMapping model module.
 * @module model/ScheduledInstancesBlockDeviceMapping
 * @version 1.0.0
 */
var ScheduledInstancesBlockDeviceMapping =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesBlockDeviceMapping</code>.
   * Describes a block device mapping for a Scheduled Instance.
   * @alias module:model/ScheduledInstancesBlockDeviceMapping
   */
  function ScheduledInstancesBlockDeviceMapping() {
    _classCallCheck(this, ScheduledInstancesBlockDeviceMapping);

    ScheduledInstancesBlockDeviceMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesBlockDeviceMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstancesBlockDeviceMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesBlockDeviceMapping} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesBlockDeviceMapping} The populated <code>ScheduledInstancesBlockDeviceMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesBlockDeviceMapping();

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('Ebs')) {
          obj['Ebs'] = _ScheduledInstancesEbs["default"].constructFromObject(data['Ebs']);
        }

        if (data.hasOwnProperty('NoDevice')) {
          obj['NoDevice'] = _ApiClient["default"].convertToType(data['NoDevice'], 'String');
        }

        if (data.hasOwnProperty('VirtualName')) {
          obj['VirtualName'] = _ApiClient["default"].convertToType(data['VirtualName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstancesBlockDeviceMapping;
}();
/**
 * @member {String} DeviceName
 */


ScheduledInstancesBlockDeviceMapping.prototype['DeviceName'] = undefined;
/**
 * @member {module:model/ScheduledInstancesEbs} Ebs
 */

ScheduledInstancesBlockDeviceMapping.prototype['Ebs'] = undefined;
/**
 * @member {String} NoDevice
 */

ScheduledInstancesBlockDeviceMapping.prototype['NoDevice'] = undefined;
/**
 * @member {String} VirtualName
 */

ScheduledInstancesBlockDeviceMapping.prototype['VirtualName'] = undefined;
var _default = ScheduledInstancesBlockDeviceMapping;
exports["default"] = _default;