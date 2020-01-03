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
 * The DeleteRouteRequest model module.
 * @module model/DeleteRouteRequest
 * @version 1.0.0
 */
var DeleteRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteRouteRequest</code>.
   * @alias module:model/DeleteRouteRequest
   * @param routeTableId {String} 
   */
  function DeleteRouteRequest(routeTableId) {
    _classCallCheck(this, DeleteRouteRequest);

    DeleteRouteRequest.initialize(this, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, routeTableId) {
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>DeleteRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRouteRequest} obj Optional instance to populate.
     * @return {module:model/DeleteRouteRequest} The populated <code>DeleteRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteRouteRequest();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationIpv6CidrBlock')) {
          obj['DestinationIpv6CidrBlock'] = _ApiClient["default"].convertToType(data['DestinationIpv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteRouteRequest;
}();
/**
 * @member {String} DestinationCidrBlock
 */


DeleteRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {String} DestinationIpv6CidrBlock
 */

DeleteRouteRequest.prototype['DestinationIpv6CidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} RouteTableId
 */

DeleteRouteRequest.prototype['RouteTableId'] = undefined;
var _default = DeleteRouteRequest;
exports["default"] = _default;