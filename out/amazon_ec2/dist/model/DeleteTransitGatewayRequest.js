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
 * The DeleteTransitGatewayRequest model module.
 * @module model/DeleteTransitGatewayRequest
 * @version 1.0.0
 */
var DeleteTransitGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayRequest</code>.
   * @alias module:model/DeleteTransitGatewayRequest
   * @param transitGatewayId {String} 
   */
  function DeleteTransitGatewayRequest(transitGatewayId) {
    _classCallCheck(this, DeleteTransitGatewayRequest);

    DeleteTransitGatewayRequest.initialize(this, transitGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, transitGatewayId) {
      obj['TransitGatewayId'] = transitGatewayId;
    }
    /**
     * Constructs a <code>DeleteTransitGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayRequest} The populated <code>DeleteTransitGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTransitGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

DeleteTransitGatewayRequest.prototype['TransitGatewayId'] = undefined;
var _default = DeleteTransitGatewayRequest;
exports["default"] = _default;