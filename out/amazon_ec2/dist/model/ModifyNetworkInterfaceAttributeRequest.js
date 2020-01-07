"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _NetworkInterfaceAttachmentChanges = _interopRequireDefault(require("./NetworkInterfaceAttachmentChanges"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyNetworkInterfaceAttributeRequest model module.
 * @module model/ModifyNetworkInterfaceAttributeRequest
 * @version 1.1.0
 */
var ModifyNetworkInterfaceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyNetworkInterfaceAttributeRequest</code>.
   * Contains the parameters for ModifyNetworkInterfaceAttribute.
   * @alias module:model/ModifyNetworkInterfaceAttributeRequest
   * @param networkInterfaceId {String} 
   */
  function ModifyNetworkInterfaceAttributeRequest(networkInterfaceId) {
    _classCallCheck(this, ModifyNetworkInterfaceAttributeRequest);

    ModifyNetworkInterfaceAttributeRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyNetworkInterfaceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>ModifyNetworkInterfaceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyNetworkInterfaceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyNetworkInterfaceAttributeRequest} The populated <code>ModifyNetworkInterfaceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyNetworkInterfaceAttributeRequest();

        if (data.hasOwnProperty('Attachment')) {
          obj['Attachment'] = _NetworkInterfaceAttachmentChanges["default"].constructFromObject(data['Attachment']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _AttributeValue["default"].constructFromObject(data['Description']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _AttributeBooleanValue["default"].constructFromObject(data['SourceDestCheck']);
        }
      }

      return obj;
    }
  }]);

  return ModifyNetworkInterfaceAttributeRequest;
}();
/**
 * @member {module:model/NetworkInterfaceAttachmentChanges} Attachment
 */


ModifyNetworkInterfaceAttributeRequest.prototype['Attachment'] = undefined;
/**
 * @member {module:model/AttributeValue} Description
 */

ModifyNetworkInterfaceAttributeRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyNetworkInterfaceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

ModifyNetworkInterfaceAttributeRequest.prototype['Groups'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

ModifyNetworkInterfaceAttributeRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} SourceDestCheck
 */

ModifyNetworkInterfaceAttributeRequest.prototype['SourceDestCheck'] = undefined;
var _default = ModifyNetworkInterfaceAttributeRequest;
exports["default"] = _default;