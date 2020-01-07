"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetConsoleScreenshotRequest model module.
 * @module model/GetConsoleScreenshotRequest
 * @version 1.1.0
 */
var GetConsoleScreenshotRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetConsoleScreenshotRequest</code>.
   * @alias module:model/GetConsoleScreenshotRequest
   * @param instanceId {String} 
   */
  function GetConsoleScreenshotRequest(instanceId) {
    _classCallCheck(this, GetConsoleScreenshotRequest);

    GetConsoleScreenshotRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetConsoleScreenshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>GetConsoleScreenshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConsoleScreenshotRequest} obj Optional instance to populate.
     * @return {module:model/GetConsoleScreenshotRequest} The populated <code>GetConsoleScreenshotRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetConsoleScreenshotRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('WakeUp')) {
          obj['WakeUp'] = _ApiClient["default"].convertToType(data['WakeUp'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GetConsoleScreenshotRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetConsoleScreenshotRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

GetConsoleScreenshotRequest.prototype['InstanceId'] = undefined;
/**
 * @member {Boolean} WakeUp
 */

GetConsoleScreenshotRequest.prototype['WakeUp'] = undefined;
var _default = GetConsoleScreenshotRequest;
exports["default"] = _default;