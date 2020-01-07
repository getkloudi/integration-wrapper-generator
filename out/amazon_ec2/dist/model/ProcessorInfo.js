"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ArchitectureType = _interopRequireDefault(require("./ArchitectureType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProcessorInfo model module.
 * @module model/ProcessorInfo
 * @version 1.1.0
 */
var ProcessorInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProcessorInfo</code>.
   * Describes the processor used by the instance type.
   * @alias module:model/ProcessorInfo
   */
  function ProcessorInfo() {
    _classCallCheck(this, ProcessorInfo);

    ProcessorInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessorInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessorInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessorInfo} obj Optional instance to populate.
     * @return {module:model/ProcessorInfo} The populated <code>ProcessorInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessorInfo();

        if (data.hasOwnProperty('SupportedArchitectures')) {
          obj['SupportedArchitectures'] = _ApiClient["default"].convertToType(data['SupportedArchitectures'], [_ArchitectureType["default"]]);
        }

        if (data.hasOwnProperty('SustainedClockSpeedInGhz')) {
          obj['SustainedClockSpeedInGhz'] = _ApiClient["default"].convertToType(data['SustainedClockSpeedInGhz'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProcessorInfo;
}();
/**
 * @member {Array.<module:model/ArchitectureType>} SupportedArchitectures
 */


ProcessorInfo.prototype['SupportedArchitectures'] = undefined;
/**
 * @member {Number} SustainedClockSpeedInGhz
 */

ProcessorInfo.prototype['SustainedClockSpeedInGhz'] = undefined;
var _default = ProcessorInfo;
exports["default"] = _default;