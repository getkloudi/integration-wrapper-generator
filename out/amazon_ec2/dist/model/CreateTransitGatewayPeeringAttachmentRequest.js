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
 * The CreateTransitGatewayPeeringAttachmentRequest model module.
 * @module model/CreateTransitGatewayPeeringAttachmentRequest
 * @version 1.0.0
 */
var CreateTransitGatewayPeeringAttachmentRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayPeeringAttachmentRequest</code>.
   * @alias module:model/CreateTransitGatewayPeeringAttachmentRequest
   * @param peerAccountId {String} 
   * @param peerRegion {String} 
   * @param peerTransitGatewayId {String} 
   * @param transitGatewayId {String} 
   */
  function CreateTransitGatewayPeeringAttachmentRequest(peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId) {
    _classCallCheck(this, CreateTransitGatewayPeeringAttachmentRequest);

    CreateTransitGatewayPeeringAttachmentRequest.initialize(this, peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayPeeringAttachmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId) {
      obj['PeerAccountId'] = peerAccountId;
      obj['PeerRegion'] = peerRegion;
      obj['PeerTransitGatewayId'] = peerTransitGatewayId;
      obj['TransitGatewayId'] = transitGatewayId;
    }
    /**
     * Constructs a <code>CreateTransitGatewayPeeringAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayPeeringAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayPeeringAttachmentRequest} The populated <code>CreateTransitGatewayPeeringAttachmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayPeeringAttachmentRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PeerAccountId')) {
          obj['PeerAccountId'] = _ApiClient["default"].convertToType(data['PeerAccountId'], 'String');
        }

        if (data.hasOwnProperty('PeerRegion')) {
          obj['PeerRegion'] = _ApiClient["default"].convertToType(data['PeerRegion'], 'String');
        }

        if (data.hasOwnProperty('PeerTransitGatewayId')) {
          obj['PeerTransitGatewayId'] = _ApiClient["default"].convertToType(data['PeerTransitGatewayId'], 'String');
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

  return CreateTransitGatewayPeeringAttachmentRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateTransitGatewayPeeringAttachmentRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PeerAccountId
 */

CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerAccountId'] = undefined;
/**
 * @member {String} PeerRegion
 */

CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerRegion'] = undefined;
/**
 * @member {String} PeerTransitGatewayId
 */

CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerTransitGatewayId'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTransitGatewayPeeringAttachmentRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

CreateTransitGatewayPeeringAttachmentRequest.prototype['TransitGatewayId'] = undefined;
var _default = CreateTransitGatewayPeeringAttachmentRequest;
exports["default"] = _default;