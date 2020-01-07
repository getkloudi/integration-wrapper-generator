"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnConnectionStatus = _interopRequireDefault(require("./ClientVpnConnectionStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TerminateConnectionStatus model module.
 * @module model/TerminateConnectionStatus
 * @version 1.1.0
 */
var TerminateConnectionStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TerminateConnectionStatus</code>.
   * Information about a terminated Client VPN endpoint client connection.
   * @alias module:model/TerminateConnectionStatus
   */
  function TerminateConnectionStatus() {
    _classCallCheck(this, TerminateConnectionStatus);

    TerminateConnectionStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TerminateConnectionStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TerminateConnectionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TerminateConnectionStatus} obj Optional instance to populate.
     * @return {module:model/TerminateConnectionStatus} The populated <code>TerminateConnectionStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TerminateConnectionStatus();

        if (data.hasOwnProperty('ConnectionId')) {
          obj['ConnectionId'] = _ApiClient["default"].convertToType(data['ConnectionId'], 'String');
        }

        if (data.hasOwnProperty('CurrentStatus')) {
          obj['CurrentStatus'] = _ClientVpnConnectionStatus["default"].constructFromObject(data['CurrentStatus']);
        }

        if (data.hasOwnProperty('PreviousStatus')) {
          obj['PreviousStatus'] = _ClientVpnConnectionStatus["default"].constructFromObject(data['PreviousStatus']);
        }
      }

      return obj;
    }
  }]);

  return TerminateConnectionStatus;
}();
/**
 * @member {String} ConnectionId
 */


TerminateConnectionStatus.prototype['ConnectionId'] = undefined;
/**
 * @member {module:model/ClientVpnConnectionStatus} CurrentStatus
 */

TerminateConnectionStatus.prototype['CurrentStatus'] = undefined;
/**
 * @member {module:model/ClientVpnConnectionStatus} PreviousStatus
 */

TerminateConnectionStatus.prototype['PreviousStatus'] = undefined;
var _default = TerminateConnectionStatus;
exports["default"] = _default;