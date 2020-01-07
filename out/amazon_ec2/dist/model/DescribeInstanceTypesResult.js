"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceTypeInfo = _interopRequireDefault(require("./InstanceTypeInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeInstanceTypesResult model module.
 * @module model/DescribeInstanceTypesResult
 * @version 1.1.0
 */
var DescribeInstanceTypesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeInstanceTypesResult</code>.
   * @alias module:model/DescribeInstanceTypesResult
   */
  function DescribeInstanceTypesResult() {
    _classCallCheck(this, DescribeInstanceTypesResult);

    DescribeInstanceTypesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeInstanceTypesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeInstanceTypesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInstanceTypesResult} obj Optional instance to populate.
     * @return {module:model/DescribeInstanceTypesResult} The populated <code>DescribeInstanceTypesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeInstanceTypesResult();

        if (data.hasOwnProperty('InstanceTypes')) {
          obj['InstanceTypes'] = _ApiClient["default"].convertToType(data['InstanceTypes'], [_InstanceTypeInfo["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeInstanceTypesResult;
}();
/**
 * @member {Array.<module:model/InstanceTypeInfo>} InstanceTypes
 */


DescribeInstanceTypesResult.prototype['InstanceTypes'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeInstanceTypesResult.prototype['NextToken'] = undefined;
var _default = DescribeInstanceTypesResult;
exports["default"] = _default;