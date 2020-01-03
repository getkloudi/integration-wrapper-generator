"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorNetworkService = _interopRequireDefault(require("./TrafficMirrorNetworkService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorFilterNetworkServicesRequest model module.
 * @module model/ModifyTrafficMirrorFilterNetworkServicesRequest
 * @version 1.0.0
 */
var ModifyTrafficMirrorFilterNetworkServicesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorFilterNetworkServicesRequest</code>.
   * @alias module:model/ModifyTrafficMirrorFilterNetworkServicesRequest
   * @param trafficMirrorFilterId {String} 
   */
  function ModifyTrafficMirrorFilterNetworkServicesRequest(trafficMirrorFilterId) {
    _classCallCheck(this, ModifyTrafficMirrorFilterNetworkServicesRequest);

    ModifyTrafficMirrorFilterNetworkServicesRequest.initialize(this, trafficMirrorFilterId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorFilterNetworkServicesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, trafficMirrorFilterId) {
      obj['TrafficMirrorFilterId'] = trafficMirrorFilterId;
    }
    /**
     * Constructs a <code>ModifyTrafficMirrorFilterNetworkServicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorFilterNetworkServicesRequest} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorFilterNetworkServicesRequest} The populated <code>ModifyTrafficMirrorFilterNetworkServicesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorFilterNetworkServicesRequest();

        if (data.hasOwnProperty('AddNetworkServices')) {
          obj['AddNetworkServices'] = _ApiClient["default"].convertToType(data['AddNetworkServices'], [_TrafficMirrorNetworkService["default"]]);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RemoveNetworkServices')) {
          obj['RemoveNetworkServices'] = _ApiClient["default"].convertToType(data['RemoveNetworkServices'], [_TrafficMirrorNetworkService["default"]]);
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyTrafficMirrorFilterNetworkServicesRequest;
}();
/**
 * @member {Array.<module:model/TrafficMirrorNetworkService>} AddNetworkServices
 */


ModifyTrafficMirrorFilterNetworkServicesRequest.prototype['AddNetworkServices'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyTrafficMirrorFilterNetworkServicesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorNetworkService>} RemoveNetworkServices
 */

ModifyTrafficMirrorFilterNetworkServicesRequest.prototype['RemoveNetworkServices'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

ModifyTrafficMirrorFilterNetworkServicesRequest.prototype['TrafficMirrorFilterId'] = undefined;
var _default = ModifyTrafficMirrorFilterNetworkServicesRequest;
exports["default"] = _default;