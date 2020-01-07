"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Affinity = _interopRequireDefault(require("./Affinity"));

var _HostTenancy = _interopRequireDefault(require("./HostTenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstancePlacementRequest model module.
 * @module model/ModifyInstancePlacementRequest
 * @version 1.1.0
 */
var ModifyInstancePlacementRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstancePlacementRequest</code>.
   * @alias module:model/ModifyInstancePlacementRequest
   * @param instanceId {String} 
   */
  function ModifyInstancePlacementRequest(instanceId) {
    _classCallCheck(this, ModifyInstancePlacementRequest);

    ModifyInstancePlacementRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstancePlacementRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>ModifyInstancePlacementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstancePlacementRequest} obj Optional instance to populate.
     * @return {module:model/ModifyInstancePlacementRequest} The populated <code>ModifyInstancePlacementRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstancePlacementRequest();

        if (data.hasOwnProperty('Affinity')) {
          obj['Affinity'] = _Affinity["default"].constructFromObject(data['Affinity']);
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('HostId')) {
          obj['HostId'] = _ApiClient["default"].convertToType(data['HostId'], 'String');
        }

        if (data.hasOwnProperty('HostResourceGroupArn')) {
          obj['HostResourceGroupArn'] = _ApiClient["default"].convertToType(data['HostResourceGroupArn'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('PartitionNumber')) {
          obj['PartitionNumber'] = _ApiClient["default"].convertToType(data['PartitionNumber'], 'Number');
        }

        if (data.hasOwnProperty('Tenancy')) {
          obj['Tenancy'] = _HostTenancy["default"].constructFromObject(data['Tenancy']);
        }
      }

      return obj;
    }
  }]);

  return ModifyInstancePlacementRequest;
}();
/**
 * @member {module:model/Affinity} Affinity
 */


ModifyInstancePlacementRequest.prototype['Affinity'] = undefined;
/**
 * @member {String} GroupName
 */

ModifyInstancePlacementRequest.prototype['GroupName'] = undefined;
/**
 * @member {String} HostId
 */

ModifyInstancePlacementRequest.prototype['HostId'] = undefined;
/**
 * @member {String} HostResourceGroupArn
 */

ModifyInstancePlacementRequest.prototype['HostResourceGroupArn'] = undefined;
/**
 * @member {String} InstanceId
 */

ModifyInstancePlacementRequest.prototype['InstanceId'] = undefined;
/**
 * @member {Number} PartitionNumber
 */

ModifyInstancePlacementRequest.prototype['PartitionNumber'] = undefined;
/**
 * @member {module:model/HostTenancy} Tenancy
 */

ModifyInstancePlacementRequest.prototype['Tenancy'] = undefined;
var _default = ModifyInstancePlacementRequest;
exports["default"] = _default;