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
 * The LaunchTemplateCapacityReservationSpecificationResponse model module.
 * @module model/LaunchTemplateCapacityReservationSpecificationResponse
 * @version 1.1.0
 */
var LaunchTemplateCapacityReservationSpecificationResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateCapacityReservationSpecificationResponse</code>.
   * Information about the Capacity Reservation targeting option.
   * @alias module:model/LaunchTemplateCapacityReservationSpecificationResponse
   */
  function LaunchTemplateCapacityReservationSpecificationResponse() {
    _classCallCheck(this, LaunchTemplateCapacityReservationSpecificationResponse);

    LaunchTemplateCapacityReservationSpecificationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateCapacityReservationSpecificationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateCapacityReservationSpecificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateCapacityReservationSpecificationResponse} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateCapacityReservationSpecificationResponse} The populated <code>LaunchTemplateCapacityReservationSpecificationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateCapacityReservationSpecificationResponse();

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

  return LaunchTemplateCapacityReservationSpecificationResponse;
}();
/**
 * @member {module:model/CapacityReservationPreference} CapacityReservationPreference
 */


LaunchTemplateCapacityReservationSpecificationResponse.prototype['CapacityReservationPreference'] = undefined;
/**
 * @member {module:model/CapacityReservationTargetResponse} CapacityReservationTarget
 */

LaunchTemplateCapacityReservationSpecificationResponse.prototype['CapacityReservationTarget'] = undefined;
var _default = LaunchTemplateCapacityReservationSpecificationResponse;
exports["default"] = _default;