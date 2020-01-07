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
 * The DeleteVpcEndpointConnectionNotificationsRequest model module.
 * @module model/DeleteVpcEndpointConnectionNotificationsRequest
 * @version 1.1.0
 */
var DeleteVpcEndpointConnectionNotificationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteVpcEndpointConnectionNotificationsRequest</code>.
   * @alias module:model/DeleteVpcEndpointConnectionNotificationsRequest
   * @param connectionNotificationIds {Array.<String>} 
   */
  function DeleteVpcEndpointConnectionNotificationsRequest(connectionNotificationIds) {
    _classCallCheck(this, DeleteVpcEndpointConnectionNotificationsRequest);

    DeleteVpcEndpointConnectionNotificationsRequest.initialize(this, connectionNotificationIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteVpcEndpointConnectionNotificationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, connectionNotificationIds) {
      obj['ConnectionNotificationIds'] = connectionNotificationIds;
    }
    /**
     * Constructs a <code>DeleteVpcEndpointConnectionNotificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteVpcEndpointConnectionNotificationsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteVpcEndpointConnectionNotificationsRequest} The populated <code>DeleteVpcEndpointConnectionNotificationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteVpcEndpointConnectionNotificationsRequest();

        if (data.hasOwnProperty('ConnectionNotificationIds')) {
          obj['ConnectionNotificationIds'] = _ApiClient["default"].convertToType(data['ConnectionNotificationIds'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DeleteVpcEndpointConnectionNotificationsRequest;
}();
/**
 * @member {Array.<String>} ConnectionNotificationIds
 */


DeleteVpcEndpointConnectionNotificationsRequest.prototype['ConnectionNotificationIds'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteVpcEndpointConnectionNotificationsRequest.prototype['DryRun'] = undefined;
var _default = DeleteVpcEndpointConnectionNotificationsRequest;
exports["default"] = _default;