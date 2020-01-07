"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImage = _interopRequireDefault(require("./DiskImage"));

var _ImportInstanceLaunchSpecification = _interopRequireDefault(require("./ImportInstanceLaunchSpecification"));

var _PlatformValues = _interopRequireDefault(require("./PlatformValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportInstanceRequest model module.
 * @module model/ImportInstanceRequest
 * @version 1.1.0
 */
var ImportInstanceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportInstanceRequest</code>.
   * @alias module:model/ImportInstanceRequest
   * @param platform {module:model/PlatformValues} 
   */
  function ImportInstanceRequest(platform) {
    _classCallCheck(this, ImportInstanceRequest);

    ImportInstanceRequest.initialize(this, platform);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportInstanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, platform) {
      obj['Platform'] = platform;
    }
    /**
     * Constructs a <code>ImportInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportInstanceRequest} obj Optional instance to populate.
     * @return {module:model/ImportInstanceRequest} The populated <code>ImportInstanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportInstanceRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskImages')) {
          obj['DiskImages'] = _ApiClient["default"].convertToType(data['DiskImages'], [_DiskImage["default"]]);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchSpecification')) {
          obj['LaunchSpecification'] = _ImportInstanceLaunchSpecification["default"].constructFromObject(data['LaunchSpecification']);
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _PlatformValues["default"].constructFromObject(data['Platform']);
        }
      }

      return obj;
    }
  }]);

  return ImportInstanceRequest;
}();
/**
 * @member {String} Description
 */


ImportInstanceRequest.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/DiskImage>} DiskImages
 */

ImportInstanceRequest.prototype['DiskImages'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ImportInstanceRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/ImportInstanceLaunchSpecification} LaunchSpecification
 */

ImportInstanceRequest.prototype['LaunchSpecification'] = undefined;
/**
 * @member {module:model/PlatformValues} Platform
 */

ImportInstanceRequest.prototype['Platform'] = undefined;
var _default = ImportInstanceRequest;
exports["default"] = _default;