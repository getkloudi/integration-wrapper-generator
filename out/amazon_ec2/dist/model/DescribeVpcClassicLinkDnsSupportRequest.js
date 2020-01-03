"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcClassicLinkDnsSupportRequest model module.
 * @module model/DescribeVpcClassicLinkDnsSupportRequest
 * @version 1.0.0
 */
var DescribeVpcClassicLinkDnsSupportRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcClassicLinkDnsSupportRequest</code>.
   * @alias module:model/DescribeVpcClassicLinkDnsSupportRequest
   */
  function DescribeVpcClassicLinkDnsSupportRequest() {
    _classCallCheck(this, DescribeVpcClassicLinkDnsSupportRequest);

    DescribeVpcClassicLinkDnsSupportRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcClassicLinkDnsSupportRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcClassicLinkDnsSupportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcClassicLinkDnsSupportRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVpcClassicLinkDnsSupportRequest} The populated <code>DescribeVpcClassicLinkDnsSupportRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcClassicLinkDnsSupportRequest();

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('VpcIds')) {
          obj['VpcIds'] = _ApiClient["default"].convertToType(data['VpcIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcClassicLinkDnsSupportRequest;
}();
/**
 * @member {Number} MaxResults
 */


DescribeVpcClassicLinkDnsSupportRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeVpcClassicLinkDnsSupportRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} VpcIds
 */

DescribeVpcClassicLinkDnsSupportRequest.prototype['VpcIds'] = undefined;
var _default = DescribeVpcClassicLinkDnsSupportRequest;
exports["default"] = _default;