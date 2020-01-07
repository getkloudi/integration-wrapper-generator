"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FlowLogsResourceType = _interopRequireDefault(require("./FlowLogsResourceType"));

var _LogDestinationType = _interopRequireDefault(require("./LogDestinationType"));

var _TrafficType = _interopRequireDefault(require("./TrafficType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFlowLogsRequest model module.
 * @module model/CreateFlowLogsRequest
 * @version 1.1.0
 */
var CreateFlowLogsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFlowLogsRequest</code>.
   * @alias module:model/CreateFlowLogsRequest
   * @param resourceIds {Array.<String>} 
   * @param resourceType {module:model/FlowLogsResourceType} 
   * @param trafficType {module:model/TrafficType} 
   */
  function CreateFlowLogsRequest(resourceIds, resourceType, trafficType) {
    _classCallCheck(this, CreateFlowLogsRequest);

    CreateFlowLogsRequest.initialize(this, resourceIds, resourceType, trafficType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFlowLogsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, resourceIds, resourceType, trafficType) {
      obj['ResourceIds'] = resourceIds;
      obj['ResourceType'] = resourceType;
      obj['TrafficType'] = trafficType;
    }
    /**
     * Constructs a <code>CreateFlowLogsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFlowLogsRequest} obj Optional instance to populate.
     * @return {module:model/CreateFlowLogsRequest} The populated <code>CreateFlowLogsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFlowLogsRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DeliverLogsPermissionArn')) {
          obj['DeliverLogsPermissionArn'] = _ApiClient["default"].convertToType(data['DeliverLogsPermissionArn'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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

        if (data.hasOwnProperty('ResourceIds')) {
          obj['ResourceIds'] = _ApiClient["default"].convertToType(data['ResourceIds'], ['String']);
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _FlowLogsResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('TrafficType')) {
          obj['TrafficType'] = _TrafficType["default"].constructFromObject(data['TrafficType']);
        }
      }

      return obj;
    }
  }]);

  return CreateFlowLogsRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateFlowLogsRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} DeliverLogsPermissionArn
 */

CreateFlowLogsRequest.prototype['DeliverLogsPermissionArn'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateFlowLogsRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LogDestination
 */

CreateFlowLogsRequest.prototype['LogDestination'] = undefined;
/**
 * @member {module:model/LogDestinationType} LogDestinationType
 */

CreateFlowLogsRequest.prototype['LogDestinationType'] = undefined;
/**
 * @member {String} LogFormat
 */

CreateFlowLogsRequest.prototype['LogFormat'] = undefined;
/**
 * @member {String} LogGroupName
 */

CreateFlowLogsRequest.prototype['LogGroupName'] = undefined;
/**
 * @member {Array.<String>} ResourceIds
 */

CreateFlowLogsRequest.prototype['ResourceIds'] = undefined;
/**
 * @member {module:model/FlowLogsResourceType} ResourceType
 */

CreateFlowLogsRequest.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/TrafficType} TrafficType
 */

CreateFlowLogsRequest.prototype['TrafficType'] = undefined;
var _default = CreateFlowLogsRequest;
exports["default"] = _default;