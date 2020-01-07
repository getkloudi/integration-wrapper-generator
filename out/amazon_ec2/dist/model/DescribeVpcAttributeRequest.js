"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcAttributeName = _interopRequireDefault(require("./VpcAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcAttributeRequest model module.
 * @module model/DescribeVpcAttributeRequest
 * @version 1.1.0
 */
var DescribeVpcAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcAttributeRequest</code>.
   * @alias module:model/DescribeVpcAttributeRequest
   * @param attribute {module:model/VpcAttributeName} 
   * @param vpcId {String} 
   */
  function DescribeVpcAttributeRequest(attribute, vpcId) {
    _classCallCheck(this, DescribeVpcAttributeRequest);

    DescribeVpcAttributeRequest.initialize(this, attribute, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, vpcId) {
      obj['Attribute'] = attribute;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>DescribeVpcAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVpcAttributeRequest} The populated <code>DescribeVpcAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _VpcAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcAttributeRequest;
}();
/**
 * @member {module:model/VpcAttributeName} Attribute
 */


DescribeVpcAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeVpcAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

DescribeVpcAttributeRequest.prototype['VpcId'] = undefined;
var _default = DescribeVpcAttributeRequest;
exports["default"] = _default;