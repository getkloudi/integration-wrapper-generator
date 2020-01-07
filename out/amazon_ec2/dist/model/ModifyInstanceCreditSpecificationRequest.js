"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceCreditSpecificationRequest = _interopRequireDefault(require("./InstanceCreditSpecificationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstanceCreditSpecificationRequest model module.
 * @module model/ModifyInstanceCreditSpecificationRequest
 * @version 1.1.0
 */
var ModifyInstanceCreditSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceCreditSpecificationRequest</code>.
   * @alias module:model/ModifyInstanceCreditSpecificationRequest
   * @param instanceCreditSpecifications {Array.<module:model/InstanceCreditSpecificationRequest>} 
   */
  function ModifyInstanceCreditSpecificationRequest(instanceCreditSpecifications) {
    _classCallCheck(this, ModifyInstanceCreditSpecificationRequest);

    ModifyInstanceCreditSpecificationRequest.initialize(this, instanceCreditSpecifications);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceCreditSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceCreditSpecifications) {
      obj['InstanceCreditSpecifications'] = instanceCreditSpecifications;
    }
    /**
     * Constructs a <code>ModifyInstanceCreditSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceCreditSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceCreditSpecificationRequest} The populated <code>ModifyInstanceCreditSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceCreditSpecificationRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceCreditSpecifications')) {
          obj['InstanceCreditSpecifications'] = _ApiClient["default"].convertToType(data['InstanceCreditSpecifications'], [_InstanceCreditSpecificationRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceCreditSpecificationRequest;
}();
/**
 * @member {String} ClientToken
 */


ModifyInstanceCreditSpecificationRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyInstanceCreditSpecificationRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/InstanceCreditSpecificationRequest>} InstanceCreditSpecifications
 */

ModifyInstanceCreditSpecificationRequest.prototype['InstanceCreditSpecifications'] = undefined;
var _default = ModifyInstanceCreditSpecificationRequest;
exports["default"] = _default;