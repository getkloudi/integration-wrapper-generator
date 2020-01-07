"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EbsInstanceBlockDeviceSpecification = _interopRequireDefault(require("./EbsInstanceBlockDeviceSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceBlockDeviceMappingSpecification model module.
 * @module model/InstanceBlockDeviceMappingSpecification
 * @version 1.1.0
 */
var InstanceBlockDeviceMappingSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceBlockDeviceMappingSpecification</code>.
   * Describes a block device mapping entry.
   * @alias module:model/InstanceBlockDeviceMappingSpecification
   */
  function InstanceBlockDeviceMappingSpecification() {
    _classCallCheck(this, InstanceBlockDeviceMappingSpecification);

    InstanceBlockDeviceMappingSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceBlockDeviceMappingSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceBlockDeviceMappingSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceBlockDeviceMappingSpecification} obj Optional instance to populate.
     * @return {module:model/InstanceBlockDeviceMappingSpecification} The populated <code>InstanceBlockDeviceMappingSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceBlockDeviceMappingSpecification();

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('Ebs')) {
          obj['Ebs'] = _EbsInstanceBlockDeviceSpecification["default"].constructFromObject(data['Ebs']);
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

  return InstanceBlockDeviceMappingSpecification;
}();
/**
 * @member {String} DeviceName
 */


InstanceBlockDeviceMappingSpecification.prototype['DeviceName'] = undefined;
/**
 * @member {module:model/EbsInstanceBlockDeviceSpecification} Ebs
 */

InstanceBlockDeviceMappingSpecification.prototype['Ebs'] = undefined;
/**
 * @member {String} NoDevice
 */

InstanceBlockDeviceMappingSpecification.prototype['NoDevice'] = undefined;
/**
 * @member {String} VirtualName
 */

InstanceBlockDeviceMappingSpecification.prototype['VirtualName'] = undefined;
var _default = InstanceBlockDeviceMappingSpecification;
exports["default"] = _default;