"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeAddressesResult model module.
 * @module model/DescribeAddressesResult
 * @version 1.0.0
 */
var DescribeAddressesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeAddressesResult</code>.
   * @alias module:model/DescribeAddressesResult
   */
  function DescribeAddressesResult() {
    _classCallCheck(this, DescribeAddressesResult);

    DescribeAddressesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeAddressesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeAddressesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeAddressesResult} obj Optional instance to populate.
     * @return {module:model/DescribeAddressesResult} The populated <code>DescribeAddressesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeAddressesResult();

        if (data.hasOwnProperty('Addresses')) {
          obj['Addresses'] = _ApiClient["default"].convertToType(data['Addresses'], [_Address["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeAddressesResult;
}();
/**
 * @member {Array.<module:model/Address>} Addresses
 */


DescribeAddressesResult.prototype['Addresses'] = undefined;
var _default = DescribeAddressesResult;
exports["default"] = _default;