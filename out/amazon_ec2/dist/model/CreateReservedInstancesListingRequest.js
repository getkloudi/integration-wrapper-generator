"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PriceScheduleSpecification = _interopRequireDefault(require("./PriceScheduleSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateReservedInstancesListingRequest model module.
 * @module model/CreateReservedInstancesListingRequest
 * @version 1.0.0
 */
var CreateReservedInstancesListingRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateReservedInstancesListingRequest</code>.
   * Contains the parameters for CreateReservedInstancesListing.
   * @alias module:model/CreateReservedInstancesListingRequest
   * @param clientToken {String} 
   * @param instanceCount {Number} 
   * @param priceSchedules {Array.<module:model/PriceScheduleSpecification>} 
   * @param reservedInstancesId {String} 
   */
  function CreateReservedInstancesListingRequest(clientToken, instanceCount, priceSchedules, reservedInstancesId) {
    _classCallCheck(this, CreateReservedInstancesListingRequest);

    CreateReservedInstancesListingRequest.initialize(this, clientToken, instanceCount, priceSchedules, reservedInstancesId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateReservedInstancesListingRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientToken, instanceCount, priceSchedules, reservedInstancesId) {
      obj['ClientToken'] = clientToken;
      obj['InstanceCount'] = instanceCount;
      obj['PriceSchedules'] = priceSchedules;
      obj['ReservedInstancesId'] = reservedInstancesId;
    }
    /**
     * Constructs a <code>CreateReservedInstancesListingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReservedInstancesListingRequest} obj Optional instance to populate.
     * @return {module:model/CreateReservedInstancesListingRequest} The populated <code>CreateReservedInstancesListingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateReservedInstancesListingRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('PriceSchedules')) {
          obj['PriceSchedules'] = _ApiClient["default"].convertToType(data['PriceSchedules'], [_PriceScheduleSpecification["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesId')) {
          obj['ReservedInstancesId'] = _ApiClient["default"].convertToType(data['ReservedInstancesId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateReservedInstancesListingRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateReservedInstancesListingRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Number} InstanceCount
 */

CreateReservedInstancesListingRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {Array.<module:model/PriceScheduleSpecification>} PriceSchedules
 */

CreateReservedInstancesListingRequest.prototype['PriceSchedules'] = undefined;
/**
 * @member {String} ReservedInstancesId
 */

CreateReservedInstancesListingRequest.prototype['ReservedInstancesId'] = undefined;
var _default = CreateReservedInstancesListingRequest;
exports["default"] = _default;