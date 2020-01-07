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
 * The RevokeSecurityGroupEgressRequest model module.
 * @module model/RevokeSecurityGroupEgressRequest
 * @version 1.1.0
 */
var RevokeSecurityGroupEgressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RevokeSecurityGroupEgressRequest</code>.
   * @alias module:model/RevokeSecurityGroupEgressRequest
   * @param groupId {String} 
   */
  function RevokeSecurityGroupEgressRequest(groupId) {
    _classCallCheck(this, RevokeSecurityGroupEgressRequest);

    RevokeSecurityGroupEgressRequest.initialize(this, groupId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeSecurityGroupEgressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, groupId) {
      obj['GroupId'] = groupId;
    }
    /**
     * Constructs a <code>RevokeSecurityGroupEgressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeSecurityGroupEgressRequest} obj Optional instance to populate.
     * @return {module:model/RevokeSecurityGroupEgressRequest} The populated <code>RevokeSecurityGroupEgressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeSecurityGroupEgressRequest();

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

  return RevokeSecurityGroupEgressRequest;
}();
/**
 * @member {String} CidrIp
 */


RevokeSecurityGroupEgressRequest.prototype['CidrIp'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RevokeSecurityGroupEgressRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} FromPort
 */

RevokeSecurityGroupEgressRequest.prototype['FromPort'] = undefined;
/**
 * @member {String} GroupId
 */

RevokeSecurityGroupEgressRequest.prototype['GroupId'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

RevokeSecurityGroupEgressRequest.prototype['IpPermissions'] = undefined;
/**
 * @member {String} IpProtocol
 */

RevokeSecurityGroupEgressRequest.prototype['IpProtocol'] = undefined;
/**
 * @member {String} SourceSecurityGroupName
 */

RevokeSecurityGroupEgressRequest.prototype['SourceSecurityGroupName'] = undefined;
/**
 * @member {String} SourceSecurityGroupOwnerId
 */

RevokeSecurityGroupEgressRequest.prototype['SourceSecurityGroupOwnerId'] = undefined;
/**
 * @member {Number} ToPort
 */

RevokeSecurityGroupEgressRequest.prototype['ToPort'] = undefined;
var _default = RevokeSecurityGroupEgressRequest;
exports["default"] = _default;