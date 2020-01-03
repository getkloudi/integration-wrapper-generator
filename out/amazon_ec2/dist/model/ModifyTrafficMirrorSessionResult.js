"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorSession = _interopRequireDefault(require("./TrafficMirrorSession"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorSessionResult model module.
 * @module model/ModifyTrafficMirrorSessionResult
 * @version 1.0.0
 */
var ModifyTrafficMirrorSessionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorSessionResult</code>.
   * @alias module:model/ModifyTrafficMirrorSessionResult
   */
  function ModifyTrafficMirrorSessionResult() {
    _classCallCheck(this, ModifyTrafficMirrorSessionResult);

    ModifyTrafficMirrorSessionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorSessionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyTrafficMirrorSessionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorSessionResult} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorSessionResult} The populated <code>ModifyTrafficMirrorSessionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorSessionResult();

        if (data.hasOwnProperty('TrafficMirrorSession')) {
          obj['TrafficMirrorSession'] = _TrafficMirrorSession["default"].constructFromObject(data['TrafficMirrorSession']);
        }
      }

      return obj;
    }
  }]);

  return ModifyTrafficMirrorSessionResult;
}();
/**
 * @member {module:model/TrafficMirrorSession} TrafficMirrorSession
 */


ModifyTrafficMirrorSessionResult.prototype['TrafficMirrorSession'] = undefined;
var _default = ModifyTrafficMirrorSessionResult;
exports["default"] = _default;