"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorSessionField = _interopRequireDefault(require("./TrafficMirrorSessionField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorSessionRequest model module.
 * @module model/ModifyTrafficMirrorSessionRequest
 * @version 1.1.0
 */
var ModifyTrafficMirrorSessionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorSessionRequest</code>.
   * @alias module:model/ModifyTrafficMirrorSessionRequest
   * @param trafficMirrorSessionId {String} 
   */
  function ModifyTrafficMirrorSessionRequest(trafficMirrorSessionId) {
    _classCallCheck(this, ModifyTrafficMirrorSessionRequest);

    ModifyTrafficMirrorSessionRequest.initialize(this, trafficMirrorSessionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorSessionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorSessionId) {
      obj['TrafficMirrorSessionId'] = trafficMirrorSessionId;
    }
    /**
     * Constructs a <code>ModifyTrafficMirrorSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorSessionRequest} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorSessionRequest} The populated <code>ModifyTrafficMirrorSessionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorSessionRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PacketLength')) {
          obj['PacketLength'] = _ApiClient["default"].convertToType(data['PacketLength'], 'Number');
        }

        if (data.hasOwnProperty('RemoveFields')) {
          obj['RemoveFields'] = _ApiClient["default"].convertToType(data['RemoveFields'], [_TrafficMirrorSessionField["default"]]);
        }

        if (data.hasOwnProperty('SessionNumber')) {
          obj['SessionNumber'] = _ApiClient["default"].convertToType(data['SessionNumber'], 'Number');
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorSessionId')) {
          obj['TrafficMirrorSessionId'] = _ApiClient["default"].convertToType(data['TrafficMirrorSessionId'], 'String');
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

  return ModifyTrafficMirrorSessionRequest;
}();
/**
 * @member {String} Description
 */


ModifyTrafficMirrorSessionRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyTrafficMirrorSessionRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} PacketLength
 */

ModifyTrafficMirrorSessionRequest.prototype['PacketLength'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorSessionField>} RemoveFields
 */

ModifyTrafficMirrorSessionRequest.prototype['RemoveFields'] = undefined;
/**
 * @member {Number} SessionNumber
 */

ModifyTrafficMirrorSessionRequest.prototype['SessionNumber'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

ModifyTrafficMirrorSessionRequest.prototype['TrafficMirrorFilterId'] = undefined;
/**
 * @member {String} TrafficMirrorSessionId
 */

ModifyTrafficMirrorSessionRequest.prototype['TrafficMirrorSessionId'] = undefined;
/**
 * @member {String} TrafficMirrorTargetId
 */

ModifyTrafficMirrorSessionRequest.prototype['TrafficMirrorTargetId'] = undefined;
/**
 * @member {Number} VirtualNetworkId
 */

ModifyTrafficMirrorSessionRequest.prototype['VirtualNetworkId'] = undefined;
var _default = ModifyTrafficMirrorSessionRequest;
exports["default"] = _default;