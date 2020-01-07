"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstance = _interopRequireDefault(require("./ScheduledInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeScheduledInstancesResult model module.
 * @module model/DescribeScheduledInstancesResult
 * @version 1.1.0
 */
var DescribeScheduledInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeScheduledInstancesResult</code>.
   * Contains the output of DescribeScheduledInstances.
   * @alias module:model/DescribeScheduledInstancesResult
   */
  function DescribeScheduledInstancesResult() {
    _classCallCheck(this, DescribeScheduledInstancesResult);

    DescribeScheduledInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeScheduledInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeScheduledInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeScheduledInstancesResult} obj Optional instance to populate.
     * @return {module:model/DescribeScheduledInstancesResult} The populated <code>DescribeScheduledInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeScheduledInstancesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ScheduledInstanceSet')) {
          obj['ScheduledInstanceSet'] = _ApiClient["default"].convertToType(data['ScheduledInstanceSet'], [_ScheduledInstance["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeScheduledInstancesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeScheduledInstancesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ScheduledInstance>} ScheduledInstanceSet
 */

DescribeScheduledInstancesResult.prototype['ScheduledInstanceSet'] = undefined;
var _default = DescribeScheduledInstancesResult;
exports["default"] = _default;