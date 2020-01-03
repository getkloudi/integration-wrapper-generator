"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationPreference = _interopRequireDefault(require("./CapacityReservationPreference"));

var _CapacityReservationTarget = _interopRequireDefault(require("./CapacityReservationTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateCapacityReservationSpecificationRequest model module.
 * @module model/LaunchTemplateCapacityReservationSpecificationRequest
 * @version 1.0.0
 */
var LaunchTemplateCapacityReservationSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateCapacityReservationSpecificationRequest</code>.
   * Describes an instance&#39;s Capacity Reservation targeting option. You can specify only one option at a time. Use the &lt;code&gt;CapacityReservationPreference&lt;/code&gt; parameter to configure the instance to run in On-Demand capacity or to run in any &lt;code&gt;open&lt;/code&gt; Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the &lt;code&gt;CapacityReservationTarget&lt;/code&gt; parameter to explicitly target a specific Capacity Reservation.
   * @alias module:model/LaunchTemplateCapacityReservationSpecificationRequest
   */
  function LaunchTemplateCapacityReservationSpecificationRequest() {
    _classCallCheck(this, LaunchTemplateCapacityReservationSpecificationRequest);

    LaunchTemplateCapacityReservationSpecificationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateCapacityReservationSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateCapacityReservationSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateCapacityReservationSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateCapacityReservationSpecificationRequest} The populated <code>LaunchTemplateCapacityReservationSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateCapacityReservationSpecificationRequest();

        if (data.hasOwnProperty('CapacityReservationPreference')) {
          obj['CapacityReservationPreference'] = _CapacityReservationPreference["default"].constructFromObject(data['CapacityReservationPreference']);
        }

        if (data.hasOwnProperty('CapacityReservationTarget')) {
          obj['CapacityReservationTarget'] = _CapacityReservationTarget["default"].constructFromObject(data['CapacityReservationTarget']);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateCapacityReservationSpecificationRequest;
}();
/**
 * @member {module:model/CapacityReservationPreference} CapacityReservationPreference
 */


LaunchTemplateCapacityReservationSpecificationRequest.prototype['CapacityReservationPreference'] = undefined;
/**
 * @member {module:model/CapacityReservationTarget} CapacityReservationTarget
 */

LaunchTemplateCapacityReservationSpecificationRequest.prototype['CapacityReservationTarget'] = undefined;
var _default = LaunchTemplateCapacityReservationSpecificationRequest;
exports["default"] = _default;