"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateVolumePermissionModifications = _interopRequireDefault(require("./CreateVolumePermissionModifications"));

var _OperationType = _interopRequireDefault(require("./OperationType"));

var _SnapshotAttributeName = _interopRequireDefault(require("./SnapshotAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifySnapshotAttributeRequest model module.
 * @module model/ModifySnapshotAttributeRequest
 * @version 1.0.0
 */
var ModifySnapshotAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifySnapshotAttributeRequest</code>.
   * @alias module:model/ModifySnapshotAttributeRequest
   * @param snapshotId {String} 
   */
  function ModifySnapshotAttributeRequest(snapshotId) {
    _classCallCheck(this, ModifySnapshotAttributeRequest);

    ModifySnapshotAttributeRequest.initialize(this, snapshotId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifySnapshotAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, snapshotId) {
      obj['SnapshotId'] = snapshotId;
    }
    /**
     * Constructs a <code>ModifySnapshotAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifySnapshotAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifySnapshotAttributeRequest} The populated <code>ModifySnapshotAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifySnapshotAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _SnapshotAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('CreateVolumePermission')) {
          obj['CreateVolumePermission'] = _CreateVolumePermissionModifications["default"].constructFromObject(data['CreateVolumePermission']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupNames')) {
          obj['GroupNames'] = _ApiClient["default"].convertToType(data['GroupNames'], ['String']);
        }

        if (data.hasOwnProperty('OperationType')) {
          obj['OperationType'] = _OperationType["default"].constructFromObject(data['OperationType']);
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('UserIds')) {
          obj['UserIds'] = _ApiClient["default"].convertToType(data['UserIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ModifySnapshotAttributeRequest;
}();
/**
 * @member {module:model/SnapshotAttributeName} Attribute
 */


ModifySnapshotAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {module:model/CreateVolumePermissionModifications} CreateVolumePermission
 */

ModifySnapshotAttributeRequest.prototype['CreateVolumePermission'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifySnapshotAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} GroupNames
 */

ModifySnapshotAttributeRequest.prototype['GroupNames'] = undefined;
/**
 * @member {module:model/OperationType} OperationType
 */

ModifySnapshotAttributeRequest.prototype['OperationType'] = undefined;
/**
 * @member {String} SnapshotId
 */

ModifySnapshotAttributeRequest.prototype['SnapshotId'] = undefined;
/**
 * @member {Array.<String>} UserIds
 */

ModifySnapshotAttributeRequest.prototype['UserIds'] = undefined;
var _default = ModifySnapshotAttributeRequest;
exports["default"] = _default;