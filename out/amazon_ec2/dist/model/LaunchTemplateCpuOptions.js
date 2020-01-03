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
 * The LaunchTemplateCpuOptions model module.
 * @module model/LaunchTemplateCpuOptions
 * @version 1.0.0
 */
var LaunchTemplateCpuOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateCpuOptions</code>.
   * The CPU options for the instance.
   * @alias module:model/LaunchTemplateCpuOptions
   */
  function LaunchTemplateCpuOptions() {
    _classCallCheck(this, LaunchTemplateCpuOptions);

    LaunchTemplateCpuOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateCpuOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateCpuOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateCpuOptions} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateCpuOptions} The populated <code>LaunchTemplateCpuOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateCpuOptions();

        if (data.hasOwnProperty('CoreCount')) {
          obj['CoreCount'] = _ApiClient["default"].convertToType(data['CoreCount'], 'Number');
        }

        if (data.hasOwnProperty('ThreadsPerCore')) {
          obj['ThreadsPerCore'] = _ApiClient["default"].convertToType(data['ThreadsPerCore'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateCpuOptions;
}();
/**
 * @member {Number} CoreCount
 */


LaunchTemplateCpuOptions.prototype['CoreCount'] = undefined;
/**
 * @member {Number} ThreadsPerCore
 */

LaunchTemplateCpuOptions.prototype['ThreadsPerCore'] = undefined;
var _default = LaunchTemplateCpuOptions;
exports["default"] = _default;