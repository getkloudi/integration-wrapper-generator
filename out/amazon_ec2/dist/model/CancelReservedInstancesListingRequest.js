"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelReservedInstancesListingRequest model module.
 * @module model/CancelReservedInstancesListingRequest
 * @version 1.0.0
 */
var CancelReservedInstancesListingRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelReservedInstancesListingRequest</code>.
   * Contains the parameters for CancelReservedInstancesListing.
   * @alias module:model/CancelReservedInstancesListingRequest
   * @param reservedInstancesListingId {String} 
   */
  function CancelReservedInstancesListingRequest(reservedInstancesListingId) {
    _classCallCheck(this, CancelReservedInstancesListingRequest);

    CancelReservedInstancesListingRequest.initialize(this, reservedInstancesListingId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelReservedInstancesListingRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reservedInstancesListingId) {
      obj['ReservedInstancesListingId'] = reservedInstancesListingId;
    }
    /**
     * Constructs a <code>CancelReservedInstancesListingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelReservedInstancesListingRequest} obj Optional instance to populate.
     * @return {module:model/CancelReservedInstancesListingRequest} The populated <code>CancelReservedInstancesListingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelReservedInstancesListingRequest();

        if (data.hasOwnProperty('ReservedInstancesListingId')) {
          obj['ReservedInstancesListingId'] = _ApiClient["default"].convertToType(data['ReservedInstancesListingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelReservedInstancesListingRequest;
}();
/**
 * @member {String} ReservedInstancesListingId
 */


CancelReservedInstancesListingRequest.prototype['ReservedInstancesListingId'] = undefined;
var _default = CancelReservedInstancesListingRequest;
exports["default"] = _default;