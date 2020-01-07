"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VCpuInfo model module.
 * @module model/VCpuInfo
 * @version 1.1.0
 */
var VCpuInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VCpuInfo</code>.
   * Describes the vCPU configurations for the instance type.
   * @alias module:model/VCpuInfo
   */
  function VCpuInfo() {
    _classCallCheck(this, VCpuInfo);

    VCpuInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VCpuInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VCpuInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VCpuInfo} obj Optional instance to populate.
     * @return {module:model/VCpuInfo} The populated <code>VCpuInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VCpuInfo();

        if (data.hasOwnProperty('DefaultCores')) {
          obj['DefaultCores'] = _ApiClient["default"].convertToType(data['DefaultCores'], 'Number');
        }

        if (data.hasOwnProperty('DefaultThreadsPerCore')) {
          obj['DefaultThreadsPerCore'] = _ApiClient["default"].convertToType(data['DefaultThreadsPerCore'], 'Number');
        }

        if (data.hasOwnProperty('DefaultVCpus')) {
          obj['DefaultVCpus'] = _ApiClient["default"].convertToType(data['DefaultVCpus'], 'Number');
        }

        if (data.hasOwnProperty('ValidCores')) {
          obj['ValidCores'] = _ApiClient["default"].convertToType(data['ValidCores'], ['Number']);
        }

        if (data.hasOwnProperty('ValidThreadsPerCore')) {
          obj['ValidThreadsPerCore'] = _ApiClient["default"].convertToType(data['ValidThreadsPerCore'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return VCpuInfo;
}();
/**
 * @member {Number} DefaultCores
 */


VCpuInfo.prototype['DefaultCores'] = undefined;
/**
 * @member {Number} DefaultThreadsPerCore
 */

VCpuInfo.prototype['DefaultThreadsPerCore'] = undefined;
/**
 * @member {Number} DefaultVCpus
 */

VCpuInfo.prototype['DefaultVCpus'] = undefined;
/**
 * @member {Array.<Number>} ValidCores
 */

VCpuInfo.prototype['ValidCores'] = undefined;
/**
 * @member {Array.<Number>} ValidThreadsPerCore
 */

VCpuInfo.prototype['ValidThreadsPerCore'] = undefined;
var _default = VCpuInfo;
exports["default"] = _default;