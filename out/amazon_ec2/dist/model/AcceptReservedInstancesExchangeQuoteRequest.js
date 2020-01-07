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
 * The AcceptReservedInstancesExchangeQuoteRequest model module.
 * @module model/AcceptReservedInstancesExchangeQuoteRequest
 * @version 1.1.0
 */
var AcceptReservedInstancesExchangeQuoteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AcceptReservedInstancesExchangeQuoteRequest</code>.
   * Contains the parameters for accepting the quote.
   * @alias module:model/AcceptReservedInstancesExchangeQuoteRequest
   * @param reservedInstanceIds {Array.<String>} 
   */
  function AcceptReservedInstancesExchangeQuoteRequest(reservedInstanceIds) {
    _classCallCheck(this, AcceptReservedInstancesExchangeQuoteRequest);

    AcceptReservedInstancesExchangeQuoteRequest.initialize(this, reservedInstanceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptReservedInstancesExchangeQuoteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reservedInstanceIds) {
      obj['ReservedInstanceIds'] = reservedInstanceIds;
    }
    /**
     * Constructs a <code>AcceptReservedInstancesExchangeQuoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptReservedInstancesExchangeQuoteRequest} obj Optional instance to populate.
     * @return {module:model/AcceptReservedInstancesExchangeQuoteRequest} The populated <code>AcceptReservedInstancesExchangeQuoteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptReservedInstancesExchangeQuoteRequest();

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

  return AcceptReservedInstancesExchangeQuoteRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AcceptReservedInstancesExchangeQuoteRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ReservedInstanceIds
 */

AcceptReservedInstancesExchangeQuoteRequest.prototype['ReservedInstanceIds'] = undefined;
/**
 * @member {Array.<module:model/TargetConfigurationRequest>} TargetConfigurations
 */

AcceptReservedInstancesExchangeQuoteRequest.prototype['TargetConfigurations'] = undefined;
var _default = AcceptReservedInstancesExchangeQuoteRequest;
exports["default"] = _default;