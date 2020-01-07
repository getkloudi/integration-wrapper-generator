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
 * The DeleteTrafficMirrorSessionRequest model module.
 * @module model/DeleteTrafficMirrorSessionRequest
 * @version 1.1.0
 */
var DeleteTrafficMirrorSessionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTrafficMirrorSessionRequest</code>.
   * @alias module:model/DeleteTrafficMirrorSessionRequest
   * @param trafficMirrorSessionId {String} 
   */
  function DeleteTrafficMirrorSessionRequest(trafficMirrorSessionId) {
    _classCallCheck(this, DeleteTrafficMirrorSessionRequest);

    DeleteTrafficMirrorSessionRequest.initialize(this, trafficMirrorSessionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTrafficMirrorSessionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorSessionId) {
      obj['TrafficMirrorSessionId'] = trafficMirrorSessionId;
    }
    /**
     * Constructs a <code>DeleteTrafficMirrorSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTrafficMirrorSessionRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTrafficMirrorSessionRequest} The populated <code>DeleteTrafficMirrorSessionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTrafficMirrorSessionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TrafficMirrorSessionId')) {
          obj['TrafficMirrorSessionId'] = _ApiClient["default"].convertToType(data['TrafficMirrorSessionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTrafficMirrorSessionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTrafficMirrorSessionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TrafficMirrorSessionId
 */

DeleteTrafficMirrorSessionRequest.prototype['TrafficMirrorSessionId'] = undefined;
var _default = DeleteTrafficMirrorSessionRequest;
exports["default"] = _default;