"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstance = _interopRequireDefault(require("./ScheduledInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurchaseScheduledInstancesResult model module.
 * @module model/PurchaseScheduledInstancesResult
 * @version 1.0.0
 */
var PurchaseScheduledInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PurchaseScheduledInstancesResult</code>.
   * Contains the output of PurchaseScheduledInstances.
   * @alias module:model/PurchaseScheduledInstancesResult
   */
  function PurchaseScheduledInstancesResult() {
    _classCallCheck(this, PurchaseScheduledInstancesResult);

    PurchaseScheduledInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurchaseScheduledInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PurchaseScheduledInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseScheduledInstancesResult} obj Optional instance to populate.
     * @return {module:model/PurchaseScheduledInstancesResult} The populated <code>PurchaseScheduledInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseScheduledInstancesResult();

        if (data.hasOwnProperty('ScheduledInstanceSet')) {
          obj['ScheduledInstanceSet'] = _ApiClient["default"].convertToType(data['ScheduledInstanceSet'], [_ScheduledInstance["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PurchaseScheduledInstancesResult;
}();
/**
 * @member {Array.<module:model/ScheduledInstance>} ScheduledInstanceSet
 */


PurchaseScheduledInstancesResult.prototype['ScheduledInstanceSet'] = undefined;
var _default = PurchaseScheduledInstancesResult;
exports["default"] = _default;