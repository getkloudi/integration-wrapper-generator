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
 * The GetConsoleOutputRequest model module.
 * @module model/GetConsoleOutputRequest
 * @version 1.0.0
 */
var GetConsoleOutputRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetConsoleOutputRequest</code>.
   * @alias module:model/GetConsoleOutputRequest
   * @param instanceId {String} 
   */
  function GetConsoleOutputRequest(instanceId) {
    _classCallCheck(this, GetConsoleOutputRequest);

    GetConsoleOutputRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetConsoleOutputRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>GetConsoleOutputRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConsoleOutputRequest} obj Optional instance to populate.
     * @return {module:model/GetConsoleOutputRequest} The populated <code>GetConsoleOutputRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetConsoleOutputRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Latest')) {
          obj['Latest'] = _ApiClient["default"].convertToType(data['Latest'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GetConsoleOutputRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetConsoleOutputRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

GetConsoleOutputRequest.prototype['InstanceId'] = undefined;
/**
 * @member {Boolean} Latest
 */

GetConsoleOutputRequest.prototype['Latest'] = undefined;
var _default = GetConsoleOutputRequest;
exports["default"] = _default;