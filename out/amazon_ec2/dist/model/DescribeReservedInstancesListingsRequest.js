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
 * The DescribeReservedInstancesListingsRequest model module.
 * @module model/DescribeReservedInstancesListingsRequest
 * @version 1.1.0
 */
var DescribeReservedInstancesListingsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesListingsRequest</code>.
   * Contains the parameters for DescribeReservedInstancesListings.
   * @alias module:model/DescribeReservedInstancesListingsRequest
   */
  function DescribeReservedInstancesListingsRequest() {
    _classCallCheck(this, DescribeReservedInstancesListingsRequest);

    DescribeReservedInstancesListingsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesListingsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesListingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesListingsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesListingsRequest} The populated <code>DescribeReservedInstancesListingsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesListingsRequest();

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesId')) {
          obj['ReservedInstancesId'] = _ApiClient["default"].convertToType(data['ReservedInstancesId'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesListingId')) {
          obj['ReservedInstancesListingId'] = _ApiClient["default"].convertToType(data['ReservedInstancesListingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesListingsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filters
 */


DescribeReservedInstancesListingsRequest.prototype['Filters'] = undefined;
/**
 * @member {String} ReservedInstancesId
 */

DescribeReservedInstancesListingsRequest.prototype['ReservedInstancesId'] = undefined;
/**
 * @member {String} ReservedInstancesListingId
 */

DescribeReservedInstancesListingsRequest.prototype['ReservedInstancesListingId'] = undefined;
var _default = DescribeReservedInstancesListingsRequest;
exports["default"] = _default;