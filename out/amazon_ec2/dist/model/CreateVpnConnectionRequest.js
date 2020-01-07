"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnConnectionOptionsSpecification = _interopRequireDefault(require("./VpnConnectionOptionsSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpnConnectionRequest model module.
 * @module model/CreateVpnConnectionRequest
 * @version 1.1.0
 */
var CreateVpnConnectionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpnConnectionRequest</code>.
   * Contains the parameters for CreateVpnConnection.
   * @alias module:model/CreateVpnConnectionRequest
   * @param customerGatewayId {String} 
   * @param type {String} 
   */
  function CreateVpnConnectionRequest(customerGatewayId, type) {
    _classCallCheck(this, CreateVpnConnectionRequest);

    CreateVpnConnectionRequest.initialize(this, customerGatewayId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpnConnectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, customerGatewayId, type) {
      obj['CustomerGatewayId'] = customerGatewayId;
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>CreateVpnConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpnConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpnConnectionRequest} The populated <code>CreateVpnConnectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpnConnectionRequest();

        if (data.hasOwnProperty('CustomerGatewayId')) {
          obj['CustomerGatewayId'] = _ApiClient["default"].convertToType(data['CustomerGatewayId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _VpnConnectionOptionsSpecification["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVpnConnectionRequest;
}();
/**
 * @member {String} CustomerGatewayId
 */


CreateVpnConnectionRequest.prototype['CustomerGatewayId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVpnConnectionRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/VpnConnectionOptionsSpecification} Options
 */

CreateVpnConnectionRequest.prototype['Options'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

CreateVpnConnectionRequest.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} Type
 */

CreateVpnConnectionRequest.prototype['Type'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

CreateVpnConnectionRequest.prototype['VpnGatewayId'] = undefined;
var _default = CreateVpnConnectionRequest;
exports["default"] = _default;