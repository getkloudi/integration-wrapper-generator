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
 * The DetachClassicLinkVpcRequest model module.
 * @module model/DetachClassicLinkVpcRequest
 * @version 1.1.0
 */
var DetachClassicLinkVpcRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DetachClassicLinkVpcRequest</code>.
   * @alias module:model/DetachClassicLinkVpcRequest
   * @param instanceId {String} 
   * @param vpcId {String} 
   */
  function DetachClassicLinkVpcRequest(instanceId, vpcId) {
    _classCallCheck(this, DetachClassicLinkVpcRequest);

    DetachClassicLinkVpcRequest.initialize(this, instanceId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetachClassicLinkVpcRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId, vpcId) {
      obj['InstanceId'] = instanceId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>DetachClassicLinkVpcRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetachClassicLinkVpcRequest} obj Optional instance to populate.
     * @return {module:model/DetachClassicLinkVpcRequest} The populated <code>DetachClassicLinkVpcRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetachClassicLinkVpcRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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

  return DetachClassicLinkVpcRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DetachClassicLinkVpcRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

DetachClassicLinkVpcRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} VpcId
 */

DetachClassicLinkVpcRequest.prototype['VpcId'] = undefined;
var _default = DetachClassicLinkVpcRequest;
exports["default"] = _default;