"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Volume = _interopRequireDefault(require("./Volume"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVolumesResult model module.
 * @module model/DescribeVolumesResult
 * @version 1.1.0
 */
var DescribeVolumesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVolumesResult</code>.
   * @alias module:model/DescribeVolumesResult
   */
  function DescribeVolumesResult() {
    _classCallCheck(this, DescribeVolumesResult);

    DescribeVolumesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVolumesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVolumesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVolumesResult} obj Optional instance to populate.
     * @return {module:model/DescribeVolumesResult} The populated <code>DescribeVolumesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVolumesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Volumes')) {
          obj['Volumes'] = _ApiClient["default"].convertToType(data['Volumes'], [_Volume["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVolumesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeVolumesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/Volume>} Volumes
 */

DescribeVolumesResult.prototype['Volumes'] = undefined;
var _default = DescribeVolumesResult;
exports["default"] = _default;