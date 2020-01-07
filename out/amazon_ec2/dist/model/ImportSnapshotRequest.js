"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientData = _interopRequireDefault(require("./ClientData"));

var _SnapshotDiskContainer = _interopRequireDefault(require("./SnapshotDiskContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportSnapshotRequest model module.
 * @module model/ImportSnapshotRequest
 * @version 1.1.0
 */
var ImportSnapshotRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportSnapshotRequest</code>.
   * @alias module:model/ImportSnapshotRequest
   */
  function ImportSnapshotRequest() {
    _classCallCheck(this, ImportSnapshotRequest);

    ImportSnapshotRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportSnapshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportSnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportSnapshotRequest} obj Optional instance to populate.
     * @return {module:model/ImportSnapshotRequest} The populated <code>ImportSnapshotRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportSnapshotRequest();

        if (data.hasOwnProperty('ClientData')) {
          obj['ClientData'] = _ClientData["default"].constructFromObject(data['ClientData']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskContainer')) {
          obj['DiskContainer'] = _SnapshotDiskContainer["default"].constructFromObject(data['DiskContainer']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('RoleName')) {
          obj['RoleName'] = _ApiClient["default"].convertToType(data['RoleName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportSnapshotRequest;
}();
/**
 * @member {module:model/ClientData} ClientData
 */


ImportSnapshotRequest.prototype['ClientData'] = undefined;
/**
 * @member {String} ClientToken
 */

ImportSnapshotRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

ImportSnapshotRequest.prototype['Description'] = undefined;
/**
 * @member {module:model/SnapshotDiskContainer} DiskContainer
 */

ImportSnapshotRequest.prototype['DiskContainer'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ImportSnapshotRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

ImportSnapshotRequest.prototype['Encrypted'] = undefined;
/**
 * @member {String} KmsKeyId
 */

ImportSnapshotRequest.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} RoleName
 */

ImportSnapshotRequest.prototype['RoleName'] = undefined;
var _default = ImportSnapshotRequest;
exports["default"] = _default;