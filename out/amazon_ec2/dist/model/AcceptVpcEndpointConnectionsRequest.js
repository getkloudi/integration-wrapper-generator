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
 * The AcceptVpcEndpointConnectionsRequest model module.
 * @module model/AcceptVpcEndpointConnectionsRequest
 * @version 1.1.0
 */
var AcceptVpcEndpointConnectionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AcceptVpcEndpointConnectionsRequest</code>.
   * @alias module:model/AcceptVpcEndpointConnectionsRequest
   * @param serviceId {String} 
   * @param vpcEndpointIds {Array.<String>} 
   */
  function AcceptVpcEndpointConnectionsRequest(serviceId, vpcEndpointIds) {
    _classCallCheck(this, AcceptVpcEndpointConnectionsRequest);

    AcceptVpcEndpointConnectionsRequest.initialize(this, serviceId, vpcEndpointIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptVpcEndpointConnectionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceId, vpcEndpointIds) {
      obj['ServiceId'] = serviceId;
      obj['VpcEndpointIds'] = vpcEndpointIds;
    }
    /**
     * Constructs a <code>AcceptVpcEndpointConnectionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptVpcEndpointConnectionsRequest} obj Optional instance to populate.
     * @return {module:model/AcceptVpcEndpointConnectionsRequest} The populated <code>AcceptVpcEndpointConnectionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptVpcEndpointConnectionsRequest();

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

  return AcceptVpcEndpointConnectionsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AcceptVpcEndpointConnectionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ServiceId
 */

AcceptVpcEndpointConnectionsRequest.prototype['ServiceId'] = undefined;
/**
 * @member {Array.<String>} VpcEndpointIds
 */

AcceptVpcEndpointConnectionsRequest.prototype['VpcEndpointIds'] = undefined;
var _default = AcceptVpcEndpointConnectionsRequest;
exports["default"] = _default;