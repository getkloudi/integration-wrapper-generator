"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTransitGatewayRouteTableRequest model module.
 * @module model/CreateTransitGatewayRouteTableRequest
 * @version 1.0.0
 */
var CreateTransitGatewayRouteTableRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayRouteTableRequest</code>.
   * @alias module:model/CreateTransitGatewayRouteTableRequest
   * @param transitGatewayId {String} 
   */
  function CreateTransitGatewayRouteTableRequest(transitGatewayId) {
    _classCallCheck(this, CreateTransitGatewayRouteTableRequest);

    CreateTransitGatewayRouteTableRequest.initialize(this, transitGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayRouteTableRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayId) {
      obj['TransitGatewayId'] = transitGatewayId;
    }
    /**
     * Constructs a <code>CreateTransitGatewayRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayRouteTableRequest} The populated <code>CreateTransitGatewayRouteTableRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayRouteTableRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTransitGatewayRouteTableRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateTransitGatewayRouteTableRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTransitGatewayRouteTableRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

CreateTransitGatewayRouteTableRequest.prototype['TransitGatewayId'] = undefined;
var _default = CreateTransitGatewayRouteTableRequest;
exports["default"] = _default;