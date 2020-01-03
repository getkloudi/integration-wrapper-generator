"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnConnection = _interopRequireDefault(require("./VpnConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpnConnectionResult model module.
 * @module model/CreateVpnConnectionResult
 * @version 1.0.0
 */
var CreateVpnConnectionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpnConnectionResult</code>.
   * Contains the output of CreateVpnConnection.
   * @alias module:model/CreateVpnConnectionResult
   */
  function CreateVpnConnectionResult() {
    _classCallCheck(this, CreateVpnConnectionResult);

    CreateVpnConnectionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpnConnectionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpnConnectionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpnConnectionResult} obj Optional instance to populate.
     * @return {module:model/CreateVpnConnectionResult} The populated <code>CreateVpnConnectionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpnConnectionResult();

        if (data.hasOwnProperty('VpnConnection')) {
          obj['VpnConnection'] = _VpnConnection["default"].constructFromObject(data['VpnConnection']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpnConnectionResult;
}();
/**
 * @member {module:model/VpnConnection} VpnConnection
 */


CreateVpnConnectionResult.prototype['VpnConnection'] = undefined;
var _default = CreateVpnConnectionResult;
exports["default"] = _default;