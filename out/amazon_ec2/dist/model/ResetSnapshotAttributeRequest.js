"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SnapshotAttributeName = _interopRequireDefault(require("./SnapshotAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResetSnapshotAttributeRequest model module.
 * @module model/ResetSnapshotAttributeRequest
 * @version 1.0.0
 */
var ResetSnapshotAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResetSnapshotAttributeRequest</code>.
   * @alias module:model/ResetSnapshotAttributeRequest
   * @param attribute {module:model/SnapshotAttributeName} 
   * @param snapshotId {String} 
   */
  function ResetSnapshotAttributeRequest(attribute, snapshotId) {
    _classCallCheck(this, ResetSnapshotAttributeRequest);

    ResetSnapshotAttributeRequest.initialize(this, attribute, snapshotId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetSnapshotAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, snapshotId) {
      obj['Attribute'] = attribute;
      obj['SnapshotId'] = snapshotId;
    }
    /**
     * Constructs a <code>ResetSnapshotAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetSnapshotAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ResetSnapshotAttributeRequest} The populated <code>ResetSnapshotAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetSnapshotAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _SnapshotAttributeName["default"].constructFromObject(data['Attribute']);
        }

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

  return ResetSnapshotAttributeRequest;
}();
/**
 * @member {module:model/SnapshotAttributeName} Attribute
 */


ResetSnapshotAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ResetSnapshotAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} SnapshotId
 */

ResetSnapshotAttributeRequest.prototype['SnapshotId'] = undefined;
var _default = ResetSnapshotAttributeRequest;
exports["default"] = _default;