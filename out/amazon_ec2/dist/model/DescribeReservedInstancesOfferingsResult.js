"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesOffering = _interopRequireDefault(require("./ReservedInstancesOffering"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeReservedInstancesOfferingsResult model module.
 * @module model/DescribeReservedInstancesOfferingsResult
 * @version 1.1.0
 */
var DescribeReservedInstancesOfferingsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesOfferingsResult</code>.
   * Contains the output of DescribeReservedInstancesOfferings.
   * @alias module:model/DescribeReservedInstancesOfferingsResult
   */
  function DescribeReservedInstancesOfferingsResult() {
    _classCallCheck(this, DescribeReservedInstancesOfferingsResult);

    DescribeReservedInstancesOfferingsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesOfferingsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesOfferingsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesOfferingsResult} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesOfferingsResult} The populated <code>DescribeReservedInstancesOfferingsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesOfferingsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesOfferings')) {
          obj['ReservedInstancesOfferings'] = _ApiClient["default"].convertToType(data['ReservedInstancesOfferings'], [_ReservedInstancesOffering["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesOfferingsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeReservedInstancesOfferingsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstancesOffering>} ReservedInstancesOfferings
 */

DescribeReservedInstancesOfferingsResult.prototype['ReservedInstancesOfferings'] = undefined;
var _default = DescribeReservedInstancesOfferingsResult;
exports["default"] = _default;