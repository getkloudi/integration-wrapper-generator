"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TargetConfigurationRequest = _interopRequireDefault(require("./TargetConfigurationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetReservedInstancesExchangeQuoteRequest model module.
 * @module model/GetReservedInstancesExchangeQuoteRequest
 * @version 1.0.0
 */
var GetReservedInstancesExchangeQuoteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetReservedInstancesExchangeQuoteRequest</code>.
   * Contains the parameters for GetReservedInstanceExchangeQuote.
   * @alias module:model/GetReservedInstancesExchangeQuoteRequest
   * @param reservedInstanceIds {Array.<String>} 
   */
  function GetReservedInstancesExchangeQuoteRequest(reservedInstanceIds) {
    _classCallCheck(this, GetReservedInstancesExchangeQuoteRequest);

    GetReservedInstancesExchangeQuoteRequest.initialize(this, reservedInstanceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetReservedInstancesExchangeQuoteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reservedInstanceIds) {
      obj['ReservedInstanceIds'] = reservedInstanceIds;
    }
    /**
     * Constructs a <code>GetReservedInstancesExchangeQuoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReservedInstancesExchangeQuoteRequest} obj Optional instance to populate.
     * @return {module:model/GetReservedInstancesExchangeQuoteRequest} The populated <code>GetReservedInstancesExchangeQuoteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetReservedInstancesExchangeQuoteRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ReservedInstanceIds')) {
          obj['ReservedInstanceIds'] = _ApiClient["default"].convertToType(data['ReservedInstanceIds'], ['String']);
        }

        if (data.hasOwnProperty('TargetConfigurations')) {
          obj['TargetConfigurations'] = _ApiClient["default"].convertToType(data['TargetConfigurations'], [_TargetConfigurationRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetReservedInstancesExchangeQuoteRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetReservedInstancesExchangeQuoteRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ReservedInstanceIds
 */

GetReservedInstancesExchangeQuoteRequest.prototype['ReservedInstanceIds'] = undefined;
/**
 * @member {Array.<module:model/TargetConfigurationRequest>} TargetConfigurations
 */

GetReservedInstancesExchangeQuoteRequest.prototype['TargetConfigurations'] = undefined;
var _default = GetReservedInstancesExchangeQuoteRequest;
exports["default"] = _default;