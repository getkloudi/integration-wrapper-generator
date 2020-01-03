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
 * The CreditSpecification model module.
 * @module model/CreditSpecification
 * @version 1.0.0
 */
var CreditSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreditSpecification</code>.
   * Describes the credit option for CPU usage of a T2 or T3 instance.
   * @alias module:model/CreditSpecification
   */
  function CreditSpecification() {
    _classCallCheck(this, CreditSpecification);

    CreditSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditSpecification} obj Optional instance to populate.
     * @return {module:model/CreditSpecification} The populated <code>CreditSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditSpecification();

        if (data.hasOwnProperty('CpuCredits')) {
          obj['CpuCredits'] = _ApiClient["default"].convertToType(data['CpuCredits'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreditSpecification;
}();
/**
 * @member {String} CpuCredits
 */


CreditSpecification.prototype['CpuCredits'] = undefined;
var _default = CreditSpecification;
exports["default"] = _default;