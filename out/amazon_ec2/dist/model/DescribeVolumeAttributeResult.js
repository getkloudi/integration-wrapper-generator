"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVolumeAttributeResult model module.
 * @module model/DescribeVolumeAttributeResult
 * @version 1.1.0
 */
var DescribeVolumeAttributeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVolumeAttributeResult</code>.
   * @alias module:model/DescribeVolumeAttributeResult
   */
  function DescribeVolumeAttributeResult() {
    _classCallCheck(this, DescribeVolumeAttributeResult);

    DescribeVolumeAttributeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVolumeAttributeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVolumeAttributeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVolumeAttributeResult} obj Optional instance to populate.
     * @return {module:model/DescribeVolumeAttributeResult} The populated <code>DescribeVolumeAttributeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVolumeAttributeResult();

        if (data.hasOwnProperty('AutoEnableIO')) {
          obj['AutoEnableIO'] = _AttributeBooleanValue["default"].constructFromObject(data['AutoEnableIO']);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeVolumeAttributeResult;
}();
/**
 * @member {module:model/AttributeBooleanValue} AutoEnableIO
 */


DescribeVolumeAttributeResult.prototype['AutoEnableIO'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

DescribeVolumeAttributeResult.prototype['ProductCodes'] = undefined;
/**
 * @member {String} VolumeId
 */

DescribeVolumeAttributeResult.prototype['VolumeId'] = undefined;
var _default = DescribeVolumeAttributeResult;
exports["default"] = _default;