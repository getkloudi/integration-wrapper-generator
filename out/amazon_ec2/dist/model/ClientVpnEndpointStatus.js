"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnEndpointStatusCode = _interopRequireDefault(require("./ClientVpnEndpointStatusCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnEndpointStatus model module.
 * @module model/ClientVpnEndpointStatus
 * @version 1.1.0
 */
var ClientVpnEndpointStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnEndpointStatus</code>.
   * Describes the state of a Client VPN endpoint.
   * @alias module:model/ClientVpnEndpointStatus
   */
  function ClientVpnEndpointStatus() {
    _classCallCheck(this, ClientVpnEndpointStatus);

    ClientVpnEndpointStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnEndpointStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnEndpointStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnEndpointStatus} obj Optional instance to populate.
     * @return {module:model/ClientVpnEndpointStatus} The populated <code>ClientVpnEndpointStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnEndpointStatus();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ClientVpnEndpointStatusCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClientVpnEndpointStatus;
}();
/**
 * @member {module:model/ClientVpnEndpointStatusCode} Code
 */


ClientVpnEndpointStatus.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

ClientVpnEndpointStatus.prototype['Message'] = undefined;
var _default = ClientVpnEndpointStatus;
exports["default"] = _default;