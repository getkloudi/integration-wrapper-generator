"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteQueuedReservedInstancesErrorCode = _interopRequireDefault(require("./DeleteQueuedReservedInstancesErrorCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteQueuedReservedInstancesError model module.
 * @module model/DeleteQueuedReservedInstancesError
 * @version 1.0.0
 */
var DeleteQueuedReservedInstancesError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteQueuedReservedInstancesError</code>.
   * Describes the error for a Reserved Instance whose queued purchase could not be deleted.
   * @alias module:model/DeleteQueuedReservedInstancesError
   */
  function DeleteQueuedReservedInstancesError() {
    _classCallCheck(this, DeleteQueuedReservedInstancesError);

    DeleteQueuedReservedInstancesError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteQueuedReservedInstancesError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteQueuedReservedInstancesError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteQueuedReservedInstancesError} obj Optional instance to populate.
     * @return {module:model/DeleteQueuedReservedInstancesError} The populated <code>DeleteQueuedReservedInstancesError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteQueuedReservedInstancesError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _DeleteQueuedReservedInstancesErrorCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteQueuedReservedInstancesError;
}();
/**
 * @member {module:model/DeleteQueuedReservedInstancesErrorCode} Code
 */


DeleteQueuedReservedInstancesError.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

DeleteQueuedReservedInstancesError.prototype['Message'] = undefined;
var _default = DeleteQueuedReservedInstancesError;
exports["default"] = _default;