"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurchaseHostReservationRequest model module.
 * @module model/PurchaseHostReservationRequest
 * @version 1.1.0
 */
var PurchaseHostReservationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PurchaseHostReservationRequest</code>.
   * @alias module:model/PurchaseHostReservationRequest
   * @param hostIdSet {Array.<String>} 
   * @param offeringId {String} 
   */
  function PurchaseHostReservationRequest(hostIdSet, offeringId) {
    _classCallCheck(this, PurchaseHostReservationRequest);

    PurchaseHostReservationRequest.initialize(this, hostIdSet, offeringId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurchaseHostReservationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, hostIdSet, offeringId) {
      obj['HostIdSet'] = hostIdSet;
      obj['OfferingId'] = offeringId;
    }
    /**
     * Constructs a <code>PurchaseHostReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseHostReservationRequest} obj Optional instance to populate.
     * @return {module:model/PurchaseHostReservationRequest} The populated <code>PurchaseHostReservationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseHostReservationRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }

        if (data.hasOwnProperty('HostIdSet')) {
          obj['HostIdSet'] = _ApiClient["default"].convertToType(data['HostIdSet'], ['String']);
        }

        if (data.hasOwnProperty('LimitPrice')) {
          obj['LimitPrice'] = _ApiClient["default"].convertToType(data['LimitPrice'], 'String');
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PurchaseHostReservationRequest;
}();
/**
 * @member {String} ClientToken
 */


PurchaseHostReservationRequest.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

PurchaseHostReservationRequest.prototype['CurrencyCode'] = undefined;
/**
 * @member {Array.<String>} HostIdSet
 */

PurchaseHostReservationRequest.prototype['HostIdSet'] = undefined;
/**
 * @member {String} LimitPrice
 */

PurchaseHostReservationRequest.prototype['LimitPrice'] = undefined;
/**
 * @member {String} OfferingId
 */

PurchaseHostReservationRequest.prototype['OfferingId'] = undefined;
var _default = PurchaseHostReservationRequest;
exports["default"] = _default;