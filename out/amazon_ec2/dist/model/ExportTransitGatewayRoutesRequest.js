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
 * The ExportTransitGatewayRoutesRequest model module.
 * @module model/ExportTransitGatewayRoutesRequest
 * @version 1.1.0
 */
var ExportTransitGatewayRoutesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportTransitGatewayRoutesRequest</code>.
   * @alias module:model/ExportTransitGatewayRoutesRequest
   * @param s3Bucket {String} 
   * @param transitGatewayRouteTableId {String} 
   */
  function ExportTransitGatewayRoutesRequest(s3Bucket, transitGatewayRouteTableId) {
    _classCallCheck(this, ExportTransitGatewayRoutesRequest);

    ExportTransitGatewayRoutesRequest.initialize(this, s3Bucket, transitGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportTransitGatewayRoutesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, s3Bucket, transitGatewayRouteTableId) {
      obj['S3Bucket'] = s3Bucket;
      obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }
    /**
     * Constructs a <code>ExportTransitGatewayRoutesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportTransitGatewayRoutesRequest} obj Optional instance to populate.
     * @return {module:model/ExportTransitGatewayRoutesRequest} The populated <code>ExportTransitGatewayRoutesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportTransitGatewayRoutesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('S3Bucket')) {
          obj['S3Bucket'] = _ApiClient["default"].convertToType(data['S3Bucket'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportTransitGatewayRoutesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ExportTransitGatewayRoutesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

ExportTransitGatewayRoutesRequest.prototype['Filters'] = undefined;
/**
 * @member {String} S3Bucket
 */

ExportTransitGatewayRoutesRequest.prototype['S3Bucket'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

ExportTransitGatewayRoutesRequest.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = ExportTransitGatewayRoutesRequest;
exports["default"] = _default;