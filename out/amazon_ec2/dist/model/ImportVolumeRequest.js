"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageDetail = _interopRequireDefault(require("./DiskImageDetail"));

var _VolumeDetail = _interopRequireDefault(require("./VolumeDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportVolumeRequest model module.
 * @module model/ImportVolumeRequest
 * @version 1.1.0
 */
var ImportVolumeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportVolumeRequest</code>.
   * @alias module:model/ImportVolumeRequest
   * @param availabilityZone {String} 
   * @param image {module:model/DiskImageDetail} 
   * @param volume {module:model/VolumeDetail} 
   */
  function ImportVolumeRequest(availabilityZone, image, volume) {
    _classCallCheck(this, ImportVolumeRequest);

    ImportVolumeRequest.initialize(this, availabilityZone, image, volume);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportVolumeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, availabilityZone, image, volume) {
      obj['AvailabilityZone'] = availabilityZone;
      obj['Image'] = image;
      obj['Volume'] = volume;
    }
    /**
     * Constructs a <code>ImportVolumeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportVolumeRequest} obj Optional instance to populate.
     * @return {module:model/ImportVolumeRequest} The populated <code>ImportVolumeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportVolumeRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _DiskImageDetail["default"].constructFromObject(data['Image']);
        }

        if (data.hasOwnProperty('Volume')) {
          obj['Volume'] = _VolumeDetail["default"].constructFromObject(data['Volume']);
        }
      }

      return obj;
    }
  }]);

  return ImportVolumeRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


ImportVolumeRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} Description
 */

ImportVolumeRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ImportVolumeRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/DiskImageDetail} Image
 */

ImportVolumeRequest.prototype['Image'] = undefined;
/**
 * @member {module:model/VolumeDetail} Volume
 */

ImportVolumeRequest.prototype['Volume'] = undefined;
var _default = ImportVolumeRequest;
exports["default"] = _default;