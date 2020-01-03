"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SpotFleetRequestConfigData = _interopRequireDefault(require("./SpotFleetRequestConfigData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestSpotFleetRequest model module.
 * @module model/RequestSpotFleetRequest
 * @version 1.0.0
 */
var RequestSpotFleetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RequestSpotFleetRequest</code>.
   * Contains the parameters for RequestSpotFleet.
   * @alias module:model/RequestSpotFleetRequest
   * @param spotFleetRequestConfig {module:model/SpotFleetRequestConfigData} 
   */
  function RequestSpotFleetRequest(spotFleetRequestConfig) {
    _classCallCheck(this, RequestSpotFleetRequest);

    RequestSpotFleetRequest.initialize(this, spotFleetRequestConfig);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSpotFleetRequest, null, [{
    key: "initialize",
    value: function initialize(obj, spotFleetRequestConfig) {
      obj['SpotFleetRequestConfig'] = spotFleetRequestConfig;
    }
    /**
     * Constructs a <code>RequestSpotFleetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotFleetRequest} obj Optional instance to populate.
     * @return {module:model/RequestSpotFleetRequest} The populated <code>RequestSpotFleetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSpotFleetRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotFleetRequestConfig')) {
          obj['SpotFleetRequestConfig'] = _SpotFleetRequestConfigData["default"].constructFromObject(data['SpotFleetRequestConfig']);
        }
      }

      return obj;
    }
  }]);

  return RequestSpotFleetRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RequestSpotFleetRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/SpotFleetRequestConfigData} SpotFleetRequestConfig
 */

RequestSpotFleetRequest.prototype['SpotFleetRequestConfig'] = undefined;
var _default = RequestSpotFleetRequest;
exports["default"] = _default;