"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeRegionsRequest model module.
 * @module model/DescribeRegionsRequest
 * @version 1.0.0
 */
var DescribeRegionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeRegionsRequest</code>.
   * @alias module:model/DescribeRegionsRequest
   */
  function DescribeRegionsRequest() {
    _classCallCheck(this, DescribeRegionsRequest);

    DescribeRegionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeRegionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeRegionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeRegionsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeRegionsRequest} The populated <code>DescribeRegionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeRegionsRequest();

        if (data.hasOwnProperty('AllRegions')) {
          obj['AllRegions'] = _ApiClient["default"].convertToType(data['AllRegions'], 'Boolean');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('RegionNames')) {
          obj['RegionNames'] = _ApiClient["default"].convertToType(data['RegionNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeRegionsRequest;
}();
/**
 * @member {Boolean} AllRegions
 */


DescribeRegionsRequest.prototype['AllRegions'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeRegionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeRegionsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} RegionNames
 */

DescribeRegionsRequest.prototype['RegionNames'] = undefined;
var _default = DescribeRegionsRequest;
exports["default"] = _default;