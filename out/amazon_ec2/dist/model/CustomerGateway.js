"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomerGateway model module.
 * @module model/CustomerGateway
 * @version 1.1.0
 */
var CustomerGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CustomerGateway</code>.
   * Describes a customer gateway.
   * @alias module:model/CustomerGateway
   */
  function CustomerGateway() {
    _classCallCheck(this, CustomerGateway);

    CustomerGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerGateway} obj Optional instance to populate.
     * @return {module:model/CustomerGateway} The populated <code>CustomerGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerGateway();

        if (data.hasOwnProperty('BgpAsn')) {
          obj['BgpAsn'] = _ApiClient["default"].convertToType(data['BgpAsn'], 'String');
        }

        if (data.hasOwnProperty('CertificateArn')) {
          obj['CertificateArn'] = _ApiClient["default"].convertToType(data['CertificateArn'], 'String');
        }

        if (data.hasOwnProperty('CustomerGatewayId')) {
          obj['CustomerGatewayId'] = _ApiClient["default"].convertToType(data['CustomerGatewayId'], 'String');
        }

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('IpAddress')) {
          obj['IpAddress'] = _ApiClient["default"].convertToType(data['IpAddress'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerGateway;
}();
/**
 * @member {String} BgpAsn
 */


CustomerGateway.prototype['BgpAsn'] = undefined;
/**
 * @member {String} CertificateArn
 */

CustomerGateway.prototype['CertificateArn'] = undefined;
/**
 * @member {String} CustomerGatewayId
 */

CustomerGateway.prototype['CustomerGatewayId'] = undefined;
/**
 * @member {String} DeviceName
 */

CustomerGateway.prototype['DeviceName'] = undefined;
/**
 * @member {String} IpAddress
 */

CustomerGateway.prototype['IpAddress'] = undefined;
/**
 * @member {String} State
 */

CustomerGateway.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

CustomerGateway.prototype['Tags'] = undefined;
/**
 * @member {String} Type
 */

CustomerGateway.prototype['Type'] = undefined;
var _default = CustomerGateway;
exports["default"] = _default;