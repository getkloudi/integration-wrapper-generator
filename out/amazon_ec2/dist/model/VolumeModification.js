"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeModificationState = _interopRequireDefault(require("./VolumeModificationState"));

var _VolumeType = _interopRequireDefault(require("./VolumeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VolumeModification model module.
 * @module model/VolumeModification
 * @version 1.1.0
 */
var VolumeModification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeModification</code>.
   * &lt;p&gt;Describes the modification status of an EBS volume.&lt;/p&gt; &lt;p&gt;If the volume has never been modified, some element values will be null.&lt;/p&gt;
   * @alias module:model/VolumeModification
   */
  function VolumeModification() {
    _classCallCheck(this, VolumeModification);

    VolumeModification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeModification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeModification} obj Optional instance to populate.
     * @return {module:model/VolumeModification} The populated <code>VolumeModification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeModification();

        if (data.hasOwnProperty('EndTime')) {
          obj['EndTime'] = _ApiClient["default"].convertToType(data['EndTime'], 'Date');
        }

        if (data.hasOwnProperty('ModificationState')) {
          obj['ModificationState'] = _VolumeModificationState["default"].constructFromObject(data['ModificationState']);
        }

        if (data.hasOwnProperty('OriginalIops')) {
          obj['OriginalIops'] = _ApiClient["default"].convertToType(data['OriginalIops'], 'Number');
        }

        if (data.hasOwnProperty('OriginalSize')) {
          obj['OriginalSize'] = _ApiClient["default"].convertToType(data['OriginalSize'], 'Number');
        }

        if (data.hasOwnProperty('OriginalVolumeType')) {
          obj['OriginalVolumeType'] = _VolumeType["default"].constructFromObject(data['OriginalVolumeType']);
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'Number');
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('TargetIops')) {
          obj['TargetIops'] = _ApiClient["default"].convertToType(data['TargetIops'], 'Number');
        }

        if (data.hasOwnProperty('TargetSize')) {
          obj['TargetSize'] = _ApiClient["default"].convertToType(data['TargetSize'], 'Number');
        }

        if (data.hasOwnProperty('TargetVolumeType')) {
          obj['TargetVolumeType'] = _VolumeType["default"].constructFromObject(data['TargetVolumeType']);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VolumeModification;
}();
/**
 * @member {Date} EndTime
 */


VolumeModification.prototype['EndTime'] = undefined;
/**
 * @member {module:model/VolumeModificationState} ModificationState
 */

VolumeModification.prototype['ModificationState'] = undefined;
/**
 * @member {Number} OriginalIops
 */

VolumeModification.prototype['OriginalIops'] = undefined;
/**
 * @member {Number} OriginalSize
 */

VolumeModification.prototype['OriginalSize'] = undefined;
/**
 * @member {module:model/VolumeType} OriginalVolumeType
 */

VolumeModification.prototype['OriginalVolumeType'] = undefined;
/**
 * @member {Number} Progress
 */

VolumeModification.prototype['Progress'] = undefined;
/**
 * @member {Date} StartTime
 */

VolumeModification.prototype['StartTime'] = undefined;
/**
 * @member {String} StatusMessage
 */

VolumeModification.prototype['StatusMessage'] = undefined;
/**
 * @member {Number} TargetIops
 */

VolumeModification.prototype['TargetIops'] = undefined;
/**
 * @member {Number} TargetSize
 */

VolumeModification.prototype['TargetSize'] = undefined;
/**
 * @member {module:model/VolumeType} TargetVolumeType
 */

VolumeModification.prototype['TargetVolumeType'] = undefined;
/**
 * @member {String} VolumeId
 */

VolumeModification.prototype['VolumeId'] = undefined;
var _default = VolumeModification;
exports["default"] = _default;