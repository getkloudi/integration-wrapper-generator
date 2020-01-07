"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClassicLinkInstance = _interopRequireDefault(require("./ClassicLinkInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeClassicLinkInstancesResult model module.
 * @module model/DescribeClassicLinkInstancesResult
 * @version 1.1.0
 */
var DescribeClassicLinkInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClassicLinkInstancesResult</code>.
   * @alias module:model/DescribeClassicLinkInstancesResult
   */
  function DescribeClassicLinkInstancesResult() {
    _classCallCheck(this, DescribeClassicLinkInstancesResult);

    DescribeClassicLinkInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClassicLinkInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeClassicLinkInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClassicLinkInstancesResult} obj Optional instance to populate.
     * @return {module:model/DescribeClassicLinkInstancesResult} The populated <code>DescribeClassicLinkInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClassicLinkInstancesResult();

        if (data.hasOwnProperty('Instances')) {
          obj['Instances'] = _ApiClient["default"].convertToType(data['Instances'], [_ClassicLinkInstance["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeClassicLinkInstancesResult;
}();
/**
 * @member {Array.<module:model/ClassicLinkInstance>} Instances
 */


DescribeClassicLinkInstancesResult.prototype['Instances'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeClassicLinkInstancesResult.prototype['NextToken'] = undefined;
var _default = DescribeClassicLinkInstancesResult;
exports["default"] = _default;