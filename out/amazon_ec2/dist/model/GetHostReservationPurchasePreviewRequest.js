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
 * The GetHostReservationPurchasePreviewRequest model module.
 * @module model/GetHostReservationPurchasePreviewRequest
 * @version 1.0.0
 */
var GetHostReservationPurchasePreviewRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetHostReservationPurchasePreviewRequest</code>.
   * @alias module:model/GetHostReservationPurchasePreviewRequest
   * @param hostIdSet {Array.<String>} 
   * @param offeringId {String} 
   */
  function GetHostReservationPurchasePreviewRequest(hostIdSet, offeringId) {
    _classCallCheck(this, GetHostReservationPurchasePreviewRequest);

    GetHostReservationPurchasePreviewRequest.initialize(this, hostIdSet, offeringId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHostReservationPurchasePreviewRequest, null, [{
    key: "initialize",
    value: function initialize(obj, hostIdSet, offeringId) {
      obj['HostIdSet'] = hostIdSet;
      obj['OfferingId'] = offeringId;
    }
    /**
     * Constructs a <code>GetHostReservationPurchasePreviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHostReservationPurchasePreviewRequest} obj Optional instance to populate.
     * @return {module:model/GetHostReservationPurchasePreviewRequest} The populated <code>GetHostReservationPurchasePreviewRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHostReservationPurchasePreviewRequest();

        if (data.hasOwnProperty('HostIdSet')) {
          obj['HostIdSet'] = _ApiClient["default"].convertToType(data['HostIdSet'], ['String']);
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetHostReservationPurchasePreviewRequest;
}();
/**
 * @member {Array.<String>} HostIdSet
 */


GetHostReservationPurchasePreviewRequest.prototype['HostIdSet'] = undefined;
/**
 * @member {String} OfferingId
 */

GetHostReservationPurchasePreviewRequest.prototype['OfferingId'] = undefined;
var _default = GetHostReservationPurchasePreviewRequest;
exports["default"] = _default;