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
 * The UpdateSecurityGroupRuleDescriptionsEgressRequest model module.
 * @module model/UpdateSecurityGroupRuleDescriptionsEgressRequest
 * @version 1.1.0
 */
var UpdateSecurityGroupRuleDescriptionsEgressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UpdateSecurityGroupRuleDescriptionsEgressRequest</code>.
   * @alias module:model/UpdateSecurityGroupRuleDescriptionsEgressRequest
   * @param ipPermissions {Array.<module:model/IpPermission>} 
   */
  function UpdateSecurityGroupRuleDescriptionsEgressRequest(ipPermissions) {
    _classCallCheck(this, UpdateSecurityGroupRuleDescriptionsEgressRequest);

    UpdateSecurityGroupRuleDescriptionsEgressRequest.initialize(this, ipPermissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateSecurityGroupRuleDescriptionsEgressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, ipPermissions) {
      obj['IpPermissions'] = ipPermissions;
    }
    /**
     * Constructs a <code>UpdateSecurityGroupRuleDescriptionsEgressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSecurityGroupRuleDescriptionsEgressRequest} obj Optional instance to populate.
     * @return {module:model/UpdateSecurityGroupRuleDescriptionsEgressRequest} The populated <code>UpdateSecurityGroupRuleDescriptionsEgressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateSecurityGroupRuleDescriptionsEgressRequest();

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

  return UpdateSecurityGroupRuleDescriptionsEgressRequest;
}();
/**
 * @member {Boolean} DryRun
 */


UpdateSecurityGroupRuleDescriptionsEgressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupId
 */

UpdateSecurityGroupRuleDescriptionsEgressRequest.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

UpdateSecurityGroupRuleDescriptionsEgressRequest.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

UpdateSecurityGroupRuleDescriptionsEgressRequest.prototype['IpPermissions'] = undefined;
var _default = UpdateSecurityGroupRuleDescriptionsEgressRequest;
exports["default"] = _default;