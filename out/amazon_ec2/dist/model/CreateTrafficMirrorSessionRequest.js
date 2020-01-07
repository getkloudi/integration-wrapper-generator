"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTrafficMirrorSessionRequest model module.
 * @module model/CreateTrafficMirrorSessionRequest
 * @version 1.1.0
 */
var CreateTrafficMirrorSessionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorSessionRequest</code>.
   * @alias module:model/CreateTrafficMirrorSessionRequest
   * @param networkInterfaceId {String} 
   * @param sessionNumber {Number} 
   * @param trafficMirrorFilterId {String} 
   * @param trafficMirrorTargetId {String} 
   */
  function CreateTrafficMirrorSessionRequest(networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId) {
    _classCallCheck(this, CreateTrafficMirrorSessionRequest);

    CreateTrafficMirrorSessionRequest.initialize(this, networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorSessionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
      obj['SessionNumber'] = sessionNumber;
      obj['TrafficMirrorFilterId'] = trafficMirrorFilterId;
      obj['TrafficMirrorTargetId'] = trafficMirrorTargetId;
    }
    /**
     * Constructs a <code>CreateTrafficMirrorSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorSessionRequest} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorSessionRequest} The populated <code>CreateTrafficMirrorSessionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorSessionRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PacketLength')) {
          obj['PacketLength'] = _ApiClient["default"].convertToType(data['PacketLength'], 'Number');
        }

        if (data.hasOwnProperty('SessionNumber')) {
          obj['SessionNumber'] = _ApiClient["default"].convertToType(data['SessionNumber'], 'Number');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorTargetId')) {
          obj['TrafficMirrorTargetId'] = _ApiClient["default"].convertToType(data['TrafficMirrorTargetId'], 'String');
        }

        if (data.hasOwnProperty('VirtualNetworkId')) {
          obj['VirtualNetworkId'] = _ApiClient["default"].convertToType(data['VirtualNetworkId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorSessionRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorSessionRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CreateTrafficMirrorSessionRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateTrafficMirrorSessionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

CreateTrafficMirrorSessionRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {Number} PacketLength
 */

CreateTrafficMirrorSessionRequest.prototype['PacketLength'] = undefined;
/**
 * @member {Number} SessionNumber
 */

CreateTrafficMirrorSessionRequest.prototype['SessionNumber'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTrafficMirrorSessionRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

CreateTrafficMirrorSessionRequest.prototype['TrafficMirrorFilterId'] = undefined;
/**
 * @member {String} TrafficMirrorTargetId
 */

CreateTrafficMirrorSessionRequest.prototype['TrafficMirrorTargetId'] = undefined;
/**
 * @member {Number} VirtualNetworkId
 */

CreateTrafficMirrorSessionRequest.prototype['VirtualNetworkId'] = undefined;
var _default = CreateTrafficMirrorSessionRequest;
exports["default"] = _default;