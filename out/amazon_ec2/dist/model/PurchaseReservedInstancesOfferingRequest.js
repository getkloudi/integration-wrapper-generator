"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstanceLimitPrice = _interopRequireDefault(require("./ReservedInstanceLimitPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurchaseReservedInstancesOfferingRequest model module.
 * @module model/PurchaseReservedInstancesOfferingRequest
 * @version 1.0.0
 */
var PurchaseReservedInstancesOfferingRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PurchaseReservedInstancesOfferingRequest</code>.
   * Contains the parameters for PurchaseReservedInstancesOffering.
   * @alias module:model/PurchaseReservedInstancesOfferingRequest
   * @param instanceCount {Number} 
   * @param reservedInstancesOfferingId {String} 
   */
  function PurchaseReservedInstancesOfferingRequest(instanceCount, reservedInstancesOfferingId) {
    _classCallCheck(this, PurchaseReservedInstancesOfferingRequest);

    PurchaseReservedInstancesOfferingRequest.initialize(this, instanceCount, reservedInstancesOfferingId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurchaseReservedInstancesOfferingRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceCount, reservedInstancesOfferingId) {
      obj['InstanceCount'] = instanceCount;
      obj['ReservedInstancesOfferingId'] = reservedInstancesOfferingId;
    }
    /**
     * Constructs a <code>PurchaseReservedInstancesOfferingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseReservedInstancesOfferingRequest} obj Optional instance to populate.
     * @return {module:model/PurchaseReservedInstancesOfferingRequest} The populated <code>PurchaseReservedInstancesOfferingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseReservedInstancesOfferingRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('LimitPrice')) {
          obj['LimitPrice'] = _ReservedInstanceLimitPrice["default"].constructFromObject(data['LimitPrice']);
        }

        if (data.hasOwnProperty('PurchaseTime')) {
          obj['PurchaseTime'] = _ApiClient["default"].convertToType(data['PurchaseTime'], 'Date');
        }

        if (data.hasOwnProperty('ReservedInstancesOfferingId')) {
          obj['ReservedInstancesOfferingId'] = _ApiClient["default"].convertToType(data['ReservedInstancesOfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PurchaseReservedInstancesOfferingRequest;
}();
/**
 * @member {Boolean} DryRun
 */


PurchaseReservedInstancesOfferingRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} InstanceCount
 */

PurchaseReservedInstancesOfferingRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/ReservedInstanceLimitPrice} LimitPrice
 */

PurchaseReservedInstancesOfferingRequest.prototype['LimitPrice'] = undefined;
/**
 * @member {Date} PurchaseTime
 */

PurchaseReservedInstancesOfferingRequest.prototype['PurchaseTime'] = undefined;
/**
 * @member {String} ReservedInstancesOfferingId
 */

PurchaseReservedInstancesOfferingRequest.prototype['ReservedInstancesOfferingId'] = undefined;
var _default = PurchaseReservedInstancesOfferingRequest;
exports["default"] = _default;