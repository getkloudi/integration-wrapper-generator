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
 * The CapacityReservationSpecification model module.
 * @module model/CapacityReservationSpecification
 * @version 1.1.0
 */
var CapacityReservationSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CapacityReservationSpecification</code>.
   * &lt;p&gt;Describes an instance&#39;s Capacity Reservation targeting option. You can specify only one parameter at a time. If you specify &lt;code&gt;CapacityReservationPreference&lt;/code&gt; and &lt;code&gt;CapacityReservationTarget&lt;/code&gt;, the request fails.&lt;/p&gt; &lt;p&gt;Use the &lt;code&gt;CapacityReservationPreference&lt;/code&gt; parameter to configure the instance to run as an On-Demand Instance or to run in any &lt;code&gt;open&lt;/code&gt; Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the &lt;code&gt;CapacityReservationTarget&lt;/code&gt; parameter to explicitly target a specific Capacity Reservation.&lt;/p&gt;
   * @alias module:model/CapacityReservationSpecification
   */
  function CapacityReservationSpecification() {
    _classCallCheck(this, CapacityReservationSpecification);

    CapacityReservationSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CapacityReservationSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CapacityReservationSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CapacityReservationSpecification} obj Optional instance to populate.
     * @return {module:model/CapacityReservationSpecification} The populated <code>CapacityReservationSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CapacityReservationSpecification();

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

  return CapacityReservationSpecification;
}();
/**
 * @member {module:model/CapacityReservationPreference} CapacityReservationPreference
 */


CapacityReservationSpecification.prototype['CapacityReservationPreference'] = undefined;
/**
 * @member {module:model/CapacityReservationTarget} CapacityReservationTarget
 */

CapacityReservationSpecification.prototype['CapacityReservationTarget'] = undefined;
var _default = CapacityReservationSpecification;
exports["default"] = _default;