"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceStateChange = _interopRequireDefault(require("./InstanceStateChange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StopInstancesResult model module.
 * @module model/StopInstancesResult
 * @version 1.0.0
 */
var StopInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StopInstancesResult</code>.
   * @alias module:model/StopInstancesResult
   */
  function StopInstancesResult() {
    _classCallCheck(this, StopInstancesResult);

    StopInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StopInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StopInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StopInstancesResult} obj Optional instance to populate.
     * @return {module:model/StopInstancesResult} The populated <code>StopInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StopInstancesResult();

        if (data.hasOwnProperty('StoppingInstances')) {
          obj['StoppingInstances'] = _ApiClient["default"].convertToType(data['StoppingInstances'], [_InstanceStateChange["default"]]);
        }
      }

      return obj;
    }
  }]);

  return StopInstancesResult;
}();
/**
 * @member {Array.<module:model/InstanceStateChange>} StoppingInstances
 */


StopInstancesResult.prototype['StoppingInstances'] = undefined;
var _default = StopInstancesResult;
exports["default"] = _default;