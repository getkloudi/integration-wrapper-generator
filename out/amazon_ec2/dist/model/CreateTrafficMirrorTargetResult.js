"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorTarget = _interopRequireDefault(require("./TrafficMirrorTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTrafficMirrorTargetResult model module.
 * @module model/CreateTrafficMirrorTargetResult
 * @version 1.0.0
 */
var CreateTrafficMirrorTargetResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorTargetResult</code>.
   * @alias module:model/CreateTrafficMirrorTargetResult
   */
  function CreateTrafficMirrorTargetResult() {
    _classCallCheck(this, CreateTrafficMirrorTargetResult);

    CreateTrafficMirrorTargetResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorTargetResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTrafficMirrorTargetResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorTargetResult} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorTargetResult} The populated <code>CreateTrafficMirrorTargetResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorTargetResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorTarget')) {
          obj['TrafficMirrorTarget'] = _TrafficMirrorTarget["default"].constructFromObject(data['TrafficMirrorTarget']);
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorTargetResult;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorTargetResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/TrafficMirrorTarget} TrafficMirrorTarget
 */

CreateTrafficMirrorTargetResult.prototype['TrafficMirrorTarget'] = undefined;
var _default = CreateTrafficMirrorTargetResult;
exports["default"] = _default;