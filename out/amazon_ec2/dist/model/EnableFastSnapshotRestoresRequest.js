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
 * The EnableFastSnapshotRestoresRequest model module.
 * @module model/EnableFastSnapshotRestoresRequest
 * @version 1.1.0
 */
var EnableFastSnapshotRestoresRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableFastSnapshotRestoresRequest</code>.
   * @alias module:model/EnableFastSnapshotRestoresRequest
   * @param availabilityZones {Array.<String>} 
   * @param sourceSnapshotIds {Array.<String>} 
   */
  function EnableFastSnapshotRestoresRequest(availabilityZones, sourceSnapshotIds) {
    _classCallCheck(this, EnableFastSnapshotRestoresRequest);

    EnableFastSnapshotRestoresRequest.initialize(this, availabilityZones, sourceSnapshotIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableFastSnapshotRestoresRequest, null, [{
    key: "initialize",
    value: function initialize(obj, availabilityZones, sourceSnapshotIds) {
      obj['AvailabilityZones'] = availabilityZones;
      obj['SourceSnapshotIds'] = sourceSnapshotIds;
    }
    /**
     * Constructs a <code>EnableFastSnapshotRestoresRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableFastSnapshotRestoresRequest} obj Optional instance to populate.
     * @return {module:model/EnableFastSnapshotRestoresRequest} The populated <code>EnableFastSnapshotRestoresRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableFastSnapshotRestoresRequest();

        if (data.hasOwnProperty('AvailabilityZones')) {
          obj['AvailabilityZones'] = _ApiClient["default"].convertToType(data['AvailabilityZones'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SourceSnapshotIds')) {
          obj['SourceSnapshotIds'] = _ApiClient["default"].convertToType(data['SourceSnapshotIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EnableFastSnapshotRestoresRequest;
}();
/**
 * @member {Array.<String>} AvailabilityZones
 */


EnableFastSnapshotRestoresRequest.prototype['AvailabilityZones'] = undefined;
/**
 * @member {Boolean} DryRun
 */

EnableFastSnapshotRestoresRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} SourceSnapshotIds
 */

EnableFastSnapshotRestoresRequest.prototype['SourceSnapshotIds'] = undefined;
var _default = EnableFastSnapshotRestoresRequest;
exports["default"] = _default;