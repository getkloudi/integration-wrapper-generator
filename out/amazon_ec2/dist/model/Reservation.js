"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _Instance = _interopRequireDefault(require("./Instance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Reservation model module.
 * @module model/Reservation
 * @version 1.1.0
 */
var Reservation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Reservation</code>.
   * Describes a reservation.
   * @alias module:model/Reservation
   */
  function Reservation() {
    _classCallCheck(this, Reservation);

    Reservation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Reservation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Reservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reservation} obj Optional instance to populate.
     * @return {module:model/Reservation} The populated <code>Reservation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Reservation();

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('Instances')) {
          obj['Instances'] = _ApiClient["default"].convertToType(data['Instances'], [_Instance["default"]]);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('RequesterId')) {
          obj['RequesterId'] = _ApiClient["default"].convertToType(data['RequesterId'], 'String');
        }

        if (data.hasOwnProperty('ReservationId')) {
          obj['ReservationId'] = _ApiClient["default"].convertToType(data['ReservationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Reservation;
}();
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */


Reservation.prototype['Groups'] = undefined;
/**
 * @member {Array.<module:model/Instance>} Instances
 */

Reservation.prototype['Instances'] = undefined;
/**
 * @member {String} OwnerId
 */

Reservation.prototype['OwnerId'] = undefined;
/**
 * @member {String} RequesterId
 */

Reservation.prototype['RequesterId'] = undefined;
/**
 * @member {String} ReservationId
 */

Reservation.prototype['ReservationId'] = undefined;
var _default = Reservation;
exports["default"] = _default;