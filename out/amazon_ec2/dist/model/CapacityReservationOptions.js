"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetCapacityReservationUsageStrategy = _interopRequireDefault(require("./FleetCapacityReservationUsageStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CapacityReservationOptions model module.
 * @module model/CapacityReservationOptions
 * @version 1.1.0
 */
var CapacityReservationOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CapacityReservationOptions</code>.
   * &lt;p&gt;Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.&lt;/p&gt; &lt;note&gt; &lt;p&gt;This strategy can only be used if the EC2 Fleet is of type &lt;code&gt;instant&lt;/code&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;For more information about Capacity Reservations, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html\&quot;&gt;On-Demand Capacity Reservations&lt;/a&gt; in the &lt;i&gt;Amazon Elastic Compute Cloud User Guide&lt;/i&gt;. For examples of using Capacity Reservations in an EC2 Fleet, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html\&quot;&gt;EC2 Fleet Example Configurations&lt;/a&gt; in the &lt;i&gt;Amazon Elastic Compute Cloud User Guide&lt;/i&gt;.&lt;/p&gt;
   * @alias module:model/CapacityReservationOptions
   */
  function CapacityReservationOptions() {
    _classCallCheck(this, CapacityReservationOptions);

    CapacityReservationOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CapacityReservationOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CapacityReservationOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CapacityReservationOptions} obj Optional instance to populate.
     * @return {module:model/CapacityReservationOptions} The populated <code>CapacityReservationOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CapacityReservationOptions();

        if (data.hasOwnProperty('UsageStrategy')) {
          obj['UsageStrategy'] = _FleetCapacityReservationUsageStrategy["default"].constructFromObject(data['UsageStrategy']);
        }
      }

      return obj;
    }
  }]);

  return CapacityReservationOptions;
}();
/**
 * @member {module:model/FleetCapacityReservationUsageStrategy} UsageStrategy
 */


CapacityReservationOptions.prototype['UsageStrategy'] = undefined;
var _default = CapacityReservationOptions;
exports["default"] = _default;