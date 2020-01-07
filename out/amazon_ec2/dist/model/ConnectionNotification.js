"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConnectionNotificationState = _interopRequireDefault(require("./ConnectionNotificationState"));

var _ConnectionNotificationType = _interopRequireDefault(require("./ConnectionNotificationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConnectionNotification model module.
 * @module model/ConnectionNotification
 * @version 1.1.0
 */
var ConnectionNotification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ConnectionNotification</code>.
   * Describes a connection notification for a VPC endpoint or VPC endpoint service.
   * @alias module:model/ConnectionNotification
   */
  function ConnectionNotification() {
    _classCallCheck(this, ConnectionNotification);

    ConnectionNotification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConnectionNotification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConnectionNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectionNotification} obj Optional instance to populate.
     * @return {module:model/ConnectionNotification} The populated <code>ConnectionNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConnectionNotification();

        if (data.hasOwnProperty('ConnectionEvents')) {
          obj['ConnectionEvents'] = _ApiClient["default"].convertToType(data['ConnectionEvents'], ['String']);
        }

        if (data.hasOwnProperty('ConnectionNotificationArn')) {
          obj['ConnectionNotificationArn'] = _ApiClient["default"].convertToType(data['ConnectionNotificationArn'], 'String');
        }

        if (data.hasOwnProperty('ConnectionNotificationId')) {
          obj['ConnectionNotificationId'] = _ApiClient["default"].convertToType(data['ConnectionNotificationId'], 'String');
        }

        if (data.hasOwnProperty('ConnectionNotificationState')) {
          obj['ConnectionNotificationState'] = _ConnectionNotificationState["default"].constructFromObject(data['ConnectionNotificationState']);
        }

        if (data.hasOwnProperty('ConnectionNotificationType')) {
          obj['ConnectionNotificationType'] = _ConnectionNotificationType["default"].constructFromObject(data['ConnectionNotificationType']);
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }

        if (data.hasOwnProperty('VpcEndpointId')) {
          obj['VpcEndpointId'] = _ApiClient["default"].convertToType(data['VpcEndpointId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConnectionNotification;
}();
/**
 * @member {Array.<String>} ConnectionEvents
 */


ConnectionNotification.prototype['ConnectionEvents'] = undefined;
/**
 * @member {String} ConnectionNotificationArn
 */

ConnectionNotification.prototype['ConnectionNotificationArn'] = undefined;
/**
 * @member {String} ConnectionNotificationId
 */

ConnectionNotification.prototype['ConnectionNotificationId'] = undefined;
/**
 * @member {module:model/ConnectionNotificationState} ConnectionNotificationState
 */

ConnectionNotification.prototype['ConnectionNotificationState'] = undefined;
/**
 * @member {module:model/ConnectionNotificationType} ConnectionNotificationType
 */

ConnectionNotification.prototype['ConnectionNotificationType'] = undefined;
/**
 * @member {String} ServiceId
 */

ConnectionNotification.prototype['ServiceId'] = undefined;
/**
 * @member {String} VpcEndpointId
 */

ConnectionNotification.prototype['VpcEndpointId'] = undefined;
var _default = ConnectionNotification;
exports["default"] = _default;