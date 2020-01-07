"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewDhcpConfiguration = _interopRequireDefault(require("./NewDhcpConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateDhcpOptionsRequest model module.
 * @module model/CreateDhcpOptionsRequest
 * @version 1.1.0
 */
var CreateDhcpOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateDhcpOptionsRequest</code>.
   * @alias module:model/CreateDhcpOptionsRequest
   * @param dhcpConfigurations {Array.<module:model/NewDhcpConfiguration>} 
   */
  function CreateDhcpOptionsRequest(dhcpConfigurations) {
    _classCallCheck(this, CreateDhcpOptionsRequest);

    CreateDhcpOptionsRequest.initialize(this, dhcpConfigurations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateDhcpOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, dhcpConfigurations) {
      obj['DhcpConfigurations'] = dhcpConfigurations;
    }
    /**
     * Constructs a <code>CreateDhcpOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDhcpOptionsRequest} obj Optional instance to populate.
     * @return {module:model/CreateDhcpOptionsRequest} The populated <code>CreateDhcpOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateDhcpOptionsRequest();

        if (data.hasOwnProperty('DhcpConfigurations')) {
          obj['DhcpConfigurations'] = _ApiClient["default"].convertToType(data['DhcpConfigurations'], [_NewDhcpConfiguration["default"]]);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateDhcpOptionsRequest;
}();
/**
 * @member {Array.<module:model/NewDhcpConfiguration>} DhcpConfigurations
 */


CreateDhcpOptionsRequest.prototype['DhcpConfigurations'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateDhcpOptionsRequest.prototype['DryRun'] = undefined;
var _default = CreateDhcpOptionsRequest;
exports["default"] = _default;