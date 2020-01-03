"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeAttachmentState = _interopRequireDefault(require("./VolumeAttachmentState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VolumeAttachment model module.
 * @module model/VolumeAttachment
 * @version 1.0.0
 */
var VolumeAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeAttachment</code>.
   * Describes volume attachment details.
   * @alias module:model/VolumeAttachment
   */
  function VolumeAttachment() {
    _classCallCheck(this, VolumeAttachment);

    VolumeAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeAttachment} obj Optional instance to populate.
     * @return {module:model/VolumeAttachment} The populated <code>VolumeAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeAttachment();

        if (data.hasOwnProperty('AttachTime')) {
          obj['AttachTime'] = _ApiClient["default"].convertToType(data['AttachTime'], 'Date');
        }

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('Device')) {
          obj['Device'] = _ApiClient["default"].convertToType(data['Device'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VolumeAttachmentState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VolumeAttachment;
}();
/**
 * @member {Date} AttachTime
 */


VolumeAttachment.prototype['AttachTime'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

VolumeAttachment.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {String} Device
 */

VolumeAttachment.prototype['Device'] = undefined;
/**
 * @member {String} InstanceId
 */

VolumeAttachment.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/VolumeAttachmentState} State
 */

VolumeAttachment.prototype['State'] = undefined;
/**
 * @member {String} VolumeId
 */

VolumeAttachment.prototype['VolumeId'] = undefined;
var _default = VolumeAttachment;
exports["default"] = _default;