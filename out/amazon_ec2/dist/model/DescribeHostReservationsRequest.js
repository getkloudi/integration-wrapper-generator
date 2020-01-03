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
 * The DescribeHostReservationsRequest model module.
 * @module model/DescribeHostReservationsRequest
 * @version 1.0.0
 */
var DescribeHostReservationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeHostReservationsRequest</code>.
   * @alias module:model/DescribeHostReservationsRequest
   */
  function DescribeHostReservationsRequest() {
    _classCallCheck(this, DescribeHostReservationsRequest);

    DescribeHostReservationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeHostReservationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeHostReservationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeHostReservationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeHostReservationsRequest} The populated <code>DescribeHostReservationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeHostReservationsRequest();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('HostReservationIdSet')) {
          obj['HostReservationIdSet'] = _ApiClient["default"].convertToType(data['HostReservationIdSet'], ['String']);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeHostReservationsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filter
 */


DescribeHostReservationsRequest.prototype['Filter'] = undefined;
/**
 * @member {Array.<String>} HostReservationIdSet
 */

DescribeHostReservationsRequest.prototype['HostReservationIdSet'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeHostReservationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeHostReservationsRequest.prototype['NextToken'] = undefined;
var _default = DescribeHostReservationsRequest;
exports["default"] = _default;