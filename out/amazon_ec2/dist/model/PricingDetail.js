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
 * The PricingDetail model module.
 * @module model/PricingDetail
 * @version 1.0.0
 */
var PricingDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PricingDetail</code>.
   * Describes a Reserved Instance offering.
   * @alias module:model/PricingDetail
   */
  function PricingDetail() {
    _classCallCheck(this, PricingDetail);

    PricingDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PricingDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PricingDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricingDetail} obj Optional instance to populate.
     * @return {module:model/PricingDetail} The populated <code>PricingDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PricingDetail();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Price')) {
          obj['Price'] = _ApiClient["default"].convertToType(data['Price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PricingDetail;
}();
/**
 * @member {Number} Count
 */


PricingDetail.prototype['Count'] = undefined;
/**
 * @member {Number} Price
 */

PricingDetail.prototype['Price'] = undefined;
var _default = PricingDetail;
exports["default"] = _default;