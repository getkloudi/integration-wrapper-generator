"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaImageAttributeName = _interopRequireDefault(require("./FpgaImageAttributeName"));

var _LoadPermissionModifications = _interopRequireDefault(require("./LoadPermissionModifications"));

var _OperationType = _interopRequireDefault(require("./OperationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyFpgaImageAttributeRequest model module.
 * @module model/ModifyFpgaImageAttributeRequest
 * @version 1.0.0
 */
var ModifyFpgaImageAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyFpgaImageAttributeRequest</code>.
   * @alias module:model/ModifyFpgaImageAttributeRequest
   * @param fpgaImageId {String} 
   */
  function ModifyFpgaImageAttributeRequest(fpgaImageId) {
    _classCallCheck(this, ModifyFpgaImageAttributeRequest);

    ModifyFpgaImageAttributeRequest.initialize(this, fpgaImageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyFpgaImageAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fpgaImageId) {
      obj['FpgaImageId'] = fpgaImageId;
    }
    /**
     * Constructs a <code>ModifyFpgaImageAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyFpgaImageAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyFpgaImageAttributeRequest} The populated <code>ModifyFpgaImageAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyFpgaImageAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _FpgaImageAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('FpgaImageId')) {
          obj['FpgaImageId'] = _ApiClient["default"].convertToType(data['FpgaImageId'], 'String');
        }

        if (data.hasOwnProperty('LoadPermission')) {
          obj['LoadPermission'] = _LoadPermissionModifications["default"].constructFromObject(data['LoadPermission']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
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
      }

      return obj;
    }
  }]);

  return ModifyFpgaImageAttributeRequest;
}();
/**
 * @member {module:model/FpgaImageAttributeName} Attribute
 */


ModifyFpgaImageAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {String} Description
 */

ModifyFpgaImageAttributeRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyFpgaImageAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} FpgaImageId
 */

ModifyFpgaImageAttributeRequest.prototype['FpgaImageId'] = undefined;
/**
 * @member {module:model/LoadPermissionModifications} LoadPermission
 */

ModifyFpgaImageAttributeRequest.prototype['LoadPermission'] = undefined;
/**
 * @member {String} Name
 */

ModifyFpgaImageAttributeRequest.prototype['Name'] = undefined;
/**
 * @member {module:model/OperationType} OperationType
 */

ModifyFpgaImageAttributeRequest.prototype['OperationType'] = undefined;
/**
 * @member {Array.<String>} ProductCodes
 */

ModifyFpgaImageAttributeRequest.prototype['ProductCodes'] = undefined;
/**
 * @member {Array.<String>} UserGroups
 */

ModifyFpgaImageAttributeRequest.prototype['UserGroups'] = undefined;
/**
 * @member {Array.<String>} UserIds
 */

ModifyFpgaImageAttributeRequest.prototype['UserIds'] = undefined;
var _default = ModifyFpgaImageAttributeRequest;
exports["default"] = _default;