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
 * The ModifyInstanceEventStartTimeRequest model module.
 * @module model/ModifyInstanceEventStartTimeRequest
 * @version 1.0.0
 */
var ModifyInstanceEventStartTimeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceEventStartTimeRequest</code>.
   * @alias module:model/ModifyInstanceEventStartTimeRequest
   * @param instanceEventId {String} 
   * @param instanceId {String} 
   * @param notBefore {Date} 
   */
  function ModifyInstanceEventStartTimeRequest(instanceEventId, instanceId, notBefore) {
    _classCallCheck(this, ModifyInstanceEventStartTimeRequest);

    ModifyInstanceEventStartTimeRequest.initialize(this, instanceEventId, instanceId, notBefore);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceEventStartTimeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceEventId, instanceId, notBefore) {
      obj['InstanceEventId'] = instanceEventId;
      obj['InstanceId'] = instanceId;
      obj['NotBefore'] = notBefore;
    }
    /**
     * Constructs a <code>ModifyInstanceEventStartTimeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceEventStartTimeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceEventStartTimeRequest} The populated <code>ModifyInstanceEventStartTimeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceEventStartTimeRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceEventId')) {
          obj['InstanceEventId'] = _ApiClient["default"].convertToType(data['InstanceEventId'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('NotBefore')) {
          obj['NotBefore'] = _ApiClient["default"].convertToType(data['NotBefore'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceEventStartTimeRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyInstanceEventStartTimeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceEventId
 */

ModifyInstanceEventStartTimeRequest.prototype['InstanceEventId'] = undefined;
/**
 * @member {String} InstanceId
 */

ModifyInstanceEventStartTimeRequest.prototype['InstanceId'] = undefined;
/**
 * @member {Date} NotBefore
 */

ModifyInstanceEventStartTimeRequest.prototype['NotBefore'] = undefined;
var _default = ModifyInstanceEventStartTimeRequest;
exports["default"] = _default;