"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficDirection = _interopRequireDefault(require("./TrafficDirection"));

var _TrafficMirrorFilterRuleField = _interopRequireDefault(require("./TrafficMirrorFilterRuleField"));

var _TrafficMirrorPortRangeRequest = _interopRequireDefault(require("./TrafficMirrorPortRangeRequest"));

var _TrafficMirrorRuleAction = _interopRequireDefault(require("./TrafficMirrorRuleAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorFilterRuleRequest model module.
 * @module model/ModifyTrafficMirrorFilterRuleRequest
 * @version 1.1.0
 */
var ModifyTrafficMirrorFilterRuleRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorFilterRuleRequest</code>.
   * @alias module:model/ModifyTrafficMirrorFilterRuleRequest
   * @param trafficMirrorFilterRuleId {String} 
   */
  function ModifyTrafficMirrorFilterRuleRequest(trafficMirrorFilterRuleId) {
    _classCallCheck(this, ModifyTrafficMirrorFilterRuleRequest);

    ModifyTrafficMirrorFilterRuleRequest.initialize(this, trafficMirrorFilterRuleId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorFilterRuleRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorFilterRuleId) {
      obj['TrafficMirrorFilterRuleId'] = trafficMirrorFilterRuleId;
    }
    /**
     * Constructs a <code>ModifyTrafficMirrorFilterRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorFilterRuleRequest} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorFilterRuleRequest} The populated <code>ModifyTrafficMirrorFilterRuleRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorFilterRuleRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationPortRange')) {
          obj['DestinationPortRange'] = _TrafficMirrorPortRangeRequest["default"].constructFromObject(data['DestinationPortRange']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Protocol')) {
          obj['Protocol'] = _ApiClient["default"].convertToType(data['Protocol'], 'Number');
        }

        if (data.hasOwnProperty('RemoveFields')) {
          obj['RemoveFields'] = _ApiClient["default"].convertToType(data['RemoveFields'], [_TrafficMirrorFilterRuleField["default"]]);
        }

        if (data.hasOwnProperty('RuleAction')) {
          obj['RuleAction'] = _TrafficMirrorRuleAction["default"].constructFromObject(data['RuleAction']);
        }

        if (data.hasOwnProperty('RuleNumber')) {
          obj['RuleNumber'] = _ApiClient["default"].convertToType(data['RuleNumber'], 'Number');
        }

        if (data.hasOwnProperty('SourceCidrBlock')) {
          obj['SourceCidrBlock'] = _ApiClient["default"].convertToType(data['SourceCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('SourcePortRange')) {
          obj['SourcePortRange'] = _TrafficMirrorPortRangeRequest["default"].constructFromObject(data['SourcePortRange']);
        }

        if (data.hasOwnProperty('TrafficDirection')) {
          obj['TrafficDirection'] = _TrafficDirection["default"].constructFromObject(data['TrafficDirection']);
        }

        if (data.hasOwnProperty('TrafficMirrorFilterRuleId')) {
          obj['TrafficMirrorFilterRuleId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterRuleId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyTrafficMirrorFilterRuleRequest;
}();
/**
 * @member {String} Description
 */


ModifyTrafficMirrorFilterRuleRequest.prototype['Description'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRangeRequest} DestinationPortRange
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['DestinationPortRange'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} Protocol
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['Protocol'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorFilterRuleField>} RemoveFields
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['RemoveFields'] = undefined;
/**
 * @member {module:model/TrafficMirrorRuleAction} RuleAction
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['RuleAction'] = undefined;
/**
 * @member {Number} RuleNumber
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['RuleNumber'] = undefined;
/**
 * @member {String} SourceCidrBlock
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['SourceCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRangeRequest} SourcePortRange
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['SourcePortRange'] = undefined;
/**
 * @member {module:model/TrafficDirection} TrafficDirection
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['TrafficDirection'] = undefined;
/**
 * @member {String} TrafficMirrorFilterRuleId
 */

ModifyTrafficMirrorFilterRuleRequest.prototype['TrafficMirrorFilterRuleId'] = undefined;
var _default = ModifyTrafficMirrorFilterRuleRequest;
exports["default"] = _default;