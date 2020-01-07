"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MembershipType = _interopRequireDefault(require("./MembershipType"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayMulticastGroup model module.
 * @module model/TransitGatewayMulticastGroup
 * @version 1.1.0
 */
var TransitGatewayMulticastGroup =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastGroup</code>.
   * Describes the transit gateway multicast group resources.
   * @alias module:model/TransitGatewayMulticastGroup
   */
  function TransitGatewayMulticastGroup() {
    _classCallCheck(this, TransitGatewayMulticastGroup);

    TransitGatewayMulticastGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastGroup} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastGroup} The populated <code>TransitGatewayMulticastGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastGroup();

        if (data.hasOwnProperty('GroupIpAddress')) {
          obj['GroupIpAddress'] = _ApiClient["default"].convertToType(data['GroupIpAddress'], 'String');
        }

        if (data.hasOwnProperty('GroupMember')) {
          obj['GroupMember'] = _ApiClient["default"].convertToType(data['GroupMember'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupSource')) {
          obj['GroupSource'] = _ApiClient["default"].convertToType(data['GroupSource'], 'Boolean');
        }

        if (data.hasOwnProperty('MemberType')) {
          obj['MemberType'] = _MembershipType["default"].constructFromObject(data['MemberType']);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('SourceType')) {
          obj['SourceType'] = _MembershipType["default"].constructFromObject(data['SourceType']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastGroup;
}();
/**
 * @member {String} GroupIpAddress
 */


TransitGatewayMulticastGroup.prototype['GroupIpAddress'] = undefined;
/**
 * @member {Boolean} GroupMember
 */

TransitGatewayMulticastGroup.prototype['GroupMember'] = undefined;
/**
 * @member {Boolean} GroupSource
 */

TransitGatewayMulticastGroup.prototype['GroupSource'] = undefined;
/**
 * @member {module:model/MembershipType} MemberType
 */

TransitGatewayMulticastGroup.prototype['MemberType'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

TransitGatewayMulticastGroup.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} ResourceId
 */

TransitGatewayMulticastGroup.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayMulticastGroup.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/MembershipType} SourceType
 */

TransitGatewayMulticastGroup.prototype['SourceType'] = undefined;
/**
 * @member {String} SubnetId
 */

TransitGatewayMulticastGroup.prototype['SubnetId'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayMulticastGroup.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = TransitGatewayMulticastGroup;
exports["default"] = _default;