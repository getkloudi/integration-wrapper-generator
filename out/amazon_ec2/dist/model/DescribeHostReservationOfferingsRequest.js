"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeHostReservationOfferingsRequest model module.
 * @module model/DescribeHostReservationOfferingsRequest
 * @version 1.1.0
 */
var DescribeHostReservationOfferingsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeHostReservationOfferingsRequest</code>.
   * @alias module:model/DescribeHostReservationOfferingsRequest
   */
  function DescribeHostReservationOfferingsRequest() {
    _classCallCheck(this, DescribeHostReservationOfferingsRequest);

    DescribeHostReservationOfferingsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeHostReservationOfferingsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeHostReservationOfferingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeHostReservationOfferingsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeHostReservationOfferingsRequest} The populated <code>DescribeHostReservationOfferingsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeHostReservationOfferingsRequest();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxDuration')) {
          obj['MaxDuration'] = _ApiClient["default"].convertToType(data['MaxDuration'], 'Number');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('MinDuration')) {
          obj['MinDuration'] = _ApiClient["default"].convertToType(data['MinDuration'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeHostReservationOfferingsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filter
 */


DescribeHostReservationOfferingsRequest.prototype['Filter'] = undefined;
/**
 * @member {Number} MaxDuration
 */

DescribeHostReservationOfferingsRequest.prototype['MaxDuration'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeHostReservationOfferingsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {Number} MinDuration
 */

DescribeHostReservationOfferingsRequest.prototype['MinDuration'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeHostReservationOfferingsRequest.prototype['NextToken'] = undefined;
/**
 * @member {String} OfferingId
 */

DescribeHostReservationOfferingsRequest.prototype['OfferingId'] = undefined;
var _default = DescribeHostReservationOfferingsRequest;
exports["default"] = _default;