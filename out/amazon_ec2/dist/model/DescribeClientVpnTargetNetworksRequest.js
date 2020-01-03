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
 * The DescribeClientVpnTargetNetworksRequest model module.
 * @module model/DescribeClientVpnTargetNetworksRequest
 * @version 1.0.0
 */
var DescribeClientVpnTargetNetworksRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClientVpnTargetNetworksRequest</code>.
   * @alias module:model/DescribeClientVpnTargetNetworksRequest
   * @param clientVpnEndpointId {String} 
   */
  function DescribeClientVpnTargetNetworksRequest(clientVpnEndpointId) {
    _classCallCheck(this, DescribeClientVpnTargetNetworksRequest);

    DescribeClientVpnTargetNetworksRequest.initialize(this, clientVpnEndpointId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClientVpnTargetNetworksRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
    }
    /**
     * Constructs a <code>DescribeClientVpnTargetNetworksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClientVpnTargetNetworksRequest} obj Optional instance to populate.
     * @return {module:model/DescribeClientVpnTargetNetworksRequest} The populated <code>DescribeClientVpnTargetNetworksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClientVpnTargetNetworksRequest();

        if (data.hasOwnProperty('AssociationIds')) {
          obj['AssociationIds'] = _ApiClient["default"].convertToType(data['AssociationIds'], ['String']);
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

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
      }

      return obj;
    }
  }]);

  return DescribeClientVpnTargetNetworksRequest;
}();
/**
 * @member {Array.<String>} AssociationIds
 */


DescribeClientVpnTargetNetworksRequest.prototype['AssociationIds'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

DescribeClientVpnTargetNetworksRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeClientVpnTargetNetworksRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeClientVpnTargetNetworksRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeClientVpnTargetNetworksRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeClientVpnTargetNetworksRequest.prototype['NextToken'] = undefined;
var _default = DescribeClientVpnTargetNetworksRequest;
exports["default"] = _default;