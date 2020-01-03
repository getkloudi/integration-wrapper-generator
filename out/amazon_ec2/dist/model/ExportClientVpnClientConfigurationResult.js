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
 * The ExportClientVpnClientConfigurationResult model module.
 * @module model/ExportClientVpnClientConfigurationResult
 * @version 1.0.0
 */
var ExportClientVpnClientConfigurationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportClientVpnClientConfigurationResult</code>.
   * @alias module:model/ExportClientVpnClientConfigurationResult
   */
  function ExportClientVpnClientConfigurationResult() {
    _classCallCheck(this, ExportClientVpnClientConfigurationResult);

    ExportClientVpnClientConfigurationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportClientVpnClientConfigurationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportClientVpnClientConfigurationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportClientVpnClientConfigurationResult} obj Optional instance to populate.
     * @return {module:model/ExportClientVpnClientConfigurationResult} The populated <code>ExportClientVpnClientConfigurationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportClientVpnClientConfigurationResult();

        if (data.hasOwnProperty('ClientConfiguration')) {
          obj['ClientConfiguration'] = _ApiClient["default"].convertToType(data['ClientConfiguration'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportClientVpnClientConfigurationResult;
}();
/**
 * @member {String} ClientConfiguration
 */


ExportClientVpnClientConfigurationResult.prototype['ClientConfiguration'] = undefined;
var _default = ExportClientVpnClientConfigurationResult;
exports["default"] = _default;