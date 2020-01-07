"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceState = _interopRequireDefault(require("./InstanceState"));

var _InstanceStatusEvent = _interopRequireDefault(require("./InstanceStatusEvent"));

var _InstanceStatusSummary = _interopRequireDefault(require("./InstanceStatusSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStatus model module.
 * @module model/InstanceStatus
 * @version 1.1.0
 */
var InstanceStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStatus</code>.
   * Describes the status of an instance.
   * @alias module:model/InstanceStatus
   */
  function InstanceStatus() {
    _classCallCheck(this, InstanceStatus);

    InstanceStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatus} obj Optional instance to populate.
     * @return {module:model/InstanceStatus} The populated <code>InstanceStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStatus();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Events')) {
          obj['Events'] = _ApiClient["default"].convertToType(data['Events'], [_InstanceStatusEvent["default"]]);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceState')) {
          obj['InstanceState'] = _InstanceState["default"].constructFromObject(data['InstanceState']);
        }

        if (data.hasOwnProperty('InstanceStatus')) {
          obj['InstanceStatus'] = _InstanceStatusSummary["default"].constructFromObject(data['InstanceStatus']);
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('SystemStatus')) {
          obj['SystemStatus'] = _InstanceStatusSummary["default"].constructFromObject(data['SystemStatus']);
        }
      }

      return obj;
    }
  }]);

  return InstanceStatus;
}();
/**
 * @member {String} AvailabilityZone
 */


InstanceStatus.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Array.<module:model/InstanceStatusEvent>} Events
 */

InstanceStatus.prototype['Events'] = undefined;
/**
 * @member {String} InstanceId
 */

InstanceStatus.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/InstanceState} InstanceState
 */

InstanceStatus.prototype['InstanceState'] = undefined;
/**
 * @member {module:model/InstanceStatusSummary} InstanceStatus
 */

InstanceStatus.prototype['InstanceStatus'] = undefined;
/**
 * @member {String} OutpostArn
 */

InstanceStatus.prototype['OutpostArn'] = undefined;
/**
 * @member {module:model/InstanceStatusSummary} SystemStatus
 */

InstanceStatus.prototype['SystemStatus'] = undefined;
var _default = InstanceStatus;
exports["default"] = _default;