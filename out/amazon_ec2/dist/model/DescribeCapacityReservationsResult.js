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
 * The DescribeCapacityReservationsResult model module.
 * @module model/DescribeCapacityReservationsResult
 * @version 1.0.0
 */
var DescribeCapacityReservationsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeCapacityReservationsResult</code>.
   * @alias module:model/DescribeCapacityReservationsResult
   */
  function DescribeCapacityReservationsResult() {
    _classCallCheck(this, DescribeCapacityReservationsResult);

    DescribeCapacityReservationsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeCapacityReservationsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeCapacityReservationsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeCapacityReservationsResult} obj Optional instance to populate.
     * @return {module:model/DescribeCapacityReservationsResult} The populated <code>DescribeCapacityReservationsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeCapacityReservationsResult();

        if (data.hasOwnProperty('CapacityReservations')) {
          obj['CapacityReservations'] = _ApiClient["default"].convertToType(data['CapacityReservations'], [_CapacityReservation["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeCapacityReservationsResult;
}();
/**
 * @member {Array.<module:model/CapacityReservation>} CapacityReservations
 */


DescribeCapacityReservationsResult.prototype['CapacityReservations'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeCapacityReservationsResult.prototype['NextToken'] = undefined;
var _default = DescribeCapacityReservationsResult;
exports["default"] = _default;