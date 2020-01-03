"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CopySnapshotResult model module.
 * @module model/CopySnapshotResult
 * @version 1.0.0
 */
var CopySnapshotResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CopySnapshotResult</code>.
   * @alias module:model/CopySnapshotResult
   */
  function CopySnapshotResult() {
    _classCallCheck(this, CopySnapshotResult);

    CopySnapshotResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CopySnapshotResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CopySnapshotResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopySnapshotResult} obj Optional instance to populate.
     * @return {module:model/CopySnapshotResult} The populated <code>CopySnapshotResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CopySnapshotResult();

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CopySnapshotResult;
}();
/**
 * @member {String} SnapshotId
 */


CopySnapshotResult.prototype['SnapshotId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

CopySnapshotResult.prototype['Tags'] = undefined;
var _default = CopySnapshotResult;
exports["default"] = _default;