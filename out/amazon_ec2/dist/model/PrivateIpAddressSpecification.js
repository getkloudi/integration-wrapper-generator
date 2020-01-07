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
 * The PrivateIpAddressSpecification model module.
 * @module model/PrivateIpAddressSpecification
 * @version 1.1.0
 */
var PrivateIpAddressSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PrivateIpAddressSpecification</code>.
   * Describes a secondary private IPv4 address for a network interface.
   * @alias module:model/PrivateIpAddressSpecification
   */
  function PrivateIpAddressSpecification() {
    _classCallCheck(this, PrivateIpAddressSpecification);

    PrivateIpAddressSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrivateIpAddressSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PrivateIpAddressSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateIpAddressSpecification} obj Optional instance to populate.
     * @return {module:model/PrivateIpAddressSpecification} The populated <code>PrivateIpAddressSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrivateIpAddressSpecification();

        if (data.hasOwnProperty('Primary')) {
          obj['Primary'] = _ApiClient["default"].convertToType(data['Primary'], 'Boolean');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrivateIpAddressSpecification;
}();
/**
 * @member {Boolean} Primary
 */


PrivateIpAddressSpecification.prototype['Primary'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

PrivateIpAddressSpecification.prototype['PrivateIpAddress'] = undefined;
var _default = PrivateIpAddressSpecification;
exports["default"] = _default;