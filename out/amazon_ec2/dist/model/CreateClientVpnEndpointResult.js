"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnEndpointStatus = _interopRequireDefault(require("./ClientVpnEndpointStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateClientVpnEndpointResult model module.
 * @module model/CreateClientVpnEndpointResult
 * @version 1.0.0
 */
var CreateClientVpnEndpointResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateClientVpnEndpointResult</code>.
   * @alias module:model/CreateClientVpnEndpointResult
   */
  function CreateClientVpnEndpointResult() {
    _classCallCheck(this, CreateClientVpnEndpointResult);

    CreateClientVpnEndpointResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateClientVpnEndpointResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateClientVpnEndpointResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClientVpnEndpointResult} obj Optional instance to populate.
     * @return {module:model/CreateClientVpnEndpointResult} The populated <code>CreateClientVpnEndpointResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateClientVpnEndpointResult();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DnsName')) {
          obj['DnsName'] = _ApiClient["default"].convertToType(data['DnsName'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnEndpointStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return CreateClientVpnEndpointResult;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


CreateClientVpnEndpointResult.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} DnsName
 */

CreateClientVpnEndpointResult.prototype['DnsName'] = undefined;
/**
 * @member {module:model/ClientVpnEndpointStatus} Status
 */

CreateClientVpnEndpointResult.prototype['Status'] = undefined;
var _default = CreateClientVpnEndpointResult;
exports["default"] = _default;