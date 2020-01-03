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
 * The RejectVpcEndpointConnectionsRequest model module.
 * @module model/RejectVpcEndpointConnectionsRequest
 * @version 1.0.0
 */
var RejectVpcEndpointConnectionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RejectVpcEndpointConnectionsRequest</code>.
   * @alias module:model/RejectVpcEndpointConnectionsRequest
   * @param serviceId {String} 
   * @param vpcEndpointIds {Array.<String>} 
   */
  function RejectVpcEndpointConnectionsRequest(serviceId, vpcEndpointIds) {
    _classCallCheck(this, RejectVpcEndpointConnectionsRequest);

    RejectVpcEndpointConnectionsRequest.initialize(this, serviceId, vpcEndpointIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RejectVpcEndpointConnectionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceId, vpcEndpointIds) {
      obj['ServiceId'] = serviceId;
      obj['VpcEndpointIds'] = vpcEndpointIds;
    }
    /**
     * Constructs a <code>RejectVpcEndpointConnectionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectVpcEndpointConnectionsRequest} obj Optional instance to populate.
     * @return {module:model/RejectVpcEndpointConnectionsRequest} The populated <code>RejectVpcEndpointConnectionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RejectVpcEndpointConnectionsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointIds')) {
          obj['VpcEndpointIds'] = _ApiClient["default"].convertToType(data['VpcEndpointIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RejectVpcEndpointConnectionsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RejectVpcEndpointConnectionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ServiceId
 */

RejectVpcEndpointConnectionsRequest.prototype['ServiceId'] = undefined;
/**
 * @member {Array.<String>} VpcEndpointIds
 */

RejectVpcEndpointConnectionsRequest.prototype['VpcEndpointIds'] = undefined;
var _default = RejectVpcEndpointConnectionsRequest;
exports["default"] = _default;