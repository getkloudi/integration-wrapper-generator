"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GatewayType = _interopRequireDefault(require("./GatewayType"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VpcAttachment = _interopRequireDefault(require("./VpcAttachment"));

var _VpnState = _interopRequireDefault(require("./VpnState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpnGateway model module.
 * @module model/VpnGateway
 * @version 1.1.0
 */
var VpnGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpnGateway</code>.
   * Describes a virtual private gateway.
   * @alias module:model/VpnGateway
   */
  function VpnGateway() {
    _classCallCheck(this, VpnGateway);

    VpnGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpnGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpnGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpnGateway} obj Optional instance to populate.
     * @return {module:model/VpnGateway} The populated <code>VpnGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpnGateway();

        if (data.hasOwnProperty('AmazonSideAsn')) {
          obj['AmazonSideAsn'] = _ApiClient["default"].convertToType(data['AmazonSideAsn'], 'Number');
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VpnState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _GatewayType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('VpcAttachments')) {
          obj['VpcAttachments'] = _ApiClient["default"].convertToType(data['VpcAttachments'], [_VpcAttachment["default"]]);
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpnGateway;
}();
/**
 * @member {Number} AmazonSideAsn
 */


VpnGateway.prototype['AmazonSideAsn'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

VpnGateway.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/VpnState} State
 */

VpnGateway.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

VpnGateway.prototype['Tags'] = undefined;
/**
 * @member {module:model/GatewayType} Type
 */

VpnGateway.prototype['Type'] = undefined;
/**
 * @member {Array.<module:model/VpcAttachment>} VpcAttachments
 */

VpnGateway.prototype['VpcAttachments'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

VpnGateway.prototype['VpnGatewayId'] = undefined;
var _default = VpnGateway;
exports["default"] = _default;