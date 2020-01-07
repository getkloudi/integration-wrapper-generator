"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IpPermission = _interopRequireDefault(require("./IpPermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RevokeSecurityGroupIngressRequest model module.
 * @module model/RevokeSecurityGroupIngressRequest
 * @version 1.1.0
 */
var RevokeSecurityGroupIngressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RevokeSecurityGroupIngressRequest</code>.
   * @alias module:model/RevokeSecurityGroupIngressRequest
   */
  function RevokeSecurityGroupIngressRequest() {
    _classCallCheck(this, RevokeSecurityGroupIngressRequest);

    RevokeSecurityGroupIngressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeSecurityGroupIngressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RevokeSecurityGroupIngressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeSecurityGroupIngressRequest} obj Optional instance to populate.
     * @return {module:model/RevokeSecurityGroupIngressRequest} The populated <code>RevokeSecurityGroupIngressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeSecurityGroupIngressRequest();

        if (data.hasOwnProperty('CidrIp')) {
          obj['CidrIp'] = _ApiClient["default"].convertToType(data['CidrIp'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('FromPort')) {
          obj['FromPort'] = _ApiClient["default"].convertToType(data['FromPort'], 'Number');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('IpPermissions')) {
          obj['IpPermissions'] = _ApiClient["default"].convertToType(data['IpPermissions'], [_IpPermission["default"]]);
        }

        if (data.hasOwnProperty('IpProtocol')) {
          obj['IpProtocol'] = _ApiClient["default"].convertToType(data['IpProtocol'], 'String');
        }

        if (data.hasOwnProperty('SourceSecurityGroupName')) {
          obj['SourceSecurityGroupName'] = _ApiClient["default"].convertToType(data['SourceSecurityGroupName'], 'String');
        }

        if (data.hasOwnProperty('SourceSecurityGroupOwnerId')) {
          obj['SourceSecurityGroupOwnerId'] = _ApiClient["default"].convertToType(data['SourceSecurityGroupOwnerId'], 'String');
        }

        if (data.hasOwnProperty('ToPort')) {
          obj['ToPort'] = _ApiClient["default"].convertToType(data['ToPort'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RevokeSecurityGroupIngressRequest;
}();
/**
 * @member {String} CidrIp
 */


RevokeSecurityGroupIngressRequest.prototype['CidrIp'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RevokeSecurityGroupIngressRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} FromPort
 */

RevokeSecurityGroupIngressRequest.prototype['FromPort'] = undefined;
/**
 * @member {String} GroupId
 */

RevokeSecurityGroupIngressRequest.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

RevokeSecurityGroupIngressRequest.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

RevokeSecurityGroupIngressRequest.prototype['IpPermissions'] = undefined;
/**
 * @member {String} IpProtocol
 */

RevokeSecurityGroupIngressRequest.prototype['IpProtocol'] = undefined;
/**
 * @member {String} SourceSecurityGroupName
 */

RevokeSecurityGroupIngressRequest.prototype['SourceSecurityGroupName'] = undefined;
/**
 * @member {String} SourceSecurityGroupOwnerId
 */

RevokeSecurityGroupIngressRequest.prototype['SourceSecurityGroupOwnerId'] = undefined;
/**
 * @member {Number} ToPort
 */

RevokeSecurityGroupIngressRequest.prototype['ToPort'] = undefined;
var _default = RevokeSecurityGroupIngressRequest;
exports["default"] = _default;