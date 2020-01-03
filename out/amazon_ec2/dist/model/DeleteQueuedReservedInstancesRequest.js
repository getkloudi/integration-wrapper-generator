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
 * The DeleteQueuedReservedInstancesRequest model module.
 * @module model/DeleteQueuedReservedInstancesRequest
 * @version 1.0.0
 */
var DeleteQueuedReservedInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteQueuedReservedInstancesRequest</code>.
   * @alias module:model/DeleteQueuedReservedInstancesRequest
   * @param reservedInstancesIds {Array.<String>} 
   */
  function DeleteQueuedReservedInstancesRequest(reservedInstancesIds) {
    _classCallCheck(this, DeleteQueuedReservedInstancesRequest);

    DeleteQueuedReservedInstancesRequest.initialize(this, reservedInstancesIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteQueuedReservedInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reservedInstancesIds) {
      obj['ReservedInstancesIds'] = reservedInstancesIds;
    }
    /**
     * Constructs a <code>DeleteQueuedReservedInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteQueuedReservedInstancesRequest} obj Optional instance to populate.
     * @return {module:model/DeleteQueuedReservedInstancesRequest} The populated <code>DeleteQueuedReservedInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteQueuedReservedInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ReservedInstancesIds')) {
          obj['ReservedInstancesIds'] = _ApiClient["default"].convertToType(data['ReservedInstancesIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteQueuedReservedInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteQueuedReservedInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ReservedInstancesIds
 */

DeleteQueuedReservedInstancesRequest.prototype['ReservedInstancesIds'] = undefined;
var _default = DeleteQueuedReservedInstancesRequest;
exports["default"] = _default;