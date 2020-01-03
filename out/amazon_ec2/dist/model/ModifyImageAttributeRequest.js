"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _LaunchPermissionModifications = _interopRequireDefault(require("./LaunchPermissionModifications"));

var _OperationType = _interopRequireDefault(require("./OperationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyImageAttributeRequest model module.
 * @module model/ModifyImageAttributeRequest
 * @version 1.0.0
 */
var ModifyImageAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyImageAttributeRequest</code>.
   * Contains the parameters for ModifyImageAttribute.
   * @alias module:model/ModifyImageAttributeRequest
   * @param imageId {String} 
   */
  function ModifyImageAttributeRequest(imageId) {
    _classCallCheck(this, ModifyImageAttributeRequest);

    ModifyImageAttributeRequest.initialize(this, imageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyImageAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, imageId) {
      obj['ImageId'] = imageId;
    }
    /**
     * Constructs a <code>ModifyImageAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyImageAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyImageAttributeRequest} The populated <code>ModifyImageAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyImageAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _ApiClient["default"].convertToType(data['Attribute'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _AttributeValue["default"].constructFromObject(data['Description']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('LaunchPermission')) {
          obj['LaunchPermission'] = _LaunchPermissionModifications["default"].constructFromObject(data['LaunchPermission']);
        }

        if (data.hasOwnProperty('OperationType')) {
          obj['OperationType'] = _OperationType["default"].constructFromObject(data['OperationType']);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], ['String']);
        }

        if (data.hasOwnProperty('UserGroups')) {
          obj['UserGroups'] = _ApiClient["default"].convertToType(data['UserGroups'], ['String']);
        }

        if (data.hasOwnProperty('UserIds')) {
          obj['UserIds'] = _ApiClient["default"].convertToType(data['UserIds'], ['String']);
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyImageAttributeRequest;
}();
/**
 * @member {String} Attribute
 */


ModifyImageAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {module:model/AttributeValue} Description
 */

ModifyImageAttributeRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyImageAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ImageId
 */

ModifyImageAttributeRequest.prototype['ImageId'] = undefined;
/**
 * @member {module:model/LaunchPermissionModifications} LaunchPermission
 */

ModifyImageAttributeRequest.prototype['LaunchPermission'] = undefined;
/**
 * @member {module:model/OperationType} OperationType
 */

ModifyImageAttributeRequest.prototype['OperationType'] = undefined;
/**
 * @member {Array.<String>} ProductCodes
 */

ModifyImageAttributeRequest.prototype['ProductCodes'] = undefined;
/**
 * @member {Array.<String>} UserGroups
 */

ModifyImageAttributeRequest.prototype['UserGroups'] = undefined;
/**
 * @member {Array.<String>} UserIds
 */

ModifyImageAttributeRequest.prototype['UserIds'] = undefined;
/**
 * @member {String} Value
 */

ModifyImageAttributeRequest.prototype['Value'] = undefined;
var _default = ModifyImageAttributeRequest;
exports["default"] = _default;