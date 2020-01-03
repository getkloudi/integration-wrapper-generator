"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Reservation = _interopRequireDefault(require("./Reservation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeInstancesResult model module.
 * @module model/DescribeInstancesResult
 * @version 1.0.0
 */
var DescribeInstancesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeInstancesResult</code>.
   * @alias module:model/DescribeInstancesResult
   */
  function DescribeInstancesResult() {
    _classCallCheck(this, DescribeInstancesResult);

    DescribeInstancesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeInstancesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeInstancesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInstancesResult} obj Optional instance to populate.
     * @return {module:model/DescribeInstancesResult} The populated <code>DescribeInstancesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeInstancesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Reservations')) {
          obj['Reservations'] = _ApiClient["default"].convertToType(data['Reservations'], [_Reservation["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeInstancesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeInstancesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/Reservation>} Reservations
 */

DescribeInstancesResult.prototype['Reservations'] = undefined;
var _default = DescribeInstancesResult;
exports["default"] = _default;