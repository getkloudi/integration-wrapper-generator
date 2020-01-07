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
 * The DeleteTrafficMirrorFilterRequest model module.
 * @module model/DeleteTrafficMirrorFilterRequest
 * @version 1.1.0
 */
var DeleteTrafficMirrorFilterRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTrafficMirrorFilterRequest</code>.
   * @alias module:model/DeleteTrafficMirrorFilterRequest
   * @param trafficMirrorFilterId {String} 
   */
  function DeleteTrafficMirrorFilterRequest(trafficMirrorFilterId) {
    _classCallCheck(this, DeleteTrafficMirrorFilterRequest);

    DeleteTrafficMirrorFilterRequest.initialize(this, trafficMirrorFilterId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTrafficMirrorFilterRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorFilterId) {
      obj['TrafficMirrorFilterId'] = trafficMirrorFilterId;
    }
    /**
     * Constructs a <code>DeleteTrafficMirrorFilterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTrafficMirrorFilterRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTrafficMirrorFilterRequest} The populated <code>DeleteTrafficMirrorFilterRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTrafficMirrorFilterRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTrafficMirrorFilterRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTrafficMirrorFilterRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

DeleteTrafficMirrorFilterRequest.prototype['TrafficMirrorFilterId'] = undefined;
var _default = DeleteTrafficMirrorFilterRequest;
exports["default"] = _default;