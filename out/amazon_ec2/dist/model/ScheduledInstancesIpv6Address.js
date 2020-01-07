"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInstancesIpv6Address model module.
 * @module model/ScheduledInstancesIpv6Address
 * @version 1.1.0
 */
var ScheduledInstancesIpv6Address =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesIpv6Address</code>.
   * Describes an IPv6 address.
   * @alias module:model/ScheduledInstancesIpv6Address
   */
  function ScheduledInstancesIpv6Address() {
    _classCallCheck(this, ScheduledInstancesIpv6Address);

    ScheduledInstancesIpv6Address.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesIpv6Address, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstancesIpv6Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesIpv6Address} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesIpv6Address} The populated <code>ScheduledInstancesIpv6Address</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesIpv6Address();

        if (data.hasOwnProperty('Ipv6Address')) {
          obj['Ipv6Address'] = _ApiClient["default"].convertToType(data['Ipv6Address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstancesIpv6Address;
}();
/**
 * @member {String} Ipv6Address
 */


ScheduledInstancesIpv6Address.prototype['Ipv6Address'] = undefined;
var _default = ScheduledInstancesIpv6Address;
exports["default"] = _default;