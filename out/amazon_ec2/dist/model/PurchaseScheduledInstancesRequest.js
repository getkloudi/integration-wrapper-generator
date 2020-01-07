"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PurchaseRequest = _interopRequireDefault(require("./PurchaseRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurchaseScheduledInstancesRequest model module.
 * @module model/PurchaseScheduledInstancesRequest
 * @version 1.1.0
 */
var PurchaseScheduledInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PurchaseScheduledInstancesRequest</code>.
   * Contains the parameters for PurchaseScheduledInstances.
   * @alias module:model/PurchaseScheduledInstancesRequest
   * @param purchaseRequests {Array.<module:model/PurchaseRequest>} 
   */
  function PurchaseScheduledInstancesRequest(purchaseRequests) {
    _classCallCheck(this, PurchaseScheduledInstancesRequest);

    PurchaseScheduledInstancesRequest.initialize(this, purchaseRequests);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurchaseScheduledInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, purchaseRequests) {
      obj['PurchaseRequests'] = purchaseRequests;
    }
    /**
     * Constructs a <code>PurchaseScheduledInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseScheduledInstancesRequest} obj Optional instance to populate.
     * @return {module:model/PurchaseScheduledInstancesRequest} The populated <code>PurchaseScheduledInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseScheduledInstancesRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PurchaseRequests')) {
          obj['PurchaseRequests'] = _ApiClient["default"].convertToType(data['PurchaseRequests'], [_PurchaseRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PurchaseScheduledInstancesRequest;
}();
/**
 * @member {String} ClientToken
 */


PurchaseScheduledInstancesRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

PurchaseScheduledInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/PurchaseRequest>} PurchaseRequests
 */

PurchaseScheduledInstancesRequest.prototype['PurchaseRequests'] = undefined;
var _default = PurchaseScheduledInstancesRequest;
exports["default"] = _default;