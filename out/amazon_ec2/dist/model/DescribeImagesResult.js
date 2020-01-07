"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeImagesResult model module.
 * @module model/DescribeImagesResult
 * @version 1.1.0
 */
var DescribeImagesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeImagesResult</code>.
   * @alias module:model/DescribeImagesResult
   */
  function DescribeImagesResult() {
    _classCallCheck(this, DescribeImagesResult);

    DescribeImagesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeImagesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeImagesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeImagesResult} obj Optional instance to populate.
     * @return {module:model/DescribeImagesResult} The populated <code>DescribeImagesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeImagesResult();

        if (data.hasOwnProperty('Images')) {
          obj['Images'] = _ApiClient["default"].convertToType(data['Images'], [_Image["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeImagesResult;
}();
/**
 * @member {Array.<module:model/Image>} Images
 */


DescribeImagesResult.prototype['Images'] = undefined;
var _default = DescribeImagesResult;
exports["default"] = _default;