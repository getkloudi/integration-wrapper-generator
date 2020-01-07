"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcAttributeResult model module.
 * @module model/DescribeVpcAttributeResult
 * @version 1.1.0
 */
var DescribeVpcAttributeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcAttributeResult</code>.
   * @alias module:model/DescribeVpcAttributeResult
   */
  function DescribeVpcAttributeResult() {
    _classCallCheck(this, DescribeVpcAttributeResult);

    DescribeVpcAttributeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcAttributeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcAttributeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcAttributeResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcAttributeResult} The populated <code>DescribeVpcAttributeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcAttributeResult();

        if (data.hasOwnProperty('EnableDnsHostnames')) {
          obj['EnableDnsHostnames'] = _AttributeBooleanValue["default"].constructFromObject(data['EnableDnsHostnames']);
        }

        if (data.hasOwnProperty('EnableDnsSupport')) {
          obj['EnableDnsSupport'] = _AttributeBooleanValue["default"].constructFromObject(data['EnableDnsSupport']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcAttributeResult;
}();
/**
 * @member {module:model/AttributeBooleanValue} EnableDnsHostnames
 */


DescribeVpcAttributeResult.prototype['EnableDnsHostnames'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EnableDnsSupport
 */

DescribeVpcAttributeResult.prototype['EnableDnsSupport'] = undefined;
/**
 * @member {String} VpcId
 */

DescribeVpcAttributeResult.prototype['VpcId'] = undefined;
var _default = DescribeVpcAttributeResult;
exports["default"] = _default;