"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficDirection = _interopRequireDefault(require("./TrafficDirection"));

var _TrafficMirrorPortRange = _interopRequireDefault(require("./TrafficMirrorPortRange"));

var _TrafficMirrorRuleAction = _interopRequireDefault(require("./TrafficMirrorRuleAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TrafficMirrorFilterRule model module.
 * @module model/TrafficMirrorFilterRule
 * @version 1.1.0
 */
var TrafficMirrorFilterRule =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TrafficMirrorFilterRule</code>.
   * Describes the Traffic Mirror rule.
   * @alias module:model/TrafficMirrorFilterRule
   */
  function TrafficMirrorFilterRule() {
    _classCallCheck(this, TrafficMirrorFilterRule);

    TrafficMirrorFilterRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrafficMirrorFilterRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrafficMirrorFilterRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficMirrorFilterRule} obj Optional instance to populate.
     * @return {module:model/TrafficMirrorFilterRule} The populated <code>TrafficMirrorFilterRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrafficMirrorFilterRule();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationPortRange')) {
          obj['DestinationPortRange'] = _TrafficMirrorPortRange["default"].constructFromObject(data['DestinationPortRange']);
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
          obj['SourcePortRange'] = _TrafficMirrorPortRange["default"].constructFromObject(data['SourcePortRange']);
        }

        if (data.hasOwnProperty('TrafficDirection')) {
          obj['TrafficDirection'] = _TrafficDirection["default"].constructFromObject(data['TrafficDirection']);
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorFilterRuleId')) {
          obj['TrafficMirrorFilterRuleId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterRuleId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TrafficMirrorFilterRule;
}();
/**
 * @member {String} Description
 */


TrafficMirrorFilterRule.prototype['Description'] = undefined;
/**
 * @member {String} DestinationCidrBlock
 */

TrafficMirrorFilterRule.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRange} DestinationPortRange
 */

TrafficMirrorFilterRule.prototype['DestinationPortRange'] = undefined;
/**
 * @member {Number} Protocol
 */

TrafficMirrorFilterRule.prototype['Protocol'] = undefined;
/**
 * @member {module:model/TrafficMirrorRuleAction} RuleAction
 */

TrafficMirrorFilterRule.prototype['RuleAction'] = undefined;
/**
 * @member {Number} RuleNumber
 */

TrafficMirrorFilterRule.prototype['RuleNumber'] = undefined;
/**
 * @member {String} SourceCidrBlock
 */

TrafficMirrorFilterRule.prototype['SourceCidrBlock'] = undefined;
/**
 * @member {module:model/TrafficMirrorPortRange} SourcePortRange
 */

TrafficMirrorFilterRule.prototype['SourcePortRange'] = undefined;
/**
 * @member {module:model/TrafficDirection} TrafficDirection
 */

TrafficMirrorFilterRule.prototype['TrafficDirection'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

TrafficMirrorFilterRule.prototype['TrafficMirrorFilterId'] = undefined;
/**
 * @member {String} TrafficMirrorFilterRuleId
 */

TrafficMirrorFilterRule.prototype['TrafficMirrorFilterRuleId'] = undefined;
var _default = TrafficMirrorFilterRule;
exports["default"] = _default;