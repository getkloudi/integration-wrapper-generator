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
 * The ProvisionedBandwidth model module.
 * @module model/ProvisionedBandwidth
 * @version 1.0.0
 */
var ProvisionedBandwidth =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProvisionedBandwidth</code>.
   * Reserved. If you need to sustain traffic greater than the &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\&quot;&gt;documented limits&lt;/a&gt;, contact us through the &lt;a href&#x3D;\&quot;https://console.aws.amazon.com/support/home?\&quot;&gt;Support Center&lt;/a&gt;.
   * @alias module:model/ProvisionedBandwidth
   */
  function ProvisionedBandwidth() {
    _classCallCheck(this, ProvisionedBandwidth);

    ProvisionedBandwidth.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProvisionedBandwidth, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProvisionedBandwidth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionedBandwidth} obj Optional instance to populate.
     * @return {module:model/ProvisionedBandwidth} The populated <code>ProvisionedBandwidth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProvisionedBandwidth();

        if (data.hasOwnProperty('ProvisionTime')) {
          obj['ProvisionTime'] = _ApiClient["default"].convertToType(data['ProvisionTime'], 'Date');
        }

        if (data.hasOwnProperty('Provisioned')) {
          obj['Provisioned'] = _ApiClient["default"].convertToType(data['Provisioned'], 'String');
        }

        if (data.hasOwnProperty('RequestTime')) {
          obj['RequestTime'] = _ApiClient["default"].convertToType(data['RequestTime'], 'Date');
        }

        if (data.hasOwnProperty('Requested')) {
          obj['Requested'] = _ApiClient["default"].convertToType(data['Requested'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProvisionedBandwidth;
}();
/**
 * @member {Date} ProvisionTime
 */


ProvisionedBandwidth.prototype['ProvisionTime'] = undefined;
/**
 * @member {String} Provisioned
 */

ProvisionedBandwidth.prototype['Provisioned'] = undefined;
/**
 * @member {Date} RequestTime
 */

ProvisionedBandwidth.prototype['RequestTime'] = undefined;
/**
 * @member {String} Requested
 */

ProvisionedBandwidth.prototype['Requested'] = undefined;
/**
 * @member {String} Status
 */

ProvisionedBandwidth.prototype['Status'] = undefined;
var _default = ProvisionedBandwidth;
exports["default"] = _default;