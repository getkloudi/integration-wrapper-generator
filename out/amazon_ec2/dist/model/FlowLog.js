"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogDestinationType = _interopRequireDefault(require("./LogDestinationType"));

var _TrafficType = _interopRequireDefault(require("./TrafficType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FlowLog model module.
 * @module model/FlowLog
 * @version 1.0.0
 */
var FlowLog =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FlowLog</code>.
   * Describes a flow log.
   * @alias module:model/FlowLog
   */
  function FlowLog() {
    _classCallCheck(this, FlowLog);

    FlowLog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FlowLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FlowLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FlowLog} obj Optional instance to populate.
     * @return {module:model/FlowLog} The populated <code>FlowLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FlowLog();

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('DeliverLogsErrorMessage')) {
          obj['DeliverLogsErrorMessage'] = _ApiClient["default"].convertToType(data['DeliverLogsErrorMessage'], 'String');
        }

        if (data.hasOwnProperty('DeliverLogsPermissionArn')) {
          obj['DeliverLogsPermissionArn'] = _ApiClient["default"].convertToType(data['DeliverLogsPermissionArn'], 'String');
        }

        if (data.hasOwnProperty('DeliverLogsStatus')) {
          obj['DeliverLogsStatus'] = _ApiClient["default"].convertToType(data['DeliverLogsStatus'], 'String');
        }

        if (data.hasOwnProperty('FlowLogId')) {
          obj['FlowLogId'] = _ApiClient["default"].convertToType(data['FlowLogId'], 'String');
        }

        if (data.hasOwnProperty('FlowLogStatus')) {
          obj['FlowLogStatus'] = _ApiClient["default"].convertToType(data['FlowLogStatus'], 'String');
        }

        if (data.hasOwnProperty('LogDestination')) {
          obj['LogDestination'] = _ApiClient["default"].convertToType(data['LogDestination'], 'String');
        }

        if (data.hasOwnProperty('LogDestinationType')) {
          obj['LogDestinationType'] = _LogDestinationType["default"].constructFromObject(data['LogDestinationType']);
        }

        if (data.hasOwnProperty('LogFormat')) {
          obj['LogFormat'] = _ApiClient["default"].convertToType(data['LogFormat'], 'String');
        }

        if (data.hasOwnProperty('LogGroupName')) {
          obj['LogGroupName'] = _ApiClient["default"].convertToType(data['LogGroupName'], 'String');
        }

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('TrafficType')) {
          obj['TrafficType'] = _TrafficType["default"].constructFromObject(data['TrafficType']);
        }
      }

      return obj;
    }
  }]);

  return FlowLog;
}();
/**
 * @member {Date} CreationTime
 */


FlowLog.prototype['CreationTime'] = undefined;
/**
 * @member {String} DeliverLogsErrorMessage
 */

FlowLog.prototype['DeliverLogsErrorMessage'] = undefined;
/**
 * @member {String} DeliverLogsPermissionArn
 */

FlowLog.prototype['DeliverLogsPermissionArn'] = undefined;
/**
 * @member {String} DeliverLogsStatus
 */

FlowLog.prototype['DeliverLogsStatus'] = undefined;
/**
 * @member {String} FlowLogId
 */

FlowLog.prototype['FlowLogId'] = undefined;
/**
 * @member {String} FlowLogStatus
 */

FlowLog.prototype['FlowLogStatus'] = undefined;
/**
 * @member {String} LogDestination
 */

FlowLog.prototype['LogDestination'] = undefined;
/**
 * @member {module:model/LogDestinationType} LogDestinationType
 */

FlowLog.prototype['LogDestinationType'] = undefined;
/**
 * @member {String} LogFormat
 */

FlowLog.prototype['LogFormat'] = undefined;
/**
 * @member {String} LogGroupName
 */

FlowLog.prototype['LogGroupName'] = undefined;
/**
 * @member {String} ResourceId
 */

FlowLog.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TrafficType} TrafficType
 */

FlowLog.prototype['TrafficType'] = undefined;
var _default = FlowLog;
exports["default"] = _default;