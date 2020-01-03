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
 * The DeleteTrafficMirrorTargetRequest model module.
 * @module model/DeleteTrafficMirrorTargetRequest
 * @version 1.0.0
 */
var DeleteTrafficMirrorTargetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTrafficMirrorTargetRequest</code>.
   * @alias module:model/DeleteTrafficMirrorTargetRequest
   * @param trafficMirrorTargetId {String} 
   */
  function DeleteTrafficMirrorTargetRequest(trafficMirrorTargetId) {
    _classCallCheck(this, DeleteTrafficMirrorTargetRequest);

    DeleteTrafficMirrorTargetRequest.initialize(this, trafficMirrorTargetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTrafficMirrorTargetRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorTargetId) {
      obj['TrafficMirrorTargetId'] = trafficMirrorTargetId;
    }
    /**
     * Constructs a <code>DeleteTrafficMirrorTargetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTrafficMirrorTargetRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTrafficMirrorTargetRequest} The populated <code>DeleteTrafficMirrorTargetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTrafficMirrorTargetRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TrafficMirrorTargetId')) {
          obj['TrafficMirrorTargetId'] = _ApiClient["default"].convertToType(data['TrafficMirrorTargetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTrafficMirrorTargetRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTrafficMirrorTargetRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TrafficMirrorTargetId
 */

DeleteTrafficMirrorTargetRequest.prototype['TrafficMirrorTargetId'] = undefined;
var _default = DeleteTrafficMirrorTargetRequest;
exports["default"] = _default;