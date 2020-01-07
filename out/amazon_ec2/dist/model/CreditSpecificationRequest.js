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
 * The CreditSpecificationRequest model module.
 * @module model/CreditSpecificationRequest
 * @version 1.1.0
 */
var CreditSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreditSpecificationRequest</code>.
   * The credit option for CPU usage of a T2 or T3 instance.
   * @alias module:model/CreditSpecificationRequest
   * @param cpuCredits {String} 
   */
  function CreditSpecificationRequest(cpuCredits) {
    _classCallCheck(this, CreditSpecificationRequest);

    CreditSpecificationRequest.initialize(this, cpuCredits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cpuCredits) {
      obj['CpuCredits'] = cpuCredits;
    }
    /**
     * Constructs a <code>CreditSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/CreditSpecificationRequest} The populated <code>CreditSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditSpecificationRequest();

        if (data.hasOwnProperty('CpuCredits')) {
          obj['CpuCredits'] = _ApiClient["default"].convertToType(data['CpuCredits'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreditSpecificationRequest;
}();
/**
 * @member {String} CpuCredits
 */


CreditSpecificationRequest.prototype['CpuCredits'] = undefined;
var _default = CreditSpecificationRequest;
exports["default"] = _default;