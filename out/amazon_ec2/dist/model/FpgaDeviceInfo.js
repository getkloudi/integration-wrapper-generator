"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaDeviceMemoryInfo = _interopRequireDefault(require("./FpgaDeviceMemoryInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FpgaDeviceInfo model module.
 * @module model/FpgaDeviceInfo
 * @version 1.0.0
 */
var FpgaDeviceInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FpgaDeviceInfo</code>.
   * Describes the FPGA accelerator for the instance type.
   * @alias module:model/FpgaDeviceInfo
   */
  function FpgaDeviceInfo() {
    _classCallCheck(this, FpgaDeviceInfo);

    FpgaDeviceInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FpgaDeviceInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FpgaDeviceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FpgaDeviceInfo} obj Optional instance to populate.
     * @return {module:model/FpgaDeviceInfo} The populated <code>FpgaDeviceInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FpgaDeviceInfo();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Manufacturer')) {
          obj['Manufacturer'] = _ApiClient["default"].convertToType(data['Manufacturer'], 'String');
        }

        if (data.hasOwnProperty('MemoryInfo')) {
          obj['MemoryInfo'] = _FpgaDeviceMemoryInfo["default"].constructFromObject(data['MemoryInfo']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FpgaDeviceInfo;
}();
/**
 * @member {Number} Count
 */


FpgaDeviceInfo.prototype['Count'] = undefined;
/**
 * @member {String} Manufacturer
 */

FpgaDeviceInfo.prototype['Manufacturer'] = undefined;
/**
 * @member {module:model/FpgaDeviceMemoryInfo} MemoryInfo
 */

FpgaDeviceInfo.prototype['MemoryInfo'] = undefined;
/**
 * @member {String} Name
 */

FpgaDeviceInfo.prototype['Name'] = undefined;
var _default = FpgaDeviceInfo;
exports["default"] = _default;