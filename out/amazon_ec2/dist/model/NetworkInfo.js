"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnaSupport = _interopRequireDefault(require("./EnaSupport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkInfo model module.
 * @module model/NetworkInfo
 * @version 1.1.0
 */
var NetworkInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkInfo</code>.
   * Describes the networking features of the instance type.
   * @alias module:model/NetworkInfo
   */
  function NetworkInfo() {
    _classCallCheck(this, NetworkInfo);

    NetworkInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkInfo} obj Optional instance to populate.
     * @return {module:model/NetworkInfo} The populated <code>NetworkInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkInfo();

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _EnaSupport["default"].constructFromObject(data['EnaSupport']);
        }

        if (data.hasOwnProperty('Ipv4AddressesPerInterface')) {
          obj['Ipv4AddressesPerInterface'] = _ApiClient["default"].convertToType(data['Ipv4AddressesPerInterface'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6AddressesPerInterface')) {
          obj['Ipv6AddressesPerInterface'] = _ApiClient["default"].convertToType(data['Ipv6AddressesPerInterface'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6Supported')) {
          obj['Ipv6Supported'] = _ApiClient["default"].convertToType(data['Ipv6Supported'], 'Boolean');
        }

        if (data.hasOwnProperty('MaximumNetworkInterfaces')) {
          obj['MaximumNetworkInterfaces'] = _ApiClient["default"].convertToType(data['MaximumNetworkInterfaces'], 'Number');
        }

        if (data.hasOwnProperty('NetworkPerformance')) {
          obj['NetworkPerformance'] = _ApiClient["default"].convertToType(data['NetworkPerformance'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NetworkInfo;
}();
/**
 * @member {module:model/EnaSupport} EnaSupport
 */


NetworkInfo.prototype['EnaSupport'] = undefined;
/**
 * @member {Number} Ipv4AddressesPerInterface
 */

NetworkInfo.prototype['Ipv4AddressesPerInterface'] = undefined;
/**
 * @member {Number} Ipv6AddressesPerInterface
 */

NetworkInfo.prototype['Ipv6AddressesPerInterface'] = undefined;
/**
 * @member {Boolean} Ipv6Supported
 */

NetworkInfo.prototype['Ipv6Supported'] = undefined;
/**
 * @member {Number} MaximumNetworkInterfaces
 */

NetworkInfo.prototype['MaximumNetworkInterfaces'] = undefined;
/**
 * @member {String} NetworkPerformance
 */

NetworkInfo.prototype['NetworkPerformance'] = undefined;
var _default = NetworkInfo;
exports["default"] = _default;