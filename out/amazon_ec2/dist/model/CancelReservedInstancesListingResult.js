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
 * The CancelReservedInstancesListingResult model module.
 * @module model/CancelReservedInstancesListingResult
 * @version 1.0.0
 */
var CancelReservedInstancesListingResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelReservedInstancesListingResult</code>.
   * Contains the output of CancelReservedInstancesListing.
   * @alias module:model/CancelReservedInstancesListingResult
   */
  function CancelReservedInstancesListingResult() {
    _classCallCheck(this, CancelReservedInstancesListingResult);

    CancelReservedInstancesListingResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelReservedInstancesListingResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelReservedInstancesListingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelReservedInstancesListingResult} obj Optional instance to populate.
     * @return {module:model/CancelReservedInstancesListingResult} The populated <code>CancelReservedInstancesListingResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelReservedInstancesListingResult();

        if (data.hasOwnProperty('ReservedInstancesListings')) {
          obj['ReservedInstancesListings'] = _ApiClient["default"].convertToType(data['ReservedInstancesListings'], [_ReservedInstancesListing["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CancelReservedInstancesListingResult;
}();
/**
 * @member {Array.<module:model/ReservedInstancesListing>} ReservedInstancesListings
 */


CancelReservedInstancesListingResult.prototype['ReservedInstancesListings'] = undefined;
var _default = CancelReservedInstancesListingResult;
exports["default"] = _default;