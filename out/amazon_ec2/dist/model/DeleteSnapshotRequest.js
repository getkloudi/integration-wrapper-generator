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
 * The DeleteSnapshotRequest model module.
 * @module model/DeleteSnapshotRequest
 * @version 1.0.0
 */
var DeleteSnapshotRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteSnapshotRequest</code>.
   * @alias module:model/DeleteSnapshotRequest
   * @param snapshotId {String} 
   */
  function DeleteSnapshotRequest(snapshotId) {
    _classCallCheck(this, DeleteSnapshotRequest);

    DeleteSnapshotRequest.initialize(this, snapshotId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteSnapshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj, snapshotId) {
      obj['SnapshotId'] = snapshotId;
    }
    /**
     * Constructs a <code>DeleteSnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSnapshotRequest} obj Optional instance to populate.
     * @return {module:model/DeleteSnapshotRequest} The populated <code>DeleteSnapshotRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteSnapshotRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteSnapshotRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteSnapshotRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} SnapshotId
 */

DeleteSnapshotRequest.prototype['SnapshotId'] = undefined;
var _default = DeleteSnapshotRequest;
exports["default"] = _default;