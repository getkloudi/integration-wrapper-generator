"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceCount = _interopRequireDefault(require("./InstanceCount"));

var _ListingStatus = _interopRequireDefault(require("./ListingStatus"));

var _PriceSchedule = _interopRequireDefault(require("./PriceSchedule"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstancesListing model module.
 * @module model/ReservedInstancesListing
 * @version 1.0.0
 */
var ReservedInstancesListing =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstancesListing</code>.
   * Describes a Reserved Instance listing.
   * @alias module:model/ReservedInstancesListing
   */
  function ReservedInstancesListing() {
    _classCallCheck(this, ReservedInstancesListing);

    ReservedInstancesListing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstancesListing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstancesListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesListing} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesListing} The populated <code>ReservedInstancesListing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstancesListing();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CreateDate')) {
          obj['CreateDate'] = _ApiClient["default"].convertToType(data['CreateDate'], 'Date');
        }

        if (data.hasOwnProperty('InstanceCounts')) {
          obj['InstanceCounts'] = _ApiClient["default"].convertToType(data['InstanceCounts'], [_InstanceCount["default"]]);
        }

        if (data.hasOwnProperty('PriceSchedules')) {
          obj['PriceSchedules'] = _ApiClient["default"].convertToType(data['PriceSchedules'], [_PriceSchedule["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesId')) {
          obj['ReservedInstancesId'] = _ApiClient["default"].convertToType(data['ReservedInstancesId'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesListingId')) {
          obj['ReservedInstancesListingId'] = _ApiClient["default"].convertToType(data['ReservedInstancesListingId'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ListingStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('UpdateDate')) {
          obj['UpdateDate'] = _ApiClient["default"].convertToType(data['UpdateDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ReservedInstancesListing;
}();
/**
 * @member {String} ClientToken
 */


ReservedInstancesListing.prototype['ClientToken'] = undefined;
/**
 * @member {Date} CreateDate
 */

ReservedInstancesListing.prototype['CreateDate'] = undefined;
/**
 * @member {Array.<module:model/InstanceCount>} InstanceCounts
 */

ReservedInstancesListing.prototype['InstanceCounts'] = undefined;
/**
 * @member {Array.<module:model/PriceSchedule>} PriceSchedules
 */

ReservedInstancesListing.prototype['PriceSchedules'] = undefined;
/**
 * @member {String} ReservedInstancesId
 */

ReservedInstancesListing.prototype['ReservedInstancesId'] = undefined;
/**
 * @member {String} ReservedInstancesListingId
 */

ReservedInstancesListing.prototype['ReservedInstancesListingId'] = undefined;
/**
 * @member {module:model/ListingStatus} Status
 */

ReservedInstancesListing.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

ReservedInstancesListing.prototype['StatusMessage'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ReservedInstancesListing.prototype['Tags'] = undefined;
/**
 * @member {Date} UpdateDate
 */

ReservedInstancesListing.prototype['UpdateDate'] = undefined;
var _default = ReservedInstancesListing;
exports["default"] = _default;