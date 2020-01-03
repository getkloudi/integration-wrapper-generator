"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ArchitectureValues = _interopRequireDefault(require("./ArchitectureValues"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegisterImageRequest model module.
 * @module model/RegisterImageRequest
 * @version 1.0.0
 */
var RegisterImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RegisterImageRequest</code>.
   * Contains the parameters for RegisterImage.
   * @alias module:model/RegisterImageRequest
   * @param name {String} 
   */
  function RegisterImageRequest(name) {
    _classCallCheck(this, RegisterImageRequest);

    RegisterImageRequest.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>RegisterImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterImageRequest} obj Optional instance to populate.
     * @return {module:model/RegisterImageRequest} The populated <code>RegisterImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterImageRequest();

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ArchitectureValues["default"].constructFromObject(data['Architecture']);
        }

        if (data.hasOwnProperty('BillingProducts')) {
          obj['BillingProducts'] = _ApiClient["default"].convertToType(data['BillingProducts'], ['String']);
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _ApiClient["default"].convertToType(data['EnaSupport'], 'Boolean');
        }

        if (data.hasOwnProperty('ImageLocation')) {
          obj['ImageLocation'] = _ApiClient["default"].convertToType(data['ImageLocation'], 'String');
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _ApiClient["default"].convertToType(data['KernelId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _ApiClient["default"].convertToType(data['RamdiskId'], 'String');
        }

        if (data.hasOwnProperty('RootDeviceName')) {
          obj['RootDeviceName'] = _ApiClient["default"].convertToType(data['RootDeviceName'], 'String');
        }

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _ApiClient["default"].convertToType(data['SriovNetSupport'], 'String');
        }

        if (data.hasOwnProperty('VirtualizationType')) {
          obj['VirtualizationType'] = _ApiClient["default"].convertToType(data['VirtualizationType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegisterImageRequest;
}();
/**
 * @member {module:model/ArchitectureValues} Architecture
 */


RegisterImageRequest.prototype['Architecture'] = undefined;
/**
 * @member {Array.<String>} BillingProducts
 */

RegisterImageRequest.prototype['BillingProducts'] = undefined;
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */

RegisterImageRequest.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {String} Description
 */

RegisterImageRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RegisterImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} EnaSupport
 */

RegisterImageRequest.prototype['EnaSupport'] = undefined;
/**
 * @member {String} ImageLocation
 */

RegisterImageRequest.prototype['ImageLocation'] = undefined;
/**
 * @member {String} KernelId
 */

RegisterImageRequest.prototype['KernelId'] = undefined;
/**
 * @member {String} Name
 */

RegisterImageRequest.prototype['Name'] = undefined;
/**
 * @member {String} RamdiskId
 */

RegisterImageRequest.prototype['RamdiskId'] = undefined;
/**
 * @member {String} RootDeviceName
 */

RegisterImageRequest.prototype['RootDeviceName'] = undefined;
/**
 * @member {String} SriovNetSupport
 */

RegisterImageRequest.prototype['SriovNetSupport'] = undefined;
/**
 * @member {String} VirtualizationType
 */

RegisterImageRequest.prototype['VirtualizationType'] = undefined;
var _default = RegisterImageRequest;
exports["default"] = _default;