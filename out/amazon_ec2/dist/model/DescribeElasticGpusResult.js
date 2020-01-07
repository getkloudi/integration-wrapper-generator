"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ElasticGpus = _interopRequireDefault(require("./ElasticGpus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeElasticGpusResult model module.
 * @module model/DescribeElasticGpusResult
 * @version 1.1.0
 */
var DescribeElasticGpusResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeElasticGpusResult</code>.
   * @alias module:model/DescribeElasticGpusResult
   */
  function DescribeElasticGpusResult() {
    _classCallCheck(this, DescribeElasticGpusResult);

    DescribeElasticGpusResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeElasticGpusResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeElasticGpusResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeElasticGpusResult} obj Optional instance to populate.
     * @return {module:model/DescribeElasticGpusResult} The populated <code>DescribeElasticGpusResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeElasticGpusResult();

        if (data.hasOwnProperty('ElasticGpuSet')) {
          obj['ElasticGpuSet'] = _ApiClient["default"].convertToType(data['ElasticGpuSet'], [_ElasticGpus["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeElasticGpusResult;
}();
/**
 * @member {Array.<module:model/ElasticGpus>} ElasticGpuSet
 */


DescribeElasticGpusResult.prototype['ElasticGpuSet'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeElasticGpusResult.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeElasticGpusResult.prototype['NextToken'] = undefined;
var _default = DescribeElasticGpusResult;
exports["default"] = _default;