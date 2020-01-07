"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientData = _interopRequireDefault(require("./ClientData"));

var _ImageDiskContainer = _interopRequireDefault(require("./ImageDiskContainer"));

var _ImportImageLicenseConfigurationRequest = _interopRequireDefault(require("./ImportImageLicenseConfigurationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportImageRequest model module.
 * @module model/ImportImageRequest
 * @version 1.1.0
 */
var ImportImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportImageRequest</code>.
   * @alias module:model/ImportImageRequest
   */
  function ImportImageRequest() {
    _classCallCheck(this, ImportImageRequest);

    ImportImageRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageRequest} obj Optional instance to populate.
     * @return {module:model/ImportImageRequest} The populated <code>ImportImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportImageRequest();

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ApiClient["default"].convertToType(data['Architecture'], 'String');
        }

        if (data.hasOwnProperty('ClientData')) {
          obj['ClientData'] = _ClientData["default"].constructFromObject(data['ClientData']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskContainers')) {
          obj['DiskContainers'] = _ApiClient["default"].convertToType(data['DiskContainers'], [_ImageDiskContainer["default"]]);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Hypervisor')) {
          obj['Hypervisor'] = _ApiClient["default"].convertToType(data['Hypervisor'], 'String');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('LicenseSpecifications')) {
          obj['LicenseSpecifications'] = _ApiClient["default"].convertToType(data['LicenseSpecifications'], [_ImportImageLicenseConfigurationRequest["default"]]);
        }

        if (data.hasOwnProperty('LicenseType')) {
          obj['LicenseType'] = _ApiClient["default"].convertToType(data['LicenseType'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('RoleName')) {
          obj['RoleName'] = _ApiClient["default"].convertToType(data['RoleName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportImageRequest;
}();
/**
 * @member {String} Architecture
 */


ImportImageRequest.prototype['Architecture'] = undefined;
/**
 * @member {module:model/ClientData} ClientData
 */

ImportImageRequest.prototype['ClientData'] = undefined;
/**
 * @member {String} ClientToken
 */

ImportImageRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

ImportImageRequest.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/ImageDiskContainer>} DiskContainers
 */

ImportImageRequest.prototype['DiskContainers'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ImportImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

ImportImageRequest.prototype['Encrypted'] = undefined;
/**
 * @member {String} Hypervisor
 */

ImportImageRequest.prototype['Hypervisor'] = undefined;
/**
 * @member {String} KmsKeyId
 */

ImportImageRequest.prototype['KmsKeyId'] = undefined;
/**
 * @member {Array.<module:model/ImportImageLicenseConfigurationRequest>} LicenseSpecifications
 */

ImportImageRequest.prototype['LicenseSpecifications'] = undefined;
/**
 * @member {String} LicenseType
 */

ImportImageRequest.prototype['LicenseType'] = undefined;
/**
 * @member {String} Platform
 */

ImportImageRequest.prototype['Platform'] = undefined;
/**
 * @member {String} RoleName
 */

ImportImageRequest.prototype['RoleName'] = undefined;
var _default = ImportImageRequest;
exports["default"] = _default;