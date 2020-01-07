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
 * The IpRange model module.
 * @module model/IpRange
 * @version 1.1.0
 */
var IpRange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IpRange</code>.
   * Describes an IPv4 range.
   * @alias module:model/IpRange
   */
  function IpRange() {
    _classCallCheck(this, IpRange);

    IpRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IpRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IpRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpRange} obj Optional instance to populate.
     * @return {module:model/IpRange} The populated <code>IpRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IpRange();

        if (data.hasOwnProperty('CidrIp')) {
          obj['CidrIp'] = _ApiClient["default"].convertToType(data['CidrIp'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IpRange;
}();
/**
 * @member {String} CidrIp
 */


IpRange.prototype['CidrIp'] = undefined;
/**
 * @member {String} Description
 */

IpRange.prototype['Description'] = undefined;
var _default = IpRange;
exports["default"] = _default;