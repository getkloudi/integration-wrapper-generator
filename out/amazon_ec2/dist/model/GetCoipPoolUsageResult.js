"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoipAddressUsage = _interopRequireDefault(require("./CoipAddressUsage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetCoipPoolUsageResult model module.
 * @module model/GetCoipPoolUsageResult
 * @version 1.1.0
 */
var GetCoipPoolUsageResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetCoipPoolUsageResult</code>.
   * @alias module:model/GetCoipPoolUsageResult
   */
  function GetCoipPoolUsageResult() {
    _classCallCheck(this, GetCoipPoolUsageResult);

    GetCoipPoolUsageResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCoipPoolUsageResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCoipPoolUsageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCoipPoolUsageResult} obj Optional instance to populate.
     * @return {module:model/GetCoipPoolUsageResult} The populated <code>GetCoipPoolUsageResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCoipPoolUsageResult();

        if (data.hasOwnProperty('CoipAddressUsages')) {
          obj['CoipAddressUsages'] = _ApiClient["default"].convertToType(data['CoipAddressUsages'], [_CoipAddressUsage["default"]]);
        }

        if (data.hasOwnProperty('CoipPoolId')) {
          obj['CoipPoolId'] = _ApiClient["default"].convertToType(data['CoipPoolId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCoipPoolUsageResult;
}();
/**
 * @member {Array.<module:model/CoipAddressUsage>} CoipAddressUsages
 */


GetCoipPoolUsageResult.prototype['CoipAddressUsages'] = undefined;
/**
 * @member {String} CoipPoolId
 */

GetCoipPoolUsageResult.prototype['CoipPoolId'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

GetCoipPoolUsageResult.prototype['LocalGatewayRouteTableId'] = undefined;
var _default = GetCoipPoolUsageResult;
exports["default"] = _default;