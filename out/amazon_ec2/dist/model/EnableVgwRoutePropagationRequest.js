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
 * The EnableVgwRoutePropagationRequest model module.
 * @module model/EnableVgwRoutePropagationRequest
 * @version 1.0.0
 */
var EnableVgwRoutePropagationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableVgwRoutePropagationRequest</code>.
   * Contains the parameters for EnableVgwRoutePropagation.
   * @alias module:model/EnableVgwRoutePropagationRequest
   * @param gatewayId {String} 
   * @param routeTableId {String} 
   */
  function EnableVgwRoutePropagationRequest(gatewayId, routeTableId) {
    _classCallCheck(this, EnableVgwRoutePropagationRequest);

    EnableVgwRoutePropagationRequest.initialize(this, gatewayId, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableVgwRoutePropagationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, gatewayId, routeTableId) {
      obj['GatewayId'] = gatewayId;
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>EnableVgwRoutePropagationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableVgwRoutePropagationRequest} obj Optional instance to populate.
     * @return {module:model/EnableVgwRoutePropagationRequest} The populated <code>EnableVgwRoutePropagationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableVgwRoutePropagationRequest();

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

  return EnableVgwRoutePropagationRequest;
}();
/**
 * @member {String} GatewayId
 */


EnableVgwRoutePropagationRequest.prototype['GatewayId'] = undefined;
/**
 * @member {String} RouteTableId
 */

EnableVgwRoutePropagationRequest.prototype['RouteTableId'] = undefined;
var _default = EnableVgwRoutePropagationRequest;
exports["default"] = _default;