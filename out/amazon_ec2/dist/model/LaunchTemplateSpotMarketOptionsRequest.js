"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceInterruptionBehavior = _interopRequireDefault(require("./InstanceInterruptionBehavior"));

var _SpotInstanceType = _interopRequireDefault(require("./SpotInstanceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateSpotMarketOptionsRequest model module.
 * @module model/LaunchTemplateSpotMarketOptionsRequest
 * @version 1.0.0
 */
var LaunchTemplateSpotMarketOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateSpotMarketOptionsRequest</code>.
   * The options for Spot Instances.
   * @alias module:model/LaunchTemplateSpotMarketOptionsRequest
   */
  function LaunchTemplateSpotMarketOptionsRequest() {
    _classCallCheck(this, LaunchTemplateSpotMarketOptionsRequest);

    LaunchTemplateSpotMarketOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateSpotMarketOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateSpotMarketOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateSpotMarketOptionsRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateSpotMarketOptionsRequest} The populated <code>LaunchTemplateSpotMarketOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateSpotMarketOptionsRequest();

        if (data.hasOwnProperty('BlockDurationMinutes')) {
          obj['BlockDurationMinutes'] = _ApiClient["default"].convertToType(data['BlockDurationMinutes'], 'Number');
        }

        if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
          obj['InstanceInterruptionBehavior'] = _InstanceInterruptionBehavior["default"].constructFromObject(data['InstanceInterruptionBehavior']);
        }

        if (data.hasOwnProperty('MaxPrice')) {
          obj['MaxPrice'] = _ApiClient["default"].convertToType(data['MaxPrice'], 'String');
        }

        if (data.hasOwnProperty('SpotInstanceType')) {
          obj['SpotInstanceType'] = _SpotInstanceType["default"].constructFromObject(data['SpotInstanceType']);
        }

        if (data.hasOwnProperty('ValidUntil')) {
          obj['ValidUntil'] = _ApiClient["default"].convertToType(data['ValidUntil'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateSpotMarketOptionsRequest;
}();
/**
 * @member {Number} BlockDurationMinutes
 */


LaunchTemplateSpotMarketOptionsRequest.prototype['BlockDurationMinutes'] = undefined;
/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

LaunchTemplateSpotMarketOptionsRequest.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {String} MaxPrice
 */

LaunchTemplateSpotMarketOptionsRequest.prototype['MaxPrice'] = undefined;
/**
 * @member {module:model/SpotInstanceType} SpotInstanceType
 */

LaunchTemplateSpotMarketOptionsRequest.prototype['SpotInstanceType'] = undefined;
/**
 * @member {Date} ValidUntil
 */

LaunchTemplateSpotMarketOptionsRequest.prototype['ValidUntil'] = undefined;
var _default = LaunchTemplateSpotMarketOptionsRequest;
exports["default"] = _default;