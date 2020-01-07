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
 * The GetLaunchTemplateDataRequest model module.
 * @module model/GetLaunchTemplateDataRequest
 * @version 1.1.0
 */
var GetLaunchTemplateDataRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetLaunchTemplateDataRequest</code>.
   * @alias module:model/GetLaunchTemplateDataRequest
   * @param instanceId {String} 
   */
  function GetLaunchTemplateDataRequest(instanceId) {
    _classCallCheck(this, GetLaunchTemplateDataRequest);

    GetLaunchTemplateDataRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLaunchTemplateDataRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>GetLaunchTemplateDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLaunchTemplateDataRequest} obj Optional instance to populate.
     * @return {module:model/GetLaunchTemplateDataRequest} The populated <code>GetLaunchTemplateDataRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLaunchTemplateDataRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetLaunchTemplateDataRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetLaunchTemplateDataRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

GetLaunchTemplateDataRequest.prototype['InstanceId'] = undefined;
var _default = GetLaunchTemplateDataRequest;
exports["default"] = _default;