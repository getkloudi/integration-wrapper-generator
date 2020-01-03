"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservationValue = _interopRequireDefault(require("./ReservationValue"));

var _TargetConfiguration = _interopRequireDefault(require("./TargetConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TargetReservationValue model module.
 * @module model/TargetReservationValue
 * @version 1.0.0
 */
var TargetReservationValue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetReservationValue</code>.
   * The total value of the new Convertible Reserved Instances.
   * @alias module:model/TargetReservationValue
   */
  function TargetReservationValue() {
    _classCallCheck(this, TargetReservationValue);

    TargetReservationValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetReservationValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TargetReservationValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetReservationValue} obj Optional instance to populate.
     * @return {module:model/TargetReservationValue} The populated <code>TargetReservationValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetReservationValue();

        if (data.hasOwnProperty('ReservationValue')) {
          obj['ReservationValue'] = _ReservationValue["default"].constructFromObject(data['ReservationValue']);
        }

        if (data.hasOwnProperty('TargetConfiguration')) {
          obj['TargetConfiguration'] = _TargetConfiguration["default"].constructFromObject(data['TargetConfiguration']);
        }
      }

      return obj;
    }
  }]);

  return TargetReservationValue;
}();
/**
 * @member {module:model/ReservationValue} ReservationValue
 */


TargetReservationValue.prototype['ReservationValue'] = undefined;
/**
 * @member {module:model/TargetConfiguration} TargetConfiguration
 */

TargetReservationValue.prototype['TargetConfiguration'] = undefined;
var _default = TargetReservationValue;
exports["default"] = _default;