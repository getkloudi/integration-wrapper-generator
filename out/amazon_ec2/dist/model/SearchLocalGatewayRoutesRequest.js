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
 * The SearchLocalGatewayRoutesRequest model module.
 * @module model/SearchLocalGatewayRoutesRequest
 * @version 1.1.0
 */
var SearchLocalGatewayRoutesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchLocalGatewayRoutesRequest</code>.
   * @alias module:model/SearchLocalGatewayRoutesRequest
   * @param filters {Array.<module:model/Filter>} 
   * @param localGatewayRouteTableId {String} 
   */
  function SearchLocalGatewayRoutesRequest(filters, localGatewayRouteTableId) {
    _classCallCheck(this, SearchLocalGatewayRoutesRequest);

    SearchLocalGatewayRoutesRequest.initialize(this, filters, localGatewayRouteTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchLocalGatewayRoutesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, filters, localGatewayRouteTableId) {
      obj['Filters'] = filters;
      obj['LocalGatewayRouteTableId'] = localGatewayRouteTableId;
    }
    /**
     * Constructs a <code>SearchLocalGatewayRoutesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchLocalGatewayRoutesRequest} obj Optional instance to populate.
     * @return {module:model/SearchLocalGatewayRoutesRequest} The populated <code>SearchLocalGatewayRoutesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchLocalGatewayRoutesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
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

  return SearchLocalGatewayRoutesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


SearchLocalGatewayRoutesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

SearchLocalGatewayRoutesRequest.prototype['Filters'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

SearchLocalGatewayRoutesRequest.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {Number} MaxResults
 */

SearchLocalGatewayRoutesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

SearchLocalGatewayRoutesRequest.prototype['NextToken'] = undefined;
var _default = SearchLocalGatewayRoutesRequest;
exports["default"] = _default;