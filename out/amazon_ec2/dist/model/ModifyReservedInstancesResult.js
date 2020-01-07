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
 * The ModifyReservedInstancesResult model module.
 * @module model/ModifyReservedInstancesResult
 * @version 1.1.0
 */
var ModifyReservedInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyReservedInstancesResult</code>.
   * Contains the output of ModifyReservedInstances.
   * @alias module:model/ModifyReservedInstancesResult
   */
  function ModifyReservedInstancesResult() {
    _classCallCheck(this, ModifyReservedInstancesResult);

    ModifyReservedInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyReservedInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyReservedInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyReservedInstancesResult} obj Optional instance to populate.
     * @return {module:model/ModifyReservedInstancesResult} The populated <code>ModifyReservedInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyReservedInstancesResult();

        if (data.hasOwnProperty('ReservedInstancesModificationId')) {
          obj['ReservedInstancesModificationId'] = _ApiClient["default"].convertToType(data['ReservedInstancesModificationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyReservedInstancesResult;
}();
/**
 * @member {String} ReservedInstancesModificationId
 */


ModifyReservedInstancesResult.prototype['ReservedInstancesModificationId'] = undefined;
var _default = ModifyReservedInstancesResult;
exports["default"] = _default;