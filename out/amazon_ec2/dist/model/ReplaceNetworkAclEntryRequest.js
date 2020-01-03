"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IcmpTypeCode = _interopRequireDefault(require("./IcmpTypeCode"));

var _PortRange = _interopRequireDefault(require("./PortRange"));

var _RuleAction = _interopRequireDefault(require("./RuleAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReplaceNetworkAclEntryRequest model module.
 * @module model/ReplaceNetworkAclEntryRequest
 * @version 1.0.0
 */
var ReplaceNetworkAclEntryRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceNetworkAclEntryRequest</code>.
   * @alias module:model/ReplaceNetworkAclEntryRequest
   * @param egress {Boolean} 
   * @param networkAclId {String} 
   * @param protocol {String} 
   * @param ruleAction {module:model/RuleAction} 
   * @param ruleNumber {Number} 
   */
  function ReplaceNetworkAclEntryRequest(egress, networkAclId, protocol, ruleAction, ruleNumber) {
    _classCallCheck(this, ReplaceNetworkAclEntryRequest);

    ReplaceNetworkAclEntryRequest.initialize(this, egress, networkAclId, protocol, ruleAction, ruleNumber);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceNetworkAclEntryRequest, null, [{
    key: "initialize",
    value: function initialize(obj, egress, networkAclId, protocol, ruleAction, ruleNumber) {
      obj['Egress'] = egress;
      obj['NetworkAclId'] = networkAclId;
      obj['Protocol'] = protocol;
      obj['RuleAction'] = ruleAction;
      obj['RuleNumber'] = ruleNumber;
    }
    /**
     * Constructs a <code>ReplaceNetworkAclEntryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceNetworkAclEntryRequest} obj Optional instance to populate.
     * @return {module:model/ReplaceNetworkAclEntryRequest} The populated <code>ReplaceNetworkAclEntryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceNetworkAclEntryRequest();

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Egress')) {
          obj['Egress'] = _ApiClient["default"].convertToType(data['Egress'], 'Boolean');
        }

        if (data.hasOwnProperty('IcmpTypeCode')) {
          obj['IcmpTypeCode'] = _IcmpTypeCode["default"].constructFromObject(data['IcmpTypeCode']);
        }

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('NetworkAclId')) {
          obj['NetworkAclId'] = _ApiClient["default"].convertToType(data['NetworkAclId'], 'String');
        }

        if (data.hasOwnProperty('PortRange')) {
          obj['PortRange'] = _PortRange["default"].constructFromObject(data['PortRange']);
        }

        if (data.hasOwnProperty('Protocol')) {
          obj['Protocol'] = _ApiClient["default"].convertToType(data['Protocol'], 'String');
        }

        if (data.hasOwnProperty('RuleAction')) {
          obj['RuleAction'] = _RuleAction["default"].constructFromObject(data['RuleAction']);
        }

        if (data.hasOwnProperty('RuleNumber')) {
          obj['RuleNumber'] = _ApiClient["default"].convertToType(data['RuleNumber'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReplaceNetworkAclEntryRequest;
}();
/**
 * @member {String} CidrBlock
 */


ReplaceNetworkAclEntryRequest.prototype['CidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReplaceNetworkAclEntryRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Egress
 */

ReplaceNetworkAclEntryRequest.prototype['Egress'] = undefined;
/**
 * @member {module:model/IcmpTypeCode} IcmpTypeCode
 */

ReplaceNetworkAclEntryRequest.prototype['IcmpTypeCode'] = undefined;
/**
 * @member {String} Ipv6CidrBlock
 */

ReplaceNetworkAclEntryRequest.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {String} NetworkAclId
 */

ReplaceNetworkAclEntryRequest.prototype['NetworkAclId'] = undefined;
/**
 * @member {module:model/PortRange} PortRange
 */

ReplaceNetworkAclEntryRequest.prototype['PortRange'] = undefined;
/**
 * @member {String} Protocol
 */

ReplaceNetworkAclEntryRequest.prototype['Protocol'] = undefined;
/**
 * @member {module:model/RuleAction} RuleAction
 */

ReplaceNetworkAclEntryRequest.prototype['RuleAction'] = undefined;
/**
 * @member {Number} RuleNumber
 */

ReplaceNetworkAclEntryRequest.prototype['RuleNumber'] = undefined;
var _default = ReplaceNetworkAclEntryRequest;
exports["default"] = _default;