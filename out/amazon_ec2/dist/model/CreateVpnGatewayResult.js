"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnGateway = _interopRequireDefault(require("./VpnGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpnGatewayResult model module.
 * @module model/CreateVpnGatewayResult
 * @version 1.0.0
 */
var CreateVpnGatewayResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpnGatewayResult</code>.
   * Contains the output of CreateVpnGateway.
   * @alias module:model/CreateVpnGatewayResult
   */
  function CreateVpnGatewayResult() {
    _classCallCheck(this, CreateVpnGatewayResult);

    CreateVpnGatewayResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpnGatewayResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpnGatewayResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpnGatewayResult} obj Optional instance to populate.
     * @return {module:model/CreateVpnGatewayResult} The populated <code>CreateVpnGatewayResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpnGatewayResult();

        if (data.hasOwnProperty('VpnGateway')) {
          obj['VpnGateway'] = _VpnGateway["default"].constructFromObject(data['VpnGateway']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpnGatewayResult;
}();
/**
 * @member {module:model/VpnGateway} VpnGateway
 */


CreateVpnGatewayResult.prototype['VpnGateway'] = undefined;
var _default = CreateVpnGatewayResult;
exports["default"] = _default;