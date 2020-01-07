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
 * The LicenseConfiguration model module.
 * @module model/LicenseConfiguration
 * @version 1.1.0
 */
var LicenseConfiguration =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LicenseConfiguration</code>.
   * Describes a license configuration.
   * @alias module:model/LicenseConfiguration
   */
  function LicenseConfiguration() {
    _classCallCheck(this, LicenseConfiguration);

    LicenseConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LicenseConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LicenseConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseConfiguration} obj Optional instance to populate.
     * @return {module:model/LicenseConfiguration} The populated <code>LicenseConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LicenseConfiguration();

        if (data.hasOwnProperty('LicenseConfigurationArn')) {
          obj['LicenseConfigurationArn'] = _ApiClient["default"].convertToType(data['LicenseConfigurationArn'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LicenseConfiguration;
}();
/**
 * @member {String} LicenseConfigurationArn
 */


LicenseConfiguration.prototype['LicenseConfigurationArn'] = undefined;
var _default = LicenseConfiguration;
exports["default"] = _default;