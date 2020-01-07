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
 * The DisableVgwRoutePropagationRequest model module.
 * @module model/DisableVgwRoutePropagationRequest
 * @version 1.1.0
 */
var DisableVgwRoutePropagationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisableVgwRoutePropagationRequest</code>.
   * Contains the parameters for DisableVgwRoutePropagation.
   * @alias module:model/DisableVgwRoutePropagationRequest
   * @param gatewayId {String} 
   * @param routeTableId {String} 
   */
  function DisableVgwRoutePropagationRequest(gatewayId, routeTableId) {
    _classCallCheck(this, DisableVgwRoutePropagationRequest);

    DisableVgwRoutePropagationRequest.initialize(this, gatewayId, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisableVgwRoutePropagationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, gatewayId, routeTableId) {
      obj['GatewayId'] = gatewayId;
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>DisableVgwRoutePropagationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableVgwRoutePropagationRequest} obj Optional instance to populate.
     * @return {module:model/DisableVgwRoutePropagationRequest} The populated <code>DisableVgwRoutePropagationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisableVgwRoutePropagationRequest();

        if (data.hasOwnProperty('GatewayId')) {
          obj['GatewayId'] = _ApiClient["default"].convertToType(data['GatewayId'], 'String');
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DisableVgwRoutePropagationRequest;
}();
/**
 * @member {String} GatewayId
 */


DisableVgwRoutePropagationRequest.prototype['GatewayId'] = undefined;
/**
 * @member {String} RouteTableId
 */

DisableVgwRoutePropagationRequest.prototype['RouteTableId'] = undefined;
var _default = DisableVgwRoutePropagationRequest;
exports["default"] = _default;