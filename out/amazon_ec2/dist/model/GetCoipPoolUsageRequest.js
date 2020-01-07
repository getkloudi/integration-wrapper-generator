"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetCoipPoolUsageRequest model module.
 * @module model/GetCoipPoolUsageRequest
 * @version 1.1.0
 */
var GetCoipPoolUsageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetCoipPoolUsageRequest</code>.
   * @alias module:model/GetCoipPoolUsageRequest
   * @param poolId {String} 
   */
  function GetCoipPoolUsageRequest(poolId) {
    _classCallCheck(this, GetCoipPoolUsageRequest);

    GetCoipPoolUsageRequest.initialize(this, poolId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCoipPoolUsageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, poolId) {
      obj['PoolId'] = poolId;
    }
    /**
     * Constructs a <code>GetCoipPoolUsageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCoipPoolUsageRequest} obj Optional instance to populate.
     * @return {module:model/GetCoipPoolUsageRequest} The populated <code>GetCoipPoolUsageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCoipPoolUsageRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('PoolId')) {
          obj['PoolId'] = _ApiClient["default"].convertToType(data['PoolId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCoipPoolUsageRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetCoipPoolUsageRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

GetCoipPoolUsageRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

GetCoipPoolUsageRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

GetCoipPoolUsageRequest.prototype['NextToken'] = undefined;
/**
 * @member {String} PoolId
 */

GetCoipPoolUsageRequest.prototype['PoolId'] = undefined;
var _default = GetCoipPoolUsageRequest;
exports["default"] = _default;