"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SnapshotTaskDetail = _interopRequireDefault(require("./SnapshotTaskDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportSnapshotResult model module.
 * @module model/ImportSnapshotResult
 * @version 1.1.0
 */
var ImportSnapshotResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportSnapshotResult</code>.
   * @alias module:model/ImportSnapshotResult
   */
  function ImportSnapshotResult() {
    _classCallCheck(this, ImportSnapshotResult);

    ImportSnapshotResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportSnapshotResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportSnapshotResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportSnapshotResult} obj Optional instance to populate.
     * @return {module:model/ImportSnapshotResult} The populated <code>ImportSnapshotResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportSnapshotResult();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ImportTaskId')) {
          obj['ImportTaskId'] = _ApiClient["default"].convertToType(data['ImportTaskId'], 'String');
        }

        if (data.hasOwnProperty('SnapshotTaskDetail')) {
          obj['SnapshotTaskDetail'] = _SnapshotTaskDetail["default"].constructFromObject(data['SnapshotTaskDetail']);
        }
      }

      return obj;
    }
  }]);

  return ImportSnapshotResult;
}();
/**
 * @member {String} Description
 */


ImportSnapshotResult.prototype['Description'] = undefined;
/**
 * @member {String} ImportTaskId
 */

ImportSnapshotResult.prototype['ImportTaskId'] = undefined;
/**
 * @member {module:model/SnapshotTaskDetail} SnapshotTaskDetail
 */

ImportSnapshotResult.prototype['SnapshotTaskDetail'] = undefined;
var _default = ImportSnapshotResult;
exports["default"] = _default;