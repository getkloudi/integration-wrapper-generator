"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoPlacement = _interopRequireDefault(require("./AutoPlacement"));

var _HostRecovery = _interopRequireDefault(require("./HostRecovery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyHostsRequest model module.
 * @module model/ModifyHostsRequest
 * @version 1.0.0
 */
var ModifyHostsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyHostsRequest</code>.
   * @alias module:model/ModifyHostsRequest
   * @param hostIds {Array.<String>} 
   */
  function ModifyHostsRequest(hostIds) {
    _classCallCheck(this, ModifyHostsRequest);

    ModifyHostsRequest.initialize(this, hostIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyHostsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, hostIds) {
      obj['HostIds'] = hostIds;
    }
    /**
     * Constructs a <code>ModifyHostsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyHostsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyHostsRequest} The populated <code>ModifyHostsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyHostsRequest();

        if (data.hasOwnProperty('AutoPlacement')) {
          obj['AutoPlacement'] = _AutoPlacement["default"].constructFromObject(data['AutoPlacement']);
        }

        if (data.hasOwnProperty('HostIds')) {
          obj['HostIds'] = _ApiClient["default"].convertToType(data['HostIds'], ['String']);
        }

        if (data.hasOwnProperty('HostRecovery')) {
          obj['HostRecovery'] = _HostRecovery["default"].constructFromObject(data['HostRecovery']);
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _ApiClient["default"].convertToType(data['InstanceFamily'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyHostsRequest;
}();
/**
 * @member {module:model/AutoPlacement} AutoPlacement
 */


ModifyHostsRequest.prototype['AutoPlacement'] = undefined;
/**
 * @member {Array.<String>} HostIds
 */

ModifyHostsRequest.prototype['HostIds'] = undefined;
/**
 * @member {module:model/HostRecovery} HostRecovery
 */

ModifyHostsRequest.prototype['HostRecovery'] = undefined;
/**
 * @member {String} InstanceFamily
 */

ModifyHostsRequest.prototype['InstanceFamily'] = undefined;
/**
 * @member {String} InstanceType
 */

ModifyHostsRequest.prototype['InstanceType'] = undefined;
var _default = ModifyHostsRequest;
exports["default"] = _default;