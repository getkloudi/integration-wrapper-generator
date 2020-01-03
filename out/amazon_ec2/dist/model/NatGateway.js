"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NatGatewayAddress = _interopRequireDefault(require("./NatGatewayAddress"));

var _NatGatewayState = _interopRequireDefault(require("./NatGatewayState"));

var _ProvisionedBandwidth = _interopRequireDefault(require("./ProvisionedBandwidth"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NatGateway model module.
 * @module model/NatGateway
 * @version 1.0.0
 */
var NatGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NatGateway</code>.
   * Describes a NAT gateway.
   * @alias module:model/NatGateway
   */
  function NatGateway() {
    _classCallCheck(this, NatGateway);

    NatGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NatGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NatGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NatGateway} obj Optional instance to populate.
     * @return {module:model/NatGateway} The populated <code>NatGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NatGateway();

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('DeleteTime')) {
          obj['DeleteTime'] = _ApiClient["default"].convertToType(data['DeleteTime'], 'Date');
        }

        if (data.hasOwnProperty('FailureCode')) {
          obj['FailureCode'] = _ApiClient["default"].convertToType(data['FailureCode'], 'String');
        }

        if (data.hasOwnProperty('FailureMessage')) {
          obj['FailureMessage'] = _ApiClient["default"].convertToType(data['FailureMessage'], 'String');
        }

        if (data.hasOwnProperty('NatGatewayAddresses')) {
          obj['NatGatewayAddresses'] = _ApiClient["default"].convertToType(data['NatGatewayAddresses'], [_NatGatewayAddress["default"]]);
        }

        if (data.hasOwnProperty('NatGatewayId')) {
          obj['NatGatewayId'] = _ApiClient["default"].convertToType(data['NatGatewayId'], 'String');
        }

        if (data.hasOwnProperty('ProvisionedBandwidth')) {
          obj['ProvisionedBandwidth'] = _ProvisionedBandwidth["default"].constructFromObject(data['ProvisionedBandwidth']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _NatGatewayState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NatGateway;
}();
/**
 * @member {Date} CreateTime
 */


NatGateway.prototype['CreateTime'] = undefined;
/**
 * @member {Date} DeleteTime
 */

NatGateway.prototype['DeleteTime'] = undefined;
/**
 * @member {String} FailureCode
 */

NatGateway.prototype['FailureCode'] = undefined;
/**
 * @member {String} FailureMessage
 */

NatGateway.prototype['FailureMessage'] = undefined;
/**
 * @member {Array.<module:model/NatGatewayAddress>} NatGatewayAddresses
 */

NatGateway.prototype['NatGatewayAddresses'] = undefined;
/**
 * @member {String} NatGatewayId
 */

NatGateway.prototype['NatGatewayId'] = undefined;
/**
 * @member {module:model/ProvisionedBandwidth} ProvisionedBandwidth
 */

NatGateway.prototype['ProvisionedBandwidth'] = undefined;
/**
 * @member {module:model/NatGatewayState} State
 */

NatGateway.prototype['State'] = undefined;
/**
 * @member {String} SubnetId
 */

NatGateway.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

NatGateway.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

NatGateway.prototype['VpcId'] = undefined;
var _default = NatGateway;
exports["default"] = _default;