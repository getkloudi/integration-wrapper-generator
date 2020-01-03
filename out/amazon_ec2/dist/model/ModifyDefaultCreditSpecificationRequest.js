"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnlimitedSupportedInstanceFamily = _interopRequireDefault(require("./UnlimitedSupportedInstanceFamily"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyDefaultCreditSpecificationRequest model module.
 * @module model/ModifyDefaultCreditSpecificationRequest
 * @version 1.0.0
 */
var ModifyDefaultCreditSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyDefaultCreditSpecificationRequest</code>.
   * @alias module:model/ModifyDefaultCreditSpecificationRequest
   * @param cpuCredits {String} 
   * @param instanceFamily {module:model/UnlimitedSupportedInstanceFamily} 
   */
  function ModifyDefaultCreditSpecificationRequest(cpuCredits, instanceFamily) {
    _classCallCheck(this, ModifyDefaultCreditSpecificationRequest);

    ModifyDefaultCreditSpecificationRequest.initialize(this, cpuCredits, instanceFamily);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyDefaultCreditSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cpuCredits, instanceFamily) {
      obj['CpuCredits'] = cpuCredits;
      obj['InstanceFamily'] = instanceFamily;
    }
    /**
     * Constructs a <code>ModifyDefaultCreditSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyDefaultCreditSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/ModifyDefaultCreditSpecificationRequest} The populated <code>ModifyDefaultCreditSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyDefaultCreditSpecificationRequest();

        if (data.hasOwnProperty('CpuCredits')) {
          obj['CpuCredits'] = _ApiClient["default"].convertToType(data['CpuCredits'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _UnlimitedSupportedInstanceFamily["default"].constructFromObject(data['InstanceFamily']);
        }
      }

      return obj;
    }
  }]);

  return ModifyDefaultCreditSpecificationRequest;
}();
/**
 * @member {String} CpuCredits
 */


ModifyDefaultCreditSpecificationRequest.prototype['CpuCredits'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyDefaultCreditSpecificationRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/UnlimitedSupportedInstanceFamily} InstanceFamily
 */

ModifyDefaultCreditSpecificationRequest.prototype['InstanceFamily'] = undefined;
var _default = ModifyDefaultCreditSpecificationRequest;
exports["default"] = _default;