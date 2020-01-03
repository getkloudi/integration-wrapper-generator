"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageDescription = _interopRequireDefault(require("./DiskImageDescription"));

var _DiskImageVolumeDescription = _interopRequireDefault(require("./DiskImageVolumeDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportVolumeTaskDetails model module.
 * @module model/ImportVolumeTaskDetails
 * @version 1.0.0
 */
var ImportVolumeTaskDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportVolumeTaskDetails</code>.
   * Describes an import volume task.
   * @alias module:model/ImportVolumeTaskDetails
   */
  function ImportVolumeTaskDetails() {
    _classCallCheck(this, ImportVolumeTaskDetails);

    ImportVolumeTaskDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportVolumeTaskDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportVolumeTaskDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportVolumeTaskDetails} obj Optional instance to populate.
     * @return {module:model/ImportVolumeTaskDetails} The populated <code>ImportVolumeTaskDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportVolumeTaskDetails();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('BytesConverted')) {
          obj['BytesConverted'] = _ApiClient["default"].convertToType(data['BytesConverted'], 'Number');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _DiskImageDescription["default"].constructFromObject(data['Image']);
        }

        if (data.hasOwnProperty('Volume')) {
          obj['Volume'] = _DiskImageVolumeDescription["default"].constructFromObject(data['Volume']);
        }
      }

      return obj;
    }
  }]);

  return ImportVolumeTaskDetails;
}();
/**
 * @member {String} AvailabilityZone
 */


ImportVolumeTaskDetails.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Number} BytesConverted
 */

ImportVolumeTaskDetails.prototype['BytesConverted'] = undefined;
/**
 * @member {String} Description
 */

ImportVolumeTaskDetails.prototype['Description'] = undefined;
/**
 * @member {module:model/DiskImageDescription} Image
 */

ImportVolumeTaskDetails.prototype['Image'] = undefined;
/**
 * @member {module:model/DiskImageVolumeDescription} Volume
 */

ImportVolumeTaskDetails.prototype['Volume'] = undefined;
var _default = ImportVolumeTaskDetails;
exports["default"] = _default;