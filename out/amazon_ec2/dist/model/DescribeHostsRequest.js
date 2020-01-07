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
 * The DescribeHostsRequest model module.
 * @module model/DescribeHostsRequest
 * @version 1.1.0
 */
var DescribeHostsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeHostsRequest</code>.
   * @alias module:model/DescribeHostsRequest
   */
  function DescribeHostsRequest() {
    _classCallCheck(this, DescribeHostsRequest);

    DescribeHostsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeHostsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeHostsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeHostsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeHostsRequest} The populated <code>DescribeHostsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeHostsRequest();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('HostIds')) {
          obj['HostIds'] = _ApiClient["default"].convertToType(data['HostIds'], ['String']);
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

  return DescribeHostsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filter
 */


DescribeHostsRequest.prototype['Filter'] = undefined;
/**
 * @member {Array.<String>} HostIds
 */

DescribeHostsRequest.prototype['HostIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeHostsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeHostsRequest.prototype['NextToken'] = undefined;
var _default = DescribeHostsRequest;
exports["default"] = _default;