"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityStatus = _interopRequireDefault(require("./ActivityStatus"));

var _BatchState = _interopRequireDefault(require("./BatchState"));

var _SpotFleetRequestConfigData = _interopRequireDefault(require("./SpotFleetRequestConfigData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotFleetRequestConfig model module.
 * @module model/SpotFleetRequestConfig
 * @version 1.0.0
 */
var SpotFleetRequestConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotFleetRequestConfig</code>.
   * Describes a Spot Fleet request.
   * @alias module:model/SpotFleetRequestConfig
   */
  function SpotFleetRequestConfig() {
    _classCallCheck(this, SpotFleetRequestConfig);

    SpotFleetRequestConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotFleetRequestConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotFleetRequestConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotFleetRequestConfig} obj Optional instance to populate.
     * @return {module:model/SpotFleetRequestConfig} The populated <code>SpotFleetRequestConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotFleetRequestConfig();

        if (data.hasOwnProperty('ActivityStatus')) {
          obj['ActivityStatus'] = _ActivityStatus["default"].constructFromObject(data['ActivityStatus']);
        }

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('SpotFleetRequestConfig')) {
          obj['SpotFleetRequestConfig'] = _SpotFleetRequestConfigData["default"].constructFromObject(data['SpotFleetRequestConfig']);
        }

        if (data.hasOwnProperty('SpotFleetRequestId')) {
          obj['SpotFleetRequestId'] = _ApiClient["default"].convertToType(data['SpotFleetRequestId'], 'String');
        }

        if (data.hasOwnProperty('SpotFleetRequestState')) {
          obj['SpotFleetRequestState'] = _BatchState["default"].constructFromObject(data['SpotFleetRequestState']);
        }
      }

      return obj;
    }
  }]);

  return SpotFleetRequestConfig;
}();
/**
 * @member {module:model/ActivityStatus} ActivityStatus
 */


SpotFleetRequestConfig.prototype['ActivityStatus'] = undefined;
/**
 * @member {Date} CreateTime
 */

SpotFleetRequestConfig.prototype['CreateTime'] = undefined;
/**
 * @member {module:model/SpotFleetRequestConfigData} SpotFleetRequestConfig
 */

SpotFleetRequestConfig.prototype['SpotFleetRequestConfig'] = undefined;
/**
 * @member {String} SpotFleetRequestId
 */

SpotFleetRequestConfig.prototype['SpotFleetRequestId'] = undefined;
/**
 * @member {module:model/BatchState} SpotFleetRequestState
 */

SpotFleetRequestConfig.prototype['SpotFleetRequestState'] = undefined;
var _default = SpotFleetRequestConfig;
exports["default"] = _default;