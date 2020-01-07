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
 * The CancelImportTaskResult model module.
 * @module model/CancelImportTaskResult
 * @version 1.1.0
 */
var CancelImportTaskResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelImportTaskResult</code>.
   * @alias module:model/CancelImportTaskResult
   */
  function CancelImportTaskResult() {
    _classCallCheck(this, CancelImportTaskResult);

    CancelImportTaskResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelImportTaskResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelImportTaskResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelImportTaskResult} obj Optional instance to populate.
     * @return {module:model/CancelImportTaskResult} The populated <code>CancelImportTaskResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelImportTaskResult();

        if (data.hasOwnProperty('ImportTaskId')) {
          obj['ImportTaskId'] = _ApiClient["default"].convertToType(data['ImportTaskId'], 'String');
        }

        if (data.hasOwnProperty('PreviousState')) {
          obj['PreviousState'] = _ApiClient["default"].convertToType(data['PreviousState'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelImportTaskResult;
}();
/**
 * @member {String} ImportTaskId
 */


CancelImportTaskResult.prototype['ImportTaskId'] = undefined;
/**
 * @member {String} PreviousState
 */

CancelImportTaskResult.prototype['PreviousState'] = undefined;
/**
 * @member {String} State
 */

CancelImportTaskResult.prototype['State'] = undefined;
var _default = CancelImportTaskResult;
exports["default"] = _default;