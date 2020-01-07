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
 * The CreateTrafficMirrorSessionResult model module.
 * @module model/CreateTrafficMirrorSessionResult
 * @version 1.1.0
 */
var CreateTrafficMirrorSessionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorSessionResult</code>.
   * @alias module:model/CreateTrafficMirrorSessionResult
   */
  function CreateTrafficMirrorSessionResult() {
    _classCallCheck(this, CreateTrafficMirrorSessionResult);

    CreateTrafficMirrorSessionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorSessionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTrafficMirrorSessionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorSessionResult} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorSessionResult} The populated <code>CreateTrafficMirrorSessionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorSessionResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorSession')) {
          obj['TrafficMirrorSession'] = _TrafficMirrorSession["default"].constructFromObject(data['TrafficMirrorSession']);
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorSessionResult;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorSessionResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/TrafficMirrorSession} TrafficMirrorSession
 */

CreateTrafficMirrorSessionResult.prototype['TrafficMirrorSession'] = undefined;
var _default = CreateTrafficMirrorSessionResult;
exports["default"] = _default;