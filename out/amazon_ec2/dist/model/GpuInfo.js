"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GpuDeviceInfo = _interopRequireDefault(require("./GpuDeviceInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GpuInfo model module.
 * @module model/GpuInfo
 * @version 1.0.0
 */
var GpuInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GpuInfo</code>.
   * Describes the GPU accelerators for the instance type.
   * @alias module:model/GpuInfo
   */
  function GpuInfo() {
    _classCallCheck(this, GpuInfo);

    GpuInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GpuInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GpuInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpuInfo} obj Optional instance to populate.
     * @return {module:model/GpuInfo} The populated <code>GpuInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GpuInfo();

        if (data.hasOwnProperty('Gpus')) {
          obj['Gpus'] = _ApiClient["default"].convertToType(data['Gpus'], [_GpuDeviceInfo["default"]]);
        }

        if (data.hasOwnProperty('TotalGpuMemoryInMiB')) {
          obj['TotalGpuMemoryInMiB'] = _ApiClient["default"].convertToType(data['TotalGpuMemoryInMiB'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GpuInfo;
}();
/**
 * @member {Array.<module:model/GpuDeviceInfo>} Gpus
 */


GpuInfo.prototype['Gpus'] = undefined;
/**
 * @member {Number} TotalGpuMemoryInMiB
 */

GpuInfo.prototype['TotalGpuMemoryInMiB'] = undefined;
var _default = GpuInfo;
exports["default"] = _default;