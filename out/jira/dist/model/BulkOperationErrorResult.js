"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorCollection = _interopRequireDefault(require("./ErrorCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BulkOperationErrorResult model module.
 * @module model/BulkOperationErrorResult
 * @version 1.4.0
 */
var BulkOperationErrorResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkOperationErrorResult</code>.
   * @alias module:model/BulkOperationErrorResult
   */
  function BulkOperationErrorResult() {
    _classCallCheck(this, BulkOperationErrorResult);

    BulkOperationErrorResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkOperationErrorResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BulkOperationErrorResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkOperationErrorResult} obj Optional instance to populate.
     * @return {module:model/BulkOperationErrorResult} The populated <code>BulkOperationErrorResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkOperationErrorResult();

        if (data.hasOwnProperty('elementErrors')) {
          obj['elementErrors'] = _ErrorCollection["default"].constructFromObject(data['elementErrors']);
        }

        if (data.hasOwnProperty('failedElementNumber')) {
          obj['failedElementNumber'] = _ApiClient["default"].convertToType(data['failedElementNumber'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BulkOperationErrorResult;
}();
/**
 * @member {module:model/ErrorCollection} elementErrors
 */


BulkOperationErrorResult.prototype['elementErrors'] = undefined;
/**
 * @member {Number} failedElementNumber
 */

BulkOperationErrorResult.prototype['failedElementNumber'] = undefined;
/**
 * @member {Number} status
 */

BulkOperationErrorResult.prototype['status'] = undefined;
var _default = BulkOperationErrorResult;
exports["default"] = _default;