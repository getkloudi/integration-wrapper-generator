"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationPreference = _interopRequireDefault(require("./CapacityReservationPreference"));

var _CapacityReservationTargetResponse = _interopRequireDefault(require("./CapacityReservationTargetResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CapacityReservationSpecificationResponse model module.
 * @module model/CapacityReservationSpecificationResponse
 * @version 1.1.0
 */
var CapacityReservationSpecificationResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CapacityReservationSpecificationResponse</code>.
   * Describes the instance&#39;s Capacity Reservation targeting preferences. The action returns the &lt;code&gt;capacityReservationPreference&lt;/code&gt; response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any &lt;code&gt;open&lt;/code&gt; Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the &lt;code&gt;capacityReservationTarget&lt;/code&gt; response element if the instance explicily targets a specific Capacity Reservation.
   * @alias module:model/CapacityReservationSpecificationResponse
   */
  function CapacityReservationSpecificationResponse() {
    _classCallCheck(this, CapacityReservationSpecificationResponse);

    CapacityReservationSpecificationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CapacityReservationSpecificationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CapacityReservationSpecificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CapacityReservationSpecificationResponse} obj Optional instance to populate.
     * @return {module:model/CapacityReservationSpecificationResponse} The populated <code>CapacityReservationSpecificationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CapacityReservationSpecificationResponse();

        if (data.hasOwnProperty('CapacityReservationPreference')) {
          obj['CapacityReservationPreference'] = _CapacityReservationPreference["default"].constructFromObject(data['CapacityReservationPreference']);
        }

        if (data.hasOwnProperty('CapacityReservationTarget')) {
          obj['CapacityReservationTarget'] = _CapacityReservationTargetResponse["default"].constructFromObject(data['CapacityReservationTarget']);
        }
      }

      return obj;
    }
  }]);

  return CapacityReservationSpecificationResponse;
}();
/**
 * @member {module:model/CapacityReservationPreference} CapacityReservationPreference
 */


CapacityReservationSpecificationResponse.prototype['CapacityReservationPreference'] = undefined;
/**
 * @member {module:model/CapacityReservationTargetResponse} CapacityReservationTarget
 */

CapacityReservationSpecificationResponse.prototype['CapacityReservationTarget'] = undefined;
var _default = CapacityReservationSpecificationResponse;
exports["default"] = _default;