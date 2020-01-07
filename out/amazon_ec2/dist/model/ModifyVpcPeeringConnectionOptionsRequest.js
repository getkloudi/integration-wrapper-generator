"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PeeringConnectionOptionsRequest = _interopRequireDefault(require("./PeeringConnectionOptionsRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpcPeeringConnectionOptionsRequest model module.
 * @module model/ModifyVpcPeeringConnectionOptionsRequest
 * @version 1.1.0
 */
var ModifyVpcPeeringConnectionOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcPeeringConnectionOptionsRequest</code>.
   * @alias module:model/ModifyVpcPeeringConnectionOptionsRequest
   * @param vpcPeeringConnectionId {String} 
   */
  function ModifyVpcPeeringConnectionOptionsRequest(vpcPeeringConnectionId) {
    _classCallCheck(this, ModifyVpcPeeringConnectionOptionsRequest);

    ModifyVpcPeeringConnectionOptionsRequest.initialize(this, vpcPeeringConnectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcPeeringConnectionOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcPeeringConnectionId) {
      obj['VpcPeeringConnectionId'] = vpcPeeringConnectionId;
    }
    /**
     * Constructs a <code>ModifyVpcPeeringConnectionOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcPeeringConnectionOptionsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcPeeringConnectionOptionsRequest} The populated <code>ModifyVpcPeeringConnectionOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcPeeringConnectionOptionsRequest();

        if (data.hasOwnProperty('AccepterPeeringConnectionOptions')) {
          obj['AccepterPeeringConnectionOptions'] = _PeeringConnectionOptionsRequest["default"].constructFromObject(data['AccepterPeeringConnectionOptions']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RequesterPeeringConnectionOptions')) {
          obj['RequesterPeeringConnectionOptions'] = _PeeringConnectionOptionsRequest["default"].constructFromObject(data['RequesterPeeringConnectionOptions']);
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcPeeringConnectionOptionsRequest;
}();
/**
 * @member {module:model/PeeringConnectionOptionsRequest} AccepterPeeringConnectionOptions
 */


ModifyVpcPeeringConnectionOptionsRequest.prototype['AccepterPeeringConnectionOptions'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpcPeeringConnectionOptionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/PeeringConnectionOptionsRequest} RequesterPeeringConnectionOptions
 */

ModifyVpcPeeringConnectionOptionsRequest.prototype['RequesterPeeringConnectionOptions'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

ModifyVpcPeeringConnectionOptionsRequest.prototype['VpcPeeringConnectionId'] = undefined;
var _default = ModifyVpcPeeringConnectionOptionsRequest;
exports["default"] = _default;