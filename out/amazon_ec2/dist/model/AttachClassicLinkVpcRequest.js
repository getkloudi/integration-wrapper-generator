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
 * The AttachClassicLinkVpcRequest model module.
 * @module model/AttachClassicLinkVpcRequest
 * @version 1.0.0
 */
var AttachClassicLinkVpcRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachClassicLinkVpcRequest</code>.
   * @alias module:model/AttachClassicLinkVpcRequest
   * @param groups {Array.<String>} 
   * @param instanceId {String} 
   * @param vpcId {String} 
   */
  function AttachClassicLinkVpcRequest(groups, instanceId, vpcId) {
    _classCallCheck(this, AttachClassicLinkVpcRequest);

    AttachClassicLinkVpcRequest.initialize(this, groups, instanceId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachClassicLinkVpcRequest, null, [{
    key: "initialize",
    value: function initialize(obj, groups, instanceId, vpcId) {
      obj['Groups'] = groups;
      obj['InstanceId'] = instanceId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>AttachClassicLinkVpcRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachClassicLinkVpcRequest} obj Optional instance to populate.
     * @return {module:model/AttachClassicLinkVpcRequest} The populated <code>AttachClassicLinkVpcRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachClassicLinkVpcRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AttachClassicLinkVpcRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AttachClassicLinkVpcRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

AttachClassicLinkVpcRequest.prototype['Groups'] = undefined;
/**
 * @member {String} InstanceId
 */

AttachClassicLinkVpcRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} VpcId
 */

AttachClassicLinkVpcRequest.prototype['VpcId'] = undefined;
var _default = AttachClassicLinkVpcRequest;
exports["default"] = _default;