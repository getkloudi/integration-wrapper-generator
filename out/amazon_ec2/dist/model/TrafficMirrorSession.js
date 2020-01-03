"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TrafficMirrorSession model module.
 * @module model/TrafficMirrorSession
 * @version 1.0.0
 */
var TrafficMirrorSession =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TrafficMirrorSession</code>.
   * Describes a Traffic Mirror session.
   * @alias module:model/TrafficMirrorSession
   */
  function TrafficMirrorSession() {
    _classCallCheck(this, TrafficMirrorSession);

    TrafficMirrorSession.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrafficMirrorSession, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrafficMirrorSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficMirrorSession} obj Optional instance to populate.
     * @return {module:model/TrafficMirrorSession} The populated <code>TrafficMirrorSession</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrafficMirrorSession();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PacketLength')) {
          obj['PacketLength'] = _ApiClient["default"].convertToType(data['PacketLength'], 'Number');
        }

        if (data.hasOwnProperty('SessionNumber')) {
          obj['SessionNumber'] = _ApiClient["default"].convertToType(data['SessionNumber'], 'Number');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
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

  return TrafficMirrorSession;
}();
/**
 * @member {String} Description
 */


TrafficMirrorSession.prototype['Description'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

TrafficMirrorSession.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} OwnerId
 */

TrafficMirrorSession.prototype['OwnerId'] = undefined;
/**
 * @member {Number} PacketLength
 */

TrafficMirrorSession.prototype['PacketLength'] = undefined;
/**
 * @member {Number} SessionNumber
 */

TrafficMirrorSession.prototype['SessionNumber'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TrafficMirrorSession.prototype['Tags'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

TrafficMirrorSession.prototype['TrafficMirrorFilterId'] = undefined;
/**
 * @member {String} TrafficMirrorSessionId
 */

TrafficMirrorSession.prototype['TrafficMirrorSessionId'] = undefined;
/**
 * @member {String} TrafficMirrorTargetId
 */

TrafficMirrorSession.prototype['TrafficMirrorTargetId'] = undefined;
/**
 * @member {Number} VirtualNetworkId
 */

TrafficMirrorSession.prototype['VirtualNetworkId'] = undefined;
var _default = TrafficMirrorSession;
exports["default"] = _default;