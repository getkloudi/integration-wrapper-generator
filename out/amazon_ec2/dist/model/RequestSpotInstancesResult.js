"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpotInstanceRequest = _interopRequireDefault(require("./SpotInstanceRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestSpotInstancesResult model module.
 * @module model/RequestSpotInstancesResult
 * @version 1.1.0
 */
var RequestSpotInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RequestSpotInstancesResult</code>.
   * Contains the output of RequestSpotInstances.
   * @alias module:model/RequestSpotInstancesResult
   */
  function RequestSpotInstancesResult() {
    _classCallCheck(this, RequestSpotInstancesResult);

    RequestSpotInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSpotInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestSpotInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotInstancesResult} obj Optional instance to populate.
     * @return {module:model/RequestSpotInstancesResult} The populated <code>RequestSpotInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSpotInstancesResult();

        if (data.hasOwnProperty('SpotInstanceRequests')) {
          obj['SpotInstanceRequests'] = _ApiClient["default"].convertToType(data['SpotInstanceRequests'], [_SpotInstanceRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RequestSpotInstancesResult;
}();
/**
 * @member {Array.<module:model/SpotInstanceRequest>} SpotInstanceRequests
 */


RequestSpotInstancesResult.prototype['SpotInstanceRequests'] = undefined;
var _default = RequestSpotInstancesResult;
exports["default"] = _default;