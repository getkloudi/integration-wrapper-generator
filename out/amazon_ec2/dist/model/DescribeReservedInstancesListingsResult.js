"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesListing = _interopRequireDefault(require("./ReservedInstancesListing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeReservedInstancesListingsResult model module.
 * @module model/DescribeReservedInstancesListingsResult
 * @version 1.1.0
 */
var DescribeReservedInstancesListingsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesListingsResult</code>.
   * Contains the output of DescribeReservedInstancesListings.
   * @alias module:model/DescribeReservedInstancesListingsResult
   */
  function DescribeReservedInstancesListingsResult() {
    _classCallCheck(this, DescribeReservedInstancesListingsResult);

    DescribeReservedInstancesListingsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesListingsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesListingsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesListingsResult} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesListingsResult} The populated <code>DescribeReservedInstancesListingsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesListingsResult();

        if (data.hasOwnProperty('ReservedInstancesListings')) {
          obj['ReservedInstancesListings'] = _ApiClient["default"].convertToType(data['ReservedInstancesListings'], [_ReservedInstancesListing["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesListingsResult;
}();
/**
 * @member {Array.<module:model/ReservedInstancesListing>} ReservedInstancesListings
 */


DescribeReservedInstancesListingsResult.prototype['ReservedInstancesListings'] = undefined;
var _default = DescribeReservedInstancesListingsResult;
exports["default"] = _default;