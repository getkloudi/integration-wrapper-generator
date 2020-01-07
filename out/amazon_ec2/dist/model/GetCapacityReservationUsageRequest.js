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
 * The GetCapacityReservationUsageRequest model module.
 * @module model/GetCapacityReservationUsageRequest
 * @version 1.1.0
 */
var GetCapacityReservationUsageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetCapacityReservationUsageRequest</code>.
   * @alias module:model/GetCapacityReservationUsageRequest
   * @param capacityReservationId {String} 
   */
  function GetCapacityReservationUsageRequest(capacityReservationId) {
    _classCallCheck(this, GetCapacityReservationUsageRequest);

    GetCapacityReservationUsageRequest.initialize(this, capacityReservationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCapacityReservationUsageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, capacityReservationId) {
      obj['CapacityReservationId'] = capacityReservationId;
    }
    /**
     * Constructs a <code>GetCapacityReservationUsageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCapacityReservationUsageRequest} obj Optional instance to populate.
     * @return {module:model/GetCapacityReservationUsageRequest} The populated <code>GetCapacityReservationUsageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCapacityReservationUsageRequest();

        if (data.hasOwnProperty('CapacityReservationId')) {
          obj['CapacityReservationId'] = _ApiClient["default"].convertToType(data['CapacityReservationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCapacityReservationUsageRequest;
}();
/**
 * @member {String} CapacityReservationId
 */


GetCapacityReservationUsageRequest.prototype['CapacityReservationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

GetCapacityReservationUsageRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} MaxResults
 */

GetCapacityReservationUsageRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

GetCapacityReservationUsageRequest.prototype['NextToken'] = undefined;
var _default = GetCapacityReservationUsageRequest;
exports["default"] = _default;