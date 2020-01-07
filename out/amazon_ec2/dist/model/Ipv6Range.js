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
 * The Ipv6Range model module.
 * @module model/Ipv6Range
 * @version 1.1.0
 */
var Ipv6Range =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Ipv6Range</code>.
   * [EC2-VPC only] Describes an IPv6 range.
   * @alias module:model/Ipv6Range
   */
  function Ipv6Range() {
    _classCallCheck(this, Ipv6Range);

    Ipv6Range.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ipv6Range, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Ipv6Range</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ipv6Range} obj Optional instance to populate.
     * @return {module:model/Ipv6Range} The populated <code>Ipv6Range</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ipv6Range();

        if (data.hasOwnProperty('CidrIpv6')) {
          obj['CidrIpv6'] = _ApiClient["default"].convertToType(data['CidrIpv6'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Ipv6Range;
}();
/**
 * @member {String} CidrIpv6
 */


Ipv6Range.prototype['CidrIpv6'] = undefined;
/**
 * @member {String} Description
 */

Ipv6Range.prototype['Description'] = undefined;
var _default = Ipv6Range;
exports["default"] = _default;