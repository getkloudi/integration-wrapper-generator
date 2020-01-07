"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateImageRequest model module.
 * @module model/CreateImageRequest
 * @version 1.1.0
 */
var CreateImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateImageRequest</code>.
   * @alias module:model/CreateImageRequest
   * @param instanceId {String} 
   * @param name {String} 
   */
  function CreateImageRequest(instanceId, name) {
    _classCallCheck(this, CreateImageRequest);

    CreateImageRequest.initialize(this, instanceId, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId, name) {
      obj['InstanceId'] = instanceId;
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>CreateImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateImageRequest} obj Optional instance to populate.
     * @return {module:model/CreateImageRequest} The populated <code>CreateImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateImageRequest();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('NoReboot')) {
          obj['NoReboot'] = _ApiClient["default"].convertToType(data['NoReboot'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateImageRequest;
}();
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */


CreateImageRequest.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {String} Description
 */

CreateImageRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

CreateImageRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} Name
 */

CreateImageRequest.prototype['Name'] = undefined;
/**
 * @member {Boolean} NoReboot
 */

CreateImageRequest.prototype['NoReboot'] = undefined;
var _default = CreateImageRequest;
exports["default"] = _default;