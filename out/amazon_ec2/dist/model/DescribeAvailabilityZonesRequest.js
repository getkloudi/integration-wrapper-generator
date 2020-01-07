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
 * The DescribeAvailabilityZonesRequest model module.
 * @module model/DescribeAvailabilityZonesRequest
 * @version 1.1.0
 */
var DescribeAvailabilityZonesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeAvailabilityZonesRequest</code>.
   * @alias module:model/DescribeAvailabilityZonesRequest
   */
  function DescribeAvailabilityZonesRequest() {
    _classCallCheck(this, DescribeAvailabilityZonesRequest);

    DescribeAvailabilityZonesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeAvailabilityZonesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeAvailabilityZonesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeAvailabilityZonesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeAvailabilityZonesRequest} The populated <code>DescribeAvailabilityZonesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeAvailabilityZonesRequest();

        if (data.hasOwnProperty('AllAvailabilityZones')) {
          obj['AllAvailabilityZones'] = _ApiClient["default"].convertToType(data['AllAvailabilityZones'], 'Boolean');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('ZoneIds')) {
          obj['ZoneIds'] = _ApiClient["default"].convertToType(data['ZoneIds'], ['String']);
        }

        if (data.hasOwnProperty('ZoneNames')) {
          obj['ZoneNames'] = _ApiClient["default"].convertToType(data['ZoneNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeAvailabilityZonesRequest;
}();
/**
 * @member {Boolean} AllAvailabilityZones
 */


DescribeAvailabilityZonesRequest.prototype['AllAvailabilityZones'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeAvailabilityZonesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeAvailabilityZonesRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} ZoneIds
 */

DescribeAvailabilityZonesRequest.prototype['ZoneIds'] = undefined;
/**
 * @member {Array.<String>} ZoneNames
 */

DescribeAvailabilityZonesRequest.prototype['ZoneNames'] = undefined;
var _default = DescribeAvailabilityZonesRequest;
exports["default"] = _default;