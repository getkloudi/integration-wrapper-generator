"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceFamilyCreditSpecification = _interopRequireDefault(require("./InstanceFamilyCreditSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetDefaultCreditSpecificationResult model module.
 * @module model/GetDefaultCreditSpecificationResult
 * @version 1.0.0
 */
var GetDefaultCreditSpecificationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetDefaultCreditSpecificationResult</code>.
   * @alias module:model/GetDefaultCreditSpecificationResult
   */
  function GetDefaultCreditSpecificationResult() {
    _classCallCheck(this, GetDefaultCreditSpecificationResult);

    GetDefaultCreditSpecificationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetDefaultCreditSpecificationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetDefaultCreditSpecificationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDefaultCreditSpecificationResult} obj Optional instance to populate.
     * @return {module:model/GetDefaultCreditSpecificationResult} The populated <code>GetDefaultCreditSpecificationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDefaultCreditSpecificationResult();

        if (data.hasOwnProperty('InstanceFamilyCreditSpecification')) {
          obj['InstanceFamilyCreditSpecification'] = _InstanceFamilyCreditSpecification["default"].constructFromObject(data['InstanceFamilyCreditSpecification']);
        }
      }

      return obj;
    }
  }]);

  return GetDefaultCreditSpecificationResult;
}();
/**
 * @member {module:model/InstanceFamilyCreditSpecification} InstanceFamilyCreditSpecification
 */


GetDefaultCreditSpecificationResult.prototype['InstanceFamilyCreditSpecification'] = undefined;
var _default = GetDefaultCreditSpecificationResult;
exports["default"] = _default;