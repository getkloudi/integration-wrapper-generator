"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeStatusItem = _interopRequireDefault(require("./VolumeStatusItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVolumeStatusResult model module.
 * @module model/DescribeVolumeStatusResult
 * @version 1.1.0
 */
var DescribeVolumeStatusResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVolumeStatusResult</code>.
   * @alias module:model/DescribeVolumeStatusResult
   */
  function DescribeVolumeStatusResult() {
    _classCallCheck(this, DescribeVolumeStatusResult);

    DescribeVolumeStatusResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVolumeStatusResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVolumeStatusResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVolumeStatusResult} obj Optional instance to populate.
     * @return {module:model/DescribeVolumeStatusResult} The populated <code>DescribeVolumeStatusResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVolumeStatusResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('VolumeStatuses')) {
          obj['VolumeStatuses'] = _ApiClient["default"].convertToType(data['VolumeStatuses'], [_VolumeStatusItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVolumeStatusResult;
}();
/**
 * @member {String} NextToken
 */


DescribeVolumeStatusResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/VolumeStatusItem>} VolumeStatuses
 */

DescribeVolumeStatusResult.prototype['VolumeStatuses'] = undefined;
var _default = DescribeVolumeStatusResult;
exports["default"] = _default;