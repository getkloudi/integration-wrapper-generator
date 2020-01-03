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
 * The UpdateSecurityGroupRuleDescriptionsIngressRequest model module.
 * @module model/UpdateSecurityGroupRuleDescriptionsIngressRequest
 * @version 1.0.0
 */
var UpdateSecurityGroupRuleDescriptionsIngressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UpdateSecurityGroupRuleDescriptionsIngressRequest</code>.
   * @alias module:model/UpdateSecurityGroupRuleDescriptionsIngressRequest
   * @param ipPermissions {Array.<module:model/IpPermission>} 
   */
  function UpdateSecurityGroupRuleDescriptionsIngressRequest(ipPermissions) {
    _classCallCheck(this, UpdateSecurityGroupRuleDescriptionsIngressRequest);

    UpdateSecurityGroupRuleDescriptionsIngressRequest.initialize(this, ipPermissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateSecurityGroupRuleDescriptionsIngressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, ipPermissions) {
      obj['IpPermissions'] = ipPermissions;
    }
    /**
     * Constructs a <code>UpdateSecurityGroupRuleDescriptionsIngressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSecurityGroupRuleDescriptionsIngressRequest} obj Optional instance to populate.
     * @return {module:model/UpdateSecurityGroupRuleDescriptionsIngressRequest} The populated <code>UpdateSecurityGroupRuleDescriptionsIngressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateSecurityGroupRuleDescriptionsIngressRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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
      }

      return obj;
    }
  }]);

  return UpdateSecurityGroupRuleDescriptionsIngressRequest;
}();
/**
 * @member {Boolean} DryRun
 */


UpdateSecurityGroupRuleDescriptionsIngressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupId
 */

UpdateSecurityGroupRuleDescriptionsIngressRequest.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

UpdateSecurityGroupRuleDescriptionsIngressRequest.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

UpdateSecurityGroupRuleDescriptionsIngressRequest.prototype['IpPermissions'] = undefined;
var _default = UpdateSecurityGroupRuleDescriptionsIngressRequest;
exports["default"] = _default;