"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TrafficMirrorTargetType = _interopRequireDefault(require("./TrafficMirrorTargetType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TrafficMirrorTarget model module.
 * @module model/TrafficMirrorTarget
 * @version 1.1.0
 */
var TrafficMirrorTarget =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TrafficMirrorTarget</code>.
   * Describes a Traffic Mirror target.
   * @alias module:model/TrafficMirrorTarget
   */
  function TrafficMirrorTarget() {
    _classCallCheck(this, TrafficMirrorTarget);

    TrafficMirrorTarget.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrafficMirrorTarget, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrafficMirrorTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficMirrorTarget} obj Optional instance to populate.
     * @return {module:model/TrafficMirrorTarget} The populated <code>TrafficMirrorTarget</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrafficMirrorTarget();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('NetworkLoadBalancerArn')) {
          obj['NetworkLoadBalancerArn'] = _ApiClient["default"].convertToType(data['NetworkLoadBalancerArn'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TrafficMirrorTargetId')) {
          obj['TrafficMirrorTargetId'] = _ApiClient["default"].convertToType(data['TrafficMirrorTargetId'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TrafficMirrorTargetType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return TrafficMirrorTarget;
}();
/**
 * @member {String} Description
 */


TrafficMirrorTarget.prototype['Description'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

TrafficMirrorTarget.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} NetworkLoadBalancerArn
 */

TrafficMirrorTarget.prototype['NetworkLoadBalancerArn'] = undefined;
/**
 * @member {String} OwnerId
 */

TrafficMirrorTarget.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TrafficMirrorTarget.prototype['Tags'] = undefined;
/**
 * @member {String} TrafficMirrorTargetId
 */

TrafficMirrorTarget.prototype['TrafficMirrorTargetId'] = undefined;
/**
 * @member {module:model/TrafficMirrorTargetType} Type
 */

TrafficMirrorTarget.prototype['Type'] = undefined;
var _default = TrafficMirrorTarget;
exports["default"] = _default;