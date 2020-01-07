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
 * The Phase1EncryptionAlgorithmsRequestListValue model module.
 * @module model/Phase1EncryptionAlgorithmsRequestListValue
 * @version 1.1.0
 */
var Phase1EncryptionAlgorithmsRequestListValue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Phase1EncryptionAlgorithmsRequestListValue</code>.
   * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
   * @alias module:model/Phase1EncryptionAlgorithmsRequestListValue
   */
  function Phase1EncryptionAlgorithmsRequestListValue() {
    _classCallCheck(this, Phase1EncryptionAlgorithmsRequestListValue);

    Phase1EncryptionAlgorithmsRequestListValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Phase1EncryptionAlgorithmsRequestListValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Phase1EncryptionAlgorithmsRequestListValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Phase1EncryptionAlgorithmsRequestListValue} obj Optional instance to populate.
     * @return {module:model/Phase1EncryptionAlgorithmsRequestListValue} The populated <code>Phase1EncryptionAlgorithmsRequestListValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Phase1EncryptionAlgorithmsRequestListValue();

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Phase1EncryptionAlgorithmsRequestListValue;
}();
/**
 * @member {String} Value
 */


Phase1EncryptionAlgorithmsRequestListValue.prototype['Value'] = undefined;
var _default = Phase1EncryptionAlgorithmsRequestListValue;
exports["default"] = _default;