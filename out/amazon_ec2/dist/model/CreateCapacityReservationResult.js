"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservation = _interopRequireDefault(require("./CapacityReservation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCapacityReservationResult model module.
 * @module model/CreateCapacityReservationResult
 * @version 1.1.0
 */
var CreateCapacityReservationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateCapacityReservationResult</code>.
   * @alias module:model/CreateCapacityReservationResult
   */
  function CreateCapacityReservationResult() {
    _classCallCheck(this, CreateCapacityReservationResult);

    CreateCapacityReservationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCapacityReservationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateCapacityReservationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCapacityReservationResult} obj Optional instance to populate.
     * @return {module:model/CreateCapacityReservationResult} The populated <code>CreateCapacityReservationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCapacityReservationResult();

        if (data.hasOwnProperty('CapacityReservation')) {
          obj['CapacityReservation'] = _CapacityReservation["default"].constructFromObject(data['CapacityReservation']);
        }
      }

      return obj;
    }
  }]);

  return CreateCapacityReservationResult;
}();
/**
 * @member {module:model/CapacityReservation} CapacityReservation
 */


CreateCapacityReservationResult.prototype['CapacityReservation'] = undefined;
var _default = CreateCapacityReservationResult;
exports["default"] = _default;