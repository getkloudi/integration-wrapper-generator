"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Region = _interopRequireDefault(require("./Region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeRegionsResult model module.
 * @module model/DescribeRegionsResult
 * @version 1.1.0
 */
var DescribeRegionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeRegionsResult</code>.
   * @alias module:model/DescribeRegionsResult
   */
  function DescribeRegionsResult() {
    _classCallCheck(this, DescribeRegionsResult);

    DescribeRegionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeRegionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeRegionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeRegionsResult} obj Optional instance to populate.
     * @return {module:model/DescribeRegionsResult} The populated <code>DescribeRegionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeRegionsResult();

        if (data.hasOwnProperty('Regions')) {
          obj['Regions'] = _ApiClient["default"].convertToType(data['Regions'], [_Region["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeRegionsResult;
}();
/**
 * @member {Array.<module:model/Region>} Regions
 */


DescribeRegionsResult.prototype['Regions'] = undefined;
var _default = DescribeRegionsResult;
exports["default"] = _default;