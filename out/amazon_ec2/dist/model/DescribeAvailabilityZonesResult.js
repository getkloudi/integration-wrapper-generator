"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvailabilityZone = _interopRequireDefault(require("./AvailabilityZone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeAvailabilityZonesResult model module.
 * @module model/DescribeAvailabilityZonesResult
 * @version 1.1.0
 */
var DescribeAvailabilityZonesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeAvailabilityZonesResult</code>.
   * @alias module:model/DescribeAvailabilityZonesResult
   */
  function DescribeAvailabilityZonesResult() {
    _classCallCheck(this, DescribeAvailabilityZonesResult);

    DescribeAvailabilityZonesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeAvailabilityZonesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeAvailabilityZonesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeAvailabilityZonesResult} obj Optional instance to populate.
     * @return {module:model/DescribeAvailabilityZonesResult} The populated <code>DescribeAvailabilityZonesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeAvailabilityZonesResult();

        if (data.hasOwnProperty('AvailabilityZones')) {
          obj['AvailabilityZones'] = _ApiClient["default"].convertToType(data['AvailabilityZones'], [_AvailabilityZone["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeAvailabilityZonesResult;
}();
/**
 * @member {Array.<module:model/AvailabilityZone>} AvailabilityZones
 */


DescribeAvailabilityZonesResult.prototype['AvailabilityZones'] = undefined;
var _default = DescribeAvailabilityZonesResult;
exports["default"] = _default;