"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActiveInstance = _interopRequireDefault(require("./ActiveInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFleetInstancesResult model module.
 * @module model/DescribeFleetInstancesResult
 * @version 1.1.0
 */
var DescribeFleetInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetInstancesResult</code>.
   * @alias module:model/DescribeFleetInstancesResult
   */
  function DescribeFleetInstancesResult() {
    _classCallCheck(this, DescribeFleetInstancesResult);

    DescribeFleetInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFleetInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetInstancesResult} obj Optional instance to populate.
     * @return {module:model/DescribeFleetInstancesResult} The populated <code>DescribeFleetInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetInstancesResult();

        if (data.hasOwnProperty('ActiveInstances')) {
          obj['ActiveInstances'] = _ApiClient["default"].convertToType(data['ActiveInstances'], [_ActiveInstance["default"]]);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFleetInstancesResult;
}();
/**
 * @member {Array.<module:model/ActiveInstance>} ActiveInstances
 */


DescribeFleetInstancesResult.prototype['ActiveInstances'] = undefined;
/**
 * @member {String} FleetId
 */

DescribeFleetInstancesResult.prototype['FleetId'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFleetInstancesResult.prototype['NextToken'] = undefined;
var _default = DescribeFleetInstancesResult;
exports["default"] = _default;