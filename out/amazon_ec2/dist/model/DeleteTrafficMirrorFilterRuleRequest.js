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
 * The DeleteTrafficMirrorFilterRuleRequest model module.
 * @module model/DeleteTrafficMirrorFilterRuleRequest
 * @version 1.1.0
 */
var DeleteTrafficMirrorFilterRuleRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTrafficMirrorFilterRuleRequest</code>.
   * @alias module:model/DeleteTrafficMirrorFilterRuleRequest
   * @param trafficMirrorFilterRuleId {String} 
   */
  function DeleteTrafficMirrorFilterRuleRequest(trafficMirrorFilterRuleId) {
    _classCallCheck(this, DeleteTrafficMirrorFilterRuleRequest);

    DeleteTrafficMirrorFilterRuleRequest.initialize(this, trafficMirrorFilterRuleId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTrafficMirrorFilterRuleRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorFilterRuleId) {
      obj['TrafficMirrorFilterRuleId'] = trafficMirrorFilterRuleId;
    }
    /**
     * Constructs a <code>DeleteTrafficMirrorFilterRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTrafficMirrorFilterRuleRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTrafficMirrorFilterRuleRequest} The populated <code>DeleteTrafficMirrorFilterRuleRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTrafficMirrorFilterRuleRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TrafficMirrorFilterRuleId')) {
          obj['TrafficMirrorFilterRuleId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterRuleId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTrafficMirrorFilterRuleRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTrafficMirrorFilterRuleRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TrafficMirrorFilterRuleId
 */

DeleteTrafficMirrorFilterRuleRequest.prototype['TrafficMirrorFilterRuleId'] = undefined;
var _default = DeleteTrafficMirrorFilterRuleRequest;
exports["default"] = _default;