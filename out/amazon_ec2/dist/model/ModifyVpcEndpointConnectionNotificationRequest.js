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
 * The ModifyVpcEndpointConnectionNotificationRequest model module.
 * @module model/ModifyVpcEndpointConnectionNotificationRequest
 * @version 1.1.0
 */
var ModifyVpcEndpointConnectionNotificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcEndpointConnectionNotificationRequest</code>.
   * @alias module:model/ModifyVpcEndpointConnectionNotificationRequest
   * @param connectionNotificationId {String} 
   */
  function ModifyVpcEndpointConnectionNotificationRequest(connectionNotificationId) {
    _classCallCheck(this, ModifyVpcEndpointConnectionNotificationRequest);

    ModifyVpcEndpointConnectionNotificationRequest.initialize(this, connectionNotificationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcEndpointConnectionNotificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, connectionNotificationId) {
      obj['ConnectionNotificationId'] = connectionNotificationId;
    }
    /**
     * Constructs a <code>ModifyVpcEndpointConnectionNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcEndpointConnectionNotificationRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcEndpointConnectionNotificationRequest} The populated <code>ModifyVpcEndpointConnectionNotificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcEndpointConnectionNotificationRequest();

        if (data.hasOwnProperty('ConnectionEvents')) {
          obj['ConnectionEvents'] = _ApiClient["default"].convertToType(data['ConnectionEvents'], ['String']);
        }

        if (data.hasOwnProperty('ConnectionNotificationArn')) {
          obj['ConnectionNotificationArn'] = _ApiClient["default"].convertToType(data['ConnectionNotificationArn'], 'String');
        }

        if (data.hasOwnProperty('ConnectionNotificationId')) {
          obj['ConnectionNotificationId'] = _ApiClient["default"].convertToType(data['ConnectionNotificationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcEndpointConnectionNotificationRequest;
}();
/**
 * @member {Array.<String>} ConnectionEvents
 */


ModifyVpcEndpointConnectionNotificationRequest.prototype['ConnectionEvents'] = undefined;
/**
 * @member {String} ConnectionNotificationArn
 */

ModifyVpcEndpointConnectionNotificationRequest.prototype['ConnectionNotificationArn'] = undefined;
/**
 * @member {String} ConnectionNotificationId
 */

ModifyVpcEndpointConnectionNotificationRequest.prototype['ConnectionNotificationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpcEndpointConnectionNotificationRequest.prototype['DryRun'] = undefined;
var _default = ModifyVpcEndpointConnectionNotificationRequest;
exports["default"] = _default;