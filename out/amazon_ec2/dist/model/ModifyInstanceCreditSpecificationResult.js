"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SuccessfulInstanceCreditSpecificationItem = _interopRequireDefault(require("./SuccessfulInstanceCreditSpecificationItem"));

var _UnsuccessfulInstanceCreditSpecificationItem = _interopRequireDefault(require("./UnsuccessfulInstanceCreditSpecificationItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstanceCreditSpecificationResult model module.
 * @module model/ModifyInstanceCreditSpecificationResult
 * @version 1.1.0
 */
var ModifyInstanceCreditSpecificationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceCreditSpecificationResult</code>.
   * @alias module:model/ModifyInstanceCreditSpecificationResult
   */
  function ModifyInstanceCreditSpecificationResult() {
    _classCallCheck(this, ModifyInstanceCreditSpecificationResult);

    ModifyInstanceCreditSpecificationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceCreditSpecificationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyInstanceCreditSpecificationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceCreditSpecificationResult} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceCreditSpecificationResult} The populated <code>ModifyInstanceCreditSpecificationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceCreditSpecificationResult();

        if (data.hasOwnProperty('SuccessfulInstanceCreditSpecifications')) {
          obj['SuccessfulInstanceCreditSpecifications'] = _ApiClient["default"].convertToType(data['SuccessfulInstanceCreditSpecifications'], [_SuccessfulInstanceCreditSpecificationItem["default"]]);
        }

        if (data.hasOwnProperty('UnsuccessfulInstanceCreditSpecifications')) {
          obj['UnsuccessfulInstanceCreditSpecifications'] = _ApiClient["default"].convertToType(data['UnsuccessfulInstanceCreditSpecifications'], [_UnsuccessfulInstanceCreditSpecificationItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceCreditSpecificationResult;
}();
/**
 * @member {Array.<module:model/SuccessfulInstanceCreditSpecificationItem>} SuccessfulInstanceCreditSpecifications
 */


ModifyInstanceCreditSpecificationResult.prototype['SuccessfulInstanceCreditSpecifications'] = undefined;
/**
 * @member {Array.<module:model/UnsuccessfulInstanceCreditSpecificationItem>} UnsuccessfulInstanceCreditSpecifications
 */

ModifyInstanceCreditSpecificationResult.prototype['UnsuccessfulInstanceCreditSpecifications'] = undefined;
var _default = ModifyInstanceCreditSpecificationResult;
exports["default"] = _default;