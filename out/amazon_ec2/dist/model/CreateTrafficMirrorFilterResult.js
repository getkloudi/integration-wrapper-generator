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
 * The CreateTrafficMirrorFilterResult model module.
 * @module model/CreateTrafficMirrorFilterResult
 * @version 1.0.0
 */
var CreateTrafficMirrorFilterResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorFilterResult</code>.
   * @alias module:model/CreateTrafficMirrorFilterResult
   */
  function CreateTrafficMirrorFilterResult() {
    _classCallCheck(this, CreateTrafficMirrorFilterResult);

    CreateTrafficMirrorFilterResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorFilterResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTrafficMirrorFilterResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorFilterResult} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorFilterResult} The populated <code>CreateTrafficMirrorFilterResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorFilterResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('TrafficMirrorFilter')) {
          obj['TrafficMirrorFilter'] = _TrafficMirrorFilter["default"].constructFromObject(data['TrafficMirrorFilter']);
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorFilterResult;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorFilterResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/TrafficMirrorFilter} TrafficMirrorFilter
 */

CreateTrafficMirrorFilterResult.prototype['TrafficMirrorFilter'] = undefined;
var _default = CreateTrafficMirrorFilterResult;
exports["default"] = _default;