"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedQueuedPurchaseDeletion = _interopRequireDefault(require("./FailedQueuedPurchaseDeletion"));

var _SuccessfulQueuedPurchaseDeletion = _interopRequireDefault(require("./SuccessfulQueuedPurchaseDeletion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteQueuedReservedInstancesResult model module.
 * @module model/DeleteQueuedReservedInstancesResult
 * @version 1.1.0
 */
var DeleteQueuedReservedInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteQueuedReservedInstancesResult</code>.
   * @alias module:model/DeleteQueuedReservedInstancesResult
   */
  function DeleteQueuedReservedInstancesResult() {
    _classCallCheck(this, DeleteQueuedReservedInstancesResult);

    DeleteQueuedReservedInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteQueuedReservedInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteQueuedReservedInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteQueuedReservedInstancesResult} obj Optional instance to populate.
     * @return {module:model/DeleteQueuedReservedInstancesResult} The populated <code>DeleteQueuedReservedInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteQueuedReservedInstancesResult();

        if (data.hasOwnProperty('FailedQueuedPurchaseDeletions')) {
          obj['FailedQueuedPurchaseDeletions'] = _ApiClient["default"].convertToType(data['FailedQueuedPurchaseDeletions'], [_FailedQueuedPurchaseDeletion["default"]]);
        }

        if (data.hasOwnProperty('SuccessfulQueuedPurchaseDeletions')) {
          obj['SuccessfulQueuedPurchaseDeletions'] = _ApiClient["default"].convertToType(data['SuccessfulQueuedPurchaseDeletions'], [_SuccessfulQueuedPurchaseDeletion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeleteQueuedReservedInstancesResult;
}();
/**
 * @member {Array.<module:model/FailedQueuedPurchaseDeletion>} FailedQueuedPurchaseDeletions
 */


DeleteQueuedReservedInstancesResult.prototype['FailedQueuedPurchaseDeletions'] = undefined;
/**
 * @member {Array.<module:model/SuccessfulQueuedPurchaseDeletion>} SuccessfulQueuedPurchaseDeletions
 */

DeleteQueuedReservedInstancesResult.prototype['SuccessfulQueuedPurchaseDeletions'] = undefined;
var _default = DeleteQueuedReservedInstancesResult;
exports["default"] = _default;