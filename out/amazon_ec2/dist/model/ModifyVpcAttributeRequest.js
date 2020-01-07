"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpcAttributeRequest model module.
 * @module model/ModifyVpcAttributeRequest
 * @version 1.1.0
 */
var ModifyVpcAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcAttributeRequest</code>.
   * @alias module:model/ModifyVpcAttributeRequest
   * @param vpcId {String} 
   */
  function ModifyVpcAttributeRequest(vpcId) {
    _classCallCheck(this, ModifyVpcAttributeRequest);

    ModifyVpcAttributeRequest.initialize(this, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId) {
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>ModifyVpcAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcAttributeRequest} The populated <code>ModifyVpcAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcAttributeRequest();

        if (data.hasOwnProperty('EnableDnsHostnames')) {
          obj['EnableDnsHostnames'] = _AttributeBooleanValue["default"].constructFromObject(data['EnableDnsHostnames']);
        }

        if (data.hasOwnProperty('EnableDnsSupport')) {
          obj['EnableDnsSupport'] = _AttributeBooleanValue["default"].constructFromObject(data['EnableDnsSupport']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcAttributeRequest;
}();
/**
 * @member {module:model/AttributeBooleanValue} EnableDnsHostnames
 */


ModifyVpcAttributeRequest.prototype['EnableDnsHostnames'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EnableDnsSupport
 */

ModifyVpcAttributeRequest.prototype['EnableDnsSupport'] = undefined;
/**
 * @member {String} VpcId
 */

ModifyVpcAttributeRequest.prototype['VpcId'] = undefined;
var _default = ModifyVpcAttributeRequest;
exports["default"] = _default;