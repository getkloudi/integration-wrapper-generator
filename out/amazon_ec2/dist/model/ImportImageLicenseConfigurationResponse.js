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
 * The ImportImageLicenseConfigurationResponse model module.
 * @module model/ImportImageLicenseConfigurationResponse
 * @version 1.1.0
 */
var ImportImageLicenseConfigurationResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportImageLicenseConfigurationResponse</code>.
   *  The response information for license configurations.
   * @alias module:model/ImportImageLicenseConfigurationResponse
   */
  function ImportImageLicenseConfigurationResponse() {
    _classCallCheck(this, ImportImageLicenseConfigurationResponse);

    ImportImageLicenseConfigurationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportImageLicenseConfigurationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportImageLicenseConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageLicenseConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/ImportImageLicenseConfigurationResponse} The populated <code>ImportImageLicenseConfigurationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportImageLicenseConfigurationResponse();

        if (data.hasOwnProperty('LicenseConfigurationArn')) {
          obj['LicenseConfigurationArn'] = _ApiClient["default"].convertToType(data['LicenseConfigurationArn'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportImageLicenseConfigurationResponse;
}();
/**
 * @member {String} LicenseConfigurationArn
 */


ImportImageLicenseConfigurationResponse.prototype['LicenseConfigurationArn'] = undefined;
var _default = ImportImageLicenseConfigurationResponse;
exports["default"] = _default;