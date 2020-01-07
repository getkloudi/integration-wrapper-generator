"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnConnectionStatusCode = _interopRequireDefault(require("./ClientVpnConnectionStatusCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnConnectionStatus model module.
 * @module model/ClientVpnConnectionStatus
 * @version 1.1.0
 */
var ClientVpnConnectionStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnConnectionStatus</code>.
   * Describes the status of a client connection.
   * @alias module:model/ClientVpnConnectionStatus
   */
  function ClientVpnConnectionStatus() {
    _classCallCheck(this, ClientVpnConnectionStatus);

    ClientVpnConnectionStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnConnectionStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnConnectionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnConnectionStatus} obj Optional instance to populate.
     * @return {module:model/ClientVpnConnectionStatus} The populated <code>ClientVpnConnectionStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnConnectionStatus();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ClientVpnConnectionStatusCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClientVpnConnectionStatus;
}();
/**
 * @member {module:model/ClientVpnConnectionStatusCode} Code
 */


ClientVpnConnectionStatus.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

ClientVpnConnectionStatus.prototype['Message'] = undefined;
var _default = ClientVpnConnectionStatus;
exports["default"] = _default;