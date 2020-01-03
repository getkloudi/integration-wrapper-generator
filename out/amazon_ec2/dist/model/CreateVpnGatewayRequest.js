"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GatewayType = _interopRequireDefault(require("./GatewayType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpnGatewayRequest model module.
 * @module model/CreateVpnGatewayRequest
 * @version 1.0.0
 */
var CreateVpnGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpnGatewayRequest</code>.
   * Contains the parameters for CreateVpnGateway.
   * @alias module:model/CreateVpnGatewayRequest
   * @param type {module:model/GatewayType} 
   */
  function CreateVpnGatewayRequest(type) {
    _classCallCheck(this, CreateVpnGatewayRequest);

    CreateVpnGatewayRequest.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpnGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>CreateVpnGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpnGatewayRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpnGatewayRequest} The populated <code>CreateVpnGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpnGatewayRequest();

        if (data.hasOwnProperty('AmazonSideAsn')) {
          obj['AmazonSideAsn'] = _ApiClient["default"].convertToType(data['AmazonSideAsn'], 'Number');
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _GatewayType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpnGatewayRequest;
}();
/**
 * @member {Number} AmazonSideAsn
 */


CreateVpnGatewayRequest.prototype['AmazonSideAsn'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

CreateVpnGatewayRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVpnGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/GatewayType} Type
 */

CreateVpnGatewayRequest.prototype['Type'] = undefined;
var _default = CreateVpnGatewayRequest;
exports["default"] = _default;