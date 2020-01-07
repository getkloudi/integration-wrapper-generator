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
 * The DescribeElasticGpusRequest model module.
 * @module model/DescribeElasticGpusRequest
 * @version 1.1.0
 */
var DescribeElasticGpusRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeElasticGpusRequest</code>.
   * @alias module:model/DescribeElasticGpusRequest
   */
  function DescribeElasticGpusRequest() {
    _classCallCheck(this, DescribeElasticGpusRequest);

    DescribeElasticGpusRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeElasticGpusRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeElasticGpusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeElasticGpusRequest} obj Optional instance to populate.
     * @return {module:model/DescribeElasticGpusRequest} The populated <code>DescribeElasticGpusRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeElasticGpusRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ElasticGpuIds')) {
          obj['ElasticGpuIds'] = _ApiClient["default"].convertToType(data['ElasticGpuIds'], ['String']);
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
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

  return DescribeElasticGpusRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeElasticGpusRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ElasticGpuIds
 */

DescribeElasticGpusRequest.prototype['ElasticGpuIds'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeElasticGpusRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeElasticGpusRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeElasticGpusRequest.prototype['NextToken'] = undefined;
var _default = DescribeElasticGpusRequest;
exports["default"] = _default;