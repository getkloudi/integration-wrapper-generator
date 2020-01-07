"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaDeviceInfo = _interopRequireDefault(require("./FpgaDeviceInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FpgaInfo model module.
 * @module model/FpgaInfo
 * @version 1.1.0
 */
var FpgaInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FpgaInfo</code>.
   * Describes the FPGAs for the instance type.
   * @alias module:model/FpgaInfo
   */
  function FpgaInfo() {
    _classCallCheck(this, FpgaInfo);

    FpgaInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FpgaInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FpgaInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FpgaInfo} obj Optional instance to populate.
     * @return {module:model/FpgaInfo} The populated <code>FpgaInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FpgaInfo();

        if (data.hasOwnProperty('Fpgas')) {
          obj['Fpgas'] = _ApiClient["default"].convertToType(data['Fpgas'], [_FpgaDeviceInfo["default"]]);
        }

        if (data.hasOwnProperty('TotalFpgaMemoryInMiB')) {
          obj['TotalFpgaMemoryInMiB'] = _ApiClient["default"].convertToType(data['TotalFpgaMemoryInMiB'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FpgaInfo;
}();
/**
 * @member {Array.<module:model/FpgaDeviceInfo>} Fpgas
 */


FpgaInfo.prototype['Fpgas'] = undefined;
/**
 * @member {Number} TotalFpgaMemoryInMiB
 */

FpgaInfo.prototype['TotalFpgaMemoryInMiB'] = undefined;
var _default = FpgaInfo;
exports["default"] = _default;