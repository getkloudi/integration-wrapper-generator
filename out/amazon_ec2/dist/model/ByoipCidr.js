"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ByoipCidrState = _interopRequireDefault(require("./ByoipCidrState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ByoipCidr model module.
 * @module model/ByoipCidr
 * @version 1.1.0
 */
var ByoipCidr =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ByoipCidr</code>.
   * Information about an address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP).
   * @alias module:model/ByoipCidr
   */
  function ByoipCidr() {
    _classCallCheck(this, ByoipCidr);

    ByoipCidr.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ByoipCidr, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ByoipCidr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ByoipCidr} obj Optional instance to populate.
     * @return {module:model/ByoipCidr} The populated <code>ByoipCidr</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ByoipCidr();

        if (data.hasOwnProperty('Cidr')) {
          obj['Cidr'] = _ApiClient["default"].convertToType(data['Cidr'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ByoipCidrState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ByoipCidr;
}();
/**
 * @member {String} Cidr
 */


ByoipCidr.prototype['Cidr'] = undefined;
/**
 * @member {String} Description
 */

ByoipCidr.prototype['Description'] = undefined;
/**
 * @member {module:model/ByoipCidrState} State
 */

ByoipCidr.prototype['State'] = undefined;
/**
 * @member {String} StatusMessage
 */

ByoipCidr.prototype['StatusMessage'] = undefined;
var _default = ByoipCidr;
exports["default"] = _default;