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
 * The DescribeTrafficMirrorTargetsRequest model module.
 * @module model/DescribeTrafficMirrorTargetsRequest
 * @version 1.0.0
 */
var DescribeTrafficMirrorTargetsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeTrafficMirrorTargetsRequest</code>.
   * @alias module:model/DescribeTrafficMirrorTargetsRequest
   */
  function DescribeTrafficMirrorTargetsRequest() {
    _classCallCheck(this, DescribeTrafficMirrorTargetsRequest);

    DescribeTrafficMirrorTargetsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeTrafficMirrorTargetsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeTrafficMirrorTargetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeTrafficMirrorTargetsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeTrafficMirrorTargetsRequest} The populated <code>DescribeTrafficMirrorTargetsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeTrafficMirrorTargetsRequest();

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

        if (data.hasOwnProperty('TrafficMirrorTargetIds')) {
          obj['TrafficMirrorTargetIds'] = _ApiClient["default"].convertToType(data['TrafficMirrorTargetIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeTrafficMirrorTargetsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeTrafficMirrorTargetsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeTrafficMirrorTargetsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeTrafficMirrorTargetsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeTrafficMirrorTargetsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} TrafficMirrorTargetIds
 */

DescribeTrafficMirrorTargetsRequest.prototype['TrafficMirrorTargetIds'] = undefined;
var _default = DescribeTrafficMirrorTargetsRequest;
exports["default"] = _default;