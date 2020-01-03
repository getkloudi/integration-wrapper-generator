"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcTenancy = _interopRequireDefault(require("./VpcTenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpcTenancyRequest model module.
 * @module model/ModifyVpcTenancyRequest
 * @version 1.0.0
 */
var ModifyVpcTenancyRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcTenancyRequest</code>.
   * @alias module:model/ModifyVpcTenancyRequest
   * @param instanceTenancy {module:model/VpcTenancy} 
   * @param vpcId {String} 
   */
  function ModifyVpcTenancyRequest(instanceTenancy, vpcId) {
    _classCallCheck(this, ModifyVpcTenancyRequest);

    ModifyVpcTenancyRequest.initialize(this, instanceTenancy, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcTenancyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceTenancy, vpcId) {
      obj['InstanceTenancy'] = instanceTenancy;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>ModifyVpcTenancyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcTenancyRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcTenancyRequest} The populated <code>ModifyVpcTenancyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcTenancyRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _VpcTenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcTenancyRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyVpcTenancyRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/VpcTenancy} InstanceTenancy
 */

ModifyVpcTenancyRequest.prototype['InstanceTenancy'] = undefined;
/**
 * @member {String} VpcId
 */

ModifyVpcTenancyRequest.prototype['VpcId'] = undefined;
var _default = ModifyVpcTenancyRequest;
exports["default"] = _default;