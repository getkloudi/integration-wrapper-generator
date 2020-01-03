"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProductCodeValues = _interopRequireDefault(require("./ProductCodeValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProductCode model module.
 * @module model/ProductCode
 * @version 1.0.0
 */
var ProductCode =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProductCode</code>.
   * Describes a product code.
   * @alias module:model/ProductCode
   */
  function ProductCode() {
    _classCallCheck(this, ProductCode);

    ProductCode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProductCode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProductCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductCode} obj Optional instance to populate.
     * @return {module:model/ProductCode} The populated <code>ProductCode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductCode();

        if (data.hasOwnProperty('ProductCodeId')) {
          obj['ProductCodeId'] = _ApiClient["default"].convertToType(data['ProductCodeId'], 'String');
        }

        if (data.hasOwnProperty('ProductCodeType')) {
          obj['ProductCodeType'] = _ProductCodeValues["default"].constructFromObject(data['ProductCodeType']);
        }
      }

      return obj;
    }
  }]);

  return ProductCode;
}();
/**
 * @member {String} ProductCodeId
 */


ProductCode.prototype['ProductCodeId'] = undefined;
/**
 * @member {module:model/ProductCodeValues} ProductCodeType
 */

ProductCode.prototype['ProductCodeType'] = undefined;
var _default = ProductCode;
exports["default"] = _default;