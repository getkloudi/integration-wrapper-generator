"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GpuDeviceMemoryInfo = _interopRequireDefault(require("./GpuDeviceMemoryInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GpuDeviceInfo model module.
 * @module model/GpuDeviceInfo
 * @version 1.1.0
 */
var GpuDeviceInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GpuDeviceInfo</code>.
   * Describes the GPU accelerators for the instance type.
   * @alias module:model/GpuDeviceInfo
   */
  function GpuDeviceInfo() {
    _classCallCheck(this, GpuDeviceInfo);

    GpuDeviceInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GpuDeviceInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GpuDeviceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpuDeviceInfo} obj Optional instance to populate.
     * @return {module:model/GpuDeviceInfo} The populated <code>GpuDeviceInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GpuDeviceInfo();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Manufacturer')) {
          obj['Manufacturer'] = _ApiClient["default"].convertToType(data['Manufacturer'], 'String');
        }

        if (data.hasOwnProperty('MemoryInfo')) {
          obj['MemoryInfo'] = _GpuDeviceMemoryInfo["default"].constructFromObject(data['MemoryInfo']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GpuDeviceInfo;
}();
/**
 * @member {Number} Count
 */


GpuDeviceInfo.prototype['Count'] = undefined;
/**
 * @member {String} Manufacturer
 */

GpuDeviceInfo.prototype['Manufacturer'] = undefined;
/**
 * @member {module:model/GpuDeviceMemoryInfo} MemoryInfo
 */

GpuDeviceInfo.prototype['MemoryInfo'] = undefined;
/**
 * @member {String} Name
 */

GpuDeviceInfo.prototype['Name'] = undefined;
var _default = GpuDeviceInfo;
exports["default"] = _default;