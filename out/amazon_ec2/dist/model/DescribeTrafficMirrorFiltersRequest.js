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
 * The DescribeTrafficMirrorFiltersRequest model module.
 * @module model/DescribeTrafficMirrorFiltersRequest
 * @version 1.0.0
 */
var DescribeTrafficMirrorFiltersRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeTrafficMirrorFiltersRequest</code>.
   * @alias module:model/DescribeTrafficMirrorFiltersRequest
   */
  function DescribeTrafficMirrorFiltersRequest() {
    _classCallCheck(this, DescribeTrafficMirrorFiltersRequest);

    DescribeTrafficMirrorFiltersRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeTrafficMirrorFiltersRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeTrafficMirrorFiltersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeTrafficMirrorFiltersRequest} obj Optional instance to populate.
     * @return {module:model/DescribeTrafficMirrorFiltersRequest} The populated <code>DescribeTrafficMirrorFiltersRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeTrafficMirrorFiltersRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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

        if (data.hasOwnProperty('TrafficMirrorFilterIds')) {
          obj['TrafficMirrorFilterIds'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeTrafficMirrorFiltersRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeTrafficMirrorFiltersRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeTrafficMirrorFiltersRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeTrafficMirrorFiltersRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeTrafficMirrorFiltersRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} TrafficMirrorFilterIds
 */

DescribeTrafficMirrorFiltersRequest.prototype['TrafficMirrorFilterIds'] = undefined;
var _default = DescribeTrafficMirrorFiltersRequest;
exports["default"] = _default;