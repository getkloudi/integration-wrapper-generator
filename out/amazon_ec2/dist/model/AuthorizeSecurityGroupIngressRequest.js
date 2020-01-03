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
 * The AuthorizeSecurityGroupIngressRequest model module.
 * @module model/AuthorizeSecurityGroupIngressRequest
 * @version 1.0.0
 */
var AuthorizeSecurityGroupIngressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AuthorizeSecurityGroupIngressRequest</code>.
   * @alias module:model/AuthorizeSecurityGroupIngressRequest
   */
  function AuthorizeSecurityGroupIngressRequest() {
    _classCallCheck(this, AuthorizeSecurityGroupIngressRequest);

    AuthorizeSecurityGroupIngressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthorizeSecurityGroupIngressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthorizeSecurityGroupIngressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorizeSecurityGroupIngressRequest} obj Optional instance to populate.
     * @return {module:model/AuthorizeSecurityGroupIngressRequest} The populated <code>AuthorizeSecurityGroupIngressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthorizeSecurityGroupIngressRequest();

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

  return AuthorizeSecurityGroupIngressRequest;
}();
/**
 * @member {String} CidrIp
 */


AuthorizeSecurityGroupIngressRequest.prototype['CidrIp'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AuthorizeSecurityGroupIngressRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} FromPort
 */

AuthorizeSecurityGroupIngressRequest.prototype['FromPort'] = undefined;
/**
 * @member {String} GroupId
 */

AuthorizeSecurityGroupIngressRequest.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

AuthorizeSecurityGroupIngressRequest.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

AuthorizeSecurityGroupIngressRequest.prototype['IpPermissions'] = undefined;
/**
 * @member {String} IpProtocol
 */

AuthorizeSecurityGroupIngressRequest.prototype['IpProtocol'] = undefined;
/**
 * @member {String} SourceSecurityGroupName
 */

AuthorizeSecurityGroupIngressRequest.prototype['SourceSecurityGroupName'] = undefined;
/**
 * @member {String} SourceSecurityGroupOwnerId
 */

AuthorizeSecurityGroupIngressRequest.prototype['SourceSecurityGroupOwnerId'] = undefined;
/**
 * @member {Number} ToPort
 */

AuthorizeSecurityGroupIngressRequest.prototype['ToPort'] = undefined;
var _default = AuthorizeSecurityGroupIngressRequest;
exports["default"] = _default;