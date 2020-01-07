"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficDirection = _interopRequireDefault(require("./TrafficDirection"));

var _TrafficMirrorPortRangeRequest = _interopRequireDefault(require("./TrafficMirrorPortRangeRequest"));

var _TrafficMirrorRuleAction = _interopRequireDefault(require("./TrafficMirrorRuleAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTrafficMirrorFilterRuleRequest model module.
 * @module model/CreateTrafficMirrorFilterRuleRequest
 * @version 1.1.0
 */
var CreateTrafficMirrorFilterRuleRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorFilterRuleRequest</code>.
   * @alias module:model/CreateTrafficMirrorFilterRuleRequest
   * @param destinationCidrBlock {String} 
   * @param ruleAction {module:model/TrafficMirrorRuleAction} 
   * @param ruleNumber {Number} 
   * @param sourceCidrBlock {String} 
   * @param trafficDirection {module:model/TrafficDirection} 
   * @param trafficMirrorFilterId {String} 
   */
  function CreateTrafficMirrorFilterRuleRequest(destinationCidrBlock, ruleAction, ruleNumber, sourceCidrBlock, trafficDirection, trafficMirrorFilterId) {
    _classCallCheck(this, CreateTrafficMirrorFilterRuleRequest);

    CreateTrafficMirrorFilterRuleRequest.initialize(this, destinationCidrBlock, ruleAction, ruleNumber, sourceCidrBlock, trafficDirection, trafficMirrorFilterId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorFilterRuleRequest, null, [{
    key: "initialize",
    value: function initialize(obj, destinationCidrBlock, ruleAction, ruleNumber, sourceCidrBlock, trafficDirection, trafficMirrorFilterId) {
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['RuleAction'] = ruleAction;
      obj['RuleNumber'] = ruleNumber;
      obj['SourceCidrBlock'] = sourceCidrBlock;
      obj['TrafficDirection'] = trafficDirection;
      obj['TrafficMirrorFilterId'] = trafficMirrorFilterId;
    }
    /**
     * Constructs a <code>CreateTrafficMirrorFilterRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorFilterRuleRequest} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorFilterRuleRequest} The populated <code>CreateTrafficMirrorFilterRuleRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorFilterRuleRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

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

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorFilterRuleRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorFilterRuleRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CreateTrafficMirrorFilterRuleRequest.prototype['Description'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

CreateTrafficMirrorFilterRuleRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRangeRequest} DestinationPortRange
 */

CreateTrafficMirrorFilterRuleRequest.prototype['DestinationPortRange'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateTrafficMirrorFilterRuleRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} Protocol
 */

CreateTrafficMirrorFilterRuleRequest.prototype['Protocol'] = undefined;
/**
 * @member {module:model/TrafficMirrorRuleAction} RuleAction
 */

CreateTrafficMirrorFilterRuleRequest.prototype['RuleAction'] = undefined;
/**
 * @member {Number} RuleNumber
 */

CreateTrafficMirrorFilterRuleRequest.prototype['RuleNumber'] = undefined;
/**
 * @member {String} SourceCidrBlock
 */

CreateTrafficMirrorFilterRuleRequest.prototype['SourceCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRangeRequest} SourcePortRange
 */

CreateTrafficMirrorFilterRuleRequest.prototype['SourcePortRange'] = undefined;
/**
 * @member {module:model/TrafficDirection} TrafficDirection
 */

CreateTrafficMirrorFilterRuleRequest.prototype['TrafficDirection'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

CreateTrafficMirrorFilterRuleRequest.prototype['TrafficMirrorFilterId'] = undefined;
var _default = CreateTrafficMirrorFilterRuleRequest;
exports["default"] = _default;