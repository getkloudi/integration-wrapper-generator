"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorFilter = _interopRequireDefault(require("./TrafficMirrorFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorFilterNetworkServicesResult model module.
 * @module model/ModifyTrafficMirrorFilterNetworkServicesResult
 * @version 1.0.0
 */
var ModifyTrafficMirrorFilterNetworkServicesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorFilterNetworkServicesResult</code>.
   * @alias module:model/ModifyTrafficMirrorFilterNetworkServicesResult
   */
  function ModifyTrafficMirrorFilterNetworkServicesResult() {
    _classCallCheck(this, ModifyTrafficMirrorFilterNetworkServicesResult);

    ModifyTrafficMirrorFilterNetworkServicesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorFilterNetworkServicesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyTrafficMirrorFilterNetworkServicesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorFilterNetworkServicesResult} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorFilterNetworkServicesResult} The populated <code>ModifyTrafficMirrorFilterNetworkServicesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorFilterNetworkServicesResult();

        if (data.hasOwnProperty('TrafficMirrorFilter')) {
          obj['TrafficMirrorFilter'] = _TrafficMirrorFilter["default"].constructFromObject(data['TrafficMirrorFilter']);
        }
      }

      return obj;
    }
  }]);

  return ModifyTrafficMirrorFilterNetworkServicesResult;
}();
/**
 * @member {module:model/TrafficMirrorFilter} TrafficMirrorFilter
 */


ModifyTrafficMirrorFilterNetworkServicesResult.prototype['TrafficMirrorFilter'] = undefined;
var _default = ModifyTrafficMirrorFilterNetworkServicesResult;
exports["default"] = _default;