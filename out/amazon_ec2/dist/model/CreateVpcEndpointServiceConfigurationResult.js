"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceConfiguration = _interopRequireDefault(require("./ServiceConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpcEndpointServiceConfigurationResult model module.
 * @module model/CreateVpcEndpointServiceConfigurationResult
 * @version 1.0.0
 */
var CreateVpcEndpointServiceConfigurationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcEndpointServiceConfigurationResult</code>.
   * @alias module:model/CreateVpcEndpointServiceConfigurationResult
   */
  function CreateVpcEndpointServiceConfigurationResult() {
    _classCallCheck(this, CreateVpcEndpointServiceConfigurationResult);

    CreateVpcEndpointServiceConfigurationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcEndpointServiceConfigurationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpcEndpointServiceConfigurationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcEndpointServiceConfigurationResult} obj Optional instance to populate.
     * @return {module:model/CreateVpcEndpointServiceConfigurationResult} The populated <code>CreateVpcEndpointServiceConfigurationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcEndpointServiceConfigurationResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ServiceConfiguration')) {
          obj['ServiceConfiguration'] = _ServiceConfiguration["default"].constructFromObject(data['ServiceConfiguration']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpcEndpointServiceConfigurationResult;
}();
/**
 * @member {String} ClientToken
 */


CreateVpcEndpointServiceConfigurationResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/ServiceConfiguration} ServiceConfiguration
 */

CreateVpcEndpointServiceConfigurationResult.prototype['ServiceConfiguration'] = undefined;
var _default = CreateVpcEndpointServiceConfigurationResult;
exports["default"] = _default;