"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ImportImageLicenseConfigurationResponse = _interopRequireDefault(require("./ImportImageLicenseConfigurationResponse"));

var _SnapshotDetail = _interopRequireDefault(require("./SnapshotDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportImageResult model module.
 * @module model/ImportImageResult
 * @version 1.1.0
 */
var ImportImageResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportImageResult</code>.
   * @alias module:model/ImportImageResult
   */
  function ImportImageResult() {
    _classCallCheck(this, ImportImageResult);

    ImportImageResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportImageResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportImageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageResult} obj Optional instance to populate.
     * @return {module:model/ImportImageResult} The populated <code>ImportImageResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportImageResult();

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ApiClient["default"].convertToType(data['Architecture'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Hypervisor')) {
          obj['Hypervisor'] = _ApiClient["default"].convertToType(data['Hypervisor'], 'String');
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('ImportTaskId')) {
          obj['ImportTaskId'] = _ApiClient["default"].convertToType(data['ImportTaskId'], 'String');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('LicenseSpecifications')) {
          obj['LicenseSpecifications'] = _ApiClient["default"].convertToType(data['LicenseSpecifications'], [_ImportImageLicenseConfigurationResponse["default"]]);
        }

        if (data.hasOwnProperty('LicenseType')) {
          obj['LicenseType'] = _ApiClient["default"].convertToType(data['LicenseType'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'String');
        }

        if (data.hasOwnProperty('SnapshotDetails')) {
          obj['SnapshotDetails'] = _ApiClient["default"].convertToType(data['SnapshotDetails'], [_SnapshotDetail["default"]]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportImageResult;
}();
/**
 * @member {String} Architecture
 */


ImportImageResult.prototype['Architecture'] = undefined;
/**
 * @member {String} Description
 */

ImportImageResult.prototype['Description'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

ImportImageResult.prototype['Encrypted'] = undefined;
/**
 * @member {String} Hypervisor
 */

ImportImageResult.prototype['Hypervisor'] = undefined;
/**
 * @member {String} ImageId
 */

ImportImageResult.prototype['ImageId'] = undefined;
/**
 * @member {String} ImportTaskId
 */

ImportImageResult.prototype['ImportTaskId'] = undefined;
/**
 * @member {String} KmsKeyId
 */

ImportImageResult.prototype['KmsKeyId'] = undefined;
/**
 * @member {Array.<module:model/ImportImageLicenseConfigurationResponse>} LicenseSpecifications
 */

ImportImageResult.prototype['LicenseSpecifications'] = undefined;
/**
 * @member {String} LicenseType
 */

ImportImageResult.prototype['LicenseType'] = undefined;
/**
 * @member {String} Platform
 */

ImportImageResult.prototype['Platform'] = undefined;
/**
 * @member {String} Progress
 */

ImportImageResult.prototype['Progress'] = undefined;
/**
 * @member {Array.<module:model/SnapshotDetail>} SnapshotDetails
 */

ImportImageResult.prototype['SnapshotDetails'] = undefined;
/**
 * @member {String} Status
 */

ImportImageResult.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

ImportImageResult.prototype['StatusMessage'] = undefined;
var _default = ImportImageResult;
exports["default"] = _default;