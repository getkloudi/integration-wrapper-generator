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
 * The ModifyVpcEndpointServiceConfigurationResult model module.
 * @module model/ModifyVpcEndpointServiceConfigurationResult
 * @version 1.1.0
 */
var ModifyVpcEndpointServiceConfigurationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcEndpointServiceConfigurationResult</code>.
   * @alias module:model/ModifyVpcEndpointServiceConfigurationResult
   */
  function ModifyVpcEndpointServiceConfigurationResult() {
    _classCallCheck(this, ModifyVpcEndpointServiceConfigurationResult);

    ModifyVpcEndpointServiceConfigurationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcEndpointServiceConfigurationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyVpcEndpointServiceConfigurationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcEndpointServiceConfigurationResult} obj Optional instance to populate.
     * @return {module:model/ModifyVpcEndpointServiceConfigurationResult} The populated <code>ModifyVpcEndpointServiceConfigurationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcEndpointServiceConfigurationResult();

        if (data.hasOwnProperty('Return')) {
          obj['Return'] = _ApiClient["default"].convertToType(data['Return'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcEndpointServiceConfigurationResult;
}();
/**
 * @member {Boolean} Return
 */


ModifyVpcEndpointServiceConfigurationResult.prototype['Return'] = undefined;
var _default = ModifyVpcEndpointServiceConfigurationResult;
exports["default"] = _default;