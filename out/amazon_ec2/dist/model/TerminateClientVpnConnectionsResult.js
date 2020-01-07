"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TerminateConnectionStatus = _interopRequireDefault(require("./TerminateConnectionStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TerminateClientVpnConnectionsResult model module.
 * @module model/TerminateClientVpnConnectionsResult
 * @version 1.1.0
 */
var TerminateClientVpnConnectionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TerminateClientVpnConnectionsResult</code>.
   * @alias module:model/TerminateClientVpnConnectionsResult
   */
  function TerminateClientVpnConnectionsResult() {
    _classCallCheck(this, TerminateClientVpnConnectionsResult);

    TerminateClientVpnConnectionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TerminateClientVpnConnectionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TerminateClientVpnConnectionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TerminateClientVpnConnectionsResult} obj Optional instance to populate.
     * @return {module:model/TerminateClientVpnConnectionsResult} The populated <code>TerminateClientVpnConnectionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TerminateClientVpnConnectionsResult();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('ConnectionStatuses')) {
          obj['ConnectionStatuses'] = _ApiClient["default"].convertToType(data['ConnectionStatuses'], [_TerminateConnectionStatus["default"]]);
        }

        if (data.hasOwnProperty('Username')) {
          obj['Username'] = _ApiClient["default"].convertToType(data['Username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TerminateClientVpnConnectionsResult;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


TerminateClientVpnConnectionsResult.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Array.<module:model/TerminateConnectionStatus>} ConnectionStatuses
 */

TerminateClientVpnConnectionsResult.prototype['ConnectionStatuses'] = undefined;
/**
 * @member {String} Username
 */

TerminateClientVpnConnectionsResult.prototype['Username'] = undefined;
var _default = TerminateClientVpnConnectionsResult;
exports["default"] = _default;