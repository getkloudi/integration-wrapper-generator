"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttachmentStatus = _interopRequireDefault(require("./AttachmentStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkInterfaceAttachment model module.
 * @module model/NetworkInterfaceAttachment
 * @version 1.1.0
 */
var NetworkInterfaceAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkInterfaceAttachment</code>.
   * Describes a network interface attachment.
   * @alias module:model/NetworkInterfaceAttachment
   */
  function NetworkInterfaceAttachment() {
    _classCallCheck(this, NetworkInterfaceAttachment);

    NetworkInterfaceAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkInterfaceAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkInterfaceAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkInterfaceAttachment} obj Optional instance to populate.
     * @return {module:model/NetworkInterfaceAttachment} The populated <code>NetworkInterfaceAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkInterfaceAttachment();

        if (data.hasOwnProperty('AttachTime')) {
          obj['AttachTime'] = _ApiClient["default"].convertToType(data['AttachTime'], 'Date');
        }

        if (data.hasOwnProperty('AttachmentId')) {
          obj['AttachmentId'] = _ApiClient["default"].convertToType(data['AttachmentId'], 'String');
        }

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('DeviceIndex')) {
          obj['DeviceIndex'] = _ApiClient["default"].convertToType(data['DeviceIndex'], 'Number');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceOwnerId')) {
          obj['InstanceOwnerId'] = _ApiClient["default"].convertToType(data['InstanceOwnerId'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _AttachmentStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return NetworkInterfaceAttachment;
}();
/**
 * @member {Date} AttachTime
 */


NetworkInterfaceAttachment.prototype['AttachTime'] = undefined;
/**
 * @member {String} AttachmentId
 */

NetworkInterfaceAttachment.prototype['AttachmentId'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

NetworkInterfaceAttachment.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {Number} DeviceIndex
 */

NetworkInterfaceAttachment.prototype['DeviceIndex'] = undefined;
/**
 * @member {String} InstanceId
 */

NetworkInterfaceAttachment.prototype['InstanceId'] = undefined;
/**
 * @member {String} InstanceOwnerId
 */

NetworkInterfaceAttachment.prototype['InstanceOwnerId'] = undefined;
/**
 * @member {module:model/AttachmentStatus} Status
 */

NetworkInterfaceAttachment.prototype['Status'] = undefined;
var _default = NetworkInterfaceAttachment;
exports["default"] = _default;