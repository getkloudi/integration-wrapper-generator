"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HostOffering = _interopRequireDefault(require("./HostOffering"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeHostReservationOfferingsResult model module.
 * @module model/DescribeHostReservationOfferingsResult
 * @version 1.1.0
 */
var DescribeHostReservationOfferingsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeHostReservationOfferingsResult</code>.
   * @alias module:model/DescribeHostReservationOfferingsResult
   */
  function DescribeHostReservationOfferingsResult() {
    _classCallCheck(this, DescribeHostReservationOfferingsResult);

    DescribeHostReservationOfferingsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeHostReservationOfferingsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeHostReservationOfferingsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeHostReservationOfferingsResult} obj Optional instance to populate.
     * @return {module:model/DescribeHostReservationOfferingsResult} The populated <code>DescribeHostReservationOfferingsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeHostReservationOfferingsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('OfferingSet')) {
          obj['OfferingSet'] = _ApiClient["default"].convertToType(data['OfferingSet'], [_HostOffering["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeHostReservationOfferingsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeHostReservationOfferingsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/HostOffering>} OfferingSet
 */

DescribeHostReservationOfferingsResult.prototype['OfferingSet'] = undefined;
var _default = DescribeHostReservationOfferingsResult;
exports["default"] = _default;