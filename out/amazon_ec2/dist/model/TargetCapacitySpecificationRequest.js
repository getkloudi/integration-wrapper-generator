"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DefaultTargetCapacityType = _interopRequireDefault(require("./DefaultTargetCapacityType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TargetCapacitySpecificationRequest model module.
 * @module model/TargetCapacitySpecificationRequest
 * @version 1.0.0
 */
var TargetCapacitySpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetCapacitySpecificationRequest</code>.
   * &lt;p&gt;The number of units to request. You can choose to set the target capacity as the number of instances. Or you can set the target capacity to a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is &lt;code&gt;maintain&lt;/code&gt;, you can specify a target capacity of 0 and add capacity later.&lt;/p&gt; &lt;p&gt;You can use the On-Demand Instance &lt;code&gt;MaxTotalPrice&lt;/code&gt; parameter, the Spot Instance &lt;code&gt;MaxTotalPrice&lt;/code&gt; parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you&#39;re willing to pay. When the maximum amount you&#39;re willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The &lt;code&gt;MaxTotalPrice&lt;/code&gt; parameters are located in and .&lt;/p&gt;
   * @alias module:model/TargetCapacitySpecificationRequest
   * @param totalTargetCapacity {Number} 
   */
  function TargetCapacitySpecificationRequest(totalTargetCapacity) {
    _classCallCheck(this, TargetCapacitySpecificationRequest);

    TargetCapacitySpecificationRequest.initialize(this, totalTargetCapacity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetCapacitySpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, totalTargetCapacity) {
      obj['TotalTargetCapacity'] = totalTargetCapacity;
    }
    /**
     * Constructs a <code>TargetCapacitySpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCapacitySpecificationRequest} obj Optional instance to populate.
     * @return {module:model/TargetCapacitySpecificationRequest} The populated <code>TargetCapacitySpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetCapacitySpecificationRequest();

        if (data.hasOwnProperty('DefaultTargetCapacityType')) {
          obj['DefaultTargetCapacityType'] = _DefaultTargetCapacityType["default"].constructFromObject(data['DefaultTargetCapacityType']);
        }

        if (data.hasOwnProperty('OnDemandTargetCapacity')) {
          obj['OnDemandTargetCapacity'] = _ApiClient["default"].convertToType(data['OnDemandTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('SpotTargetCapacity')) {
          obj['SpotTargetCapacity'] = _ApiClient["default"].convertToType(data['SpotTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('TotalTargetCapacity')) {
          obj['TotalTargetCapacity'] = _ApiClient["default"].convertToType(data['TotalTargetCapacity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TargetCapacitySpecificationRequest;
}();
/**
 * @member {module:model/DefaultTargetCapacityType} DefaultTargetCapacityType
 */


TargetCapacitySpecificationRequest.prototype['DefaultTargetCapacityType'] = undefined;
/**
 * @member {Number} OnDemandTargetCapacity
 */

TargetCapacitySpecificationRequest.prototype['OnDemandTargetCapacity'] = undefined;
/**
 * @member {Number} SpotTargetCapacity
 */

TargetCapacitySpecificationRequest.prototype['SpotTargetCapacity'] = undefined;
/**
 * @member {Number} TotalTargetCapacity
 */

TargetCapacitySpecificationRequest.prototype['TotalTargetCapacity'] = undefined;
var _default = TargetCapacitySpecificationRequest;
exports["default"] = _default;