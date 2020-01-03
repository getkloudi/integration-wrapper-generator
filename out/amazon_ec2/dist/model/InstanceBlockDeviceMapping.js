"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EbsInstanceBlockDevice = _interopRequireDefault(require("./EbsInstanceBlockDevice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceBlockDeviceMapping model module.
 * @module model/InstanceBlockDeviceMapping
 * @version 1.0.0
 */
var InstanceBlockDeviceMapping =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceBlockDeviceMapping</code>.
   * Describes a block device mapping.
   * @alias module:model/InstanceBlockDeviceMapping
   */
  function InstanceBlockDeviceMapping() {
    _classCallCheck(this, InstanceBlockDeviceMapping);

    InstanceBlockDeviceMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceBlockDeviceMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceBlockDeviceMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceBlockDeviceMapping} obj Optional instance to populate.
     * @return {module:model/InstanceBlockDeviceMapping} The populated <code>InstanceBlockDeviceMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceBlockDeviceMapping();

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('Ebs')) {
          obj['Ebs'] = _EbsInstanceBlockDevice["default"].constructFromObject(data['Ebs']);
        }
      }

      return obj;
    }
  }]);

  return InstanceBlockDeviceMapping;
}();
/**
 * @member {String} DeviceName
 */


InstanceBlockDeviceMapping.prototype['DeviceName'] = undefined;
/**
 * @member {module:model/EbsInstanceBlockDevice} Ebs
 */

InstanceBlockDeviceMapping.prototype['Ebs'] = undefined;
var _default = InstanceBlockDeviceMapping;
exports["default"] = _default;