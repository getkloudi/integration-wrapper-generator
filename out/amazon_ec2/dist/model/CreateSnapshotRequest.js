"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateSnapshotRequest model module.
 * @module model/CreateSnapshotRequest
 * @version 1.0.0
 */
var CreateSnapshotRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateSnapshotRequest</code>.
   * @alias module:model/CreateSnapshotRequest
   * @param volumeId {String} 
   */
  function CreateSnapshotRequest(volumeId) {
    _classCallCheck(this, CreateSnapshotRequest);

    CreateSnapshotRequest.initialize(this, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSnapshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj, volumeId) {
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>CreateSnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSnapshotRequest} obj Optional instance to populate.
     * @return {module:model/CreateSnapshotRequest} The populated <code>CreateSnapshotRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSnapshotRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateSnapshotRequest;
}();
/**
 * @member {String} Description
 */


CreateSnapshotRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateSnapshotRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateSnapshotRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} VolumeId
 */

CreateSnapshotRequest.prototype['VolumeId'] = undefined;
var _default = CreateSnapshotRequest;
exports["default"] = _default;