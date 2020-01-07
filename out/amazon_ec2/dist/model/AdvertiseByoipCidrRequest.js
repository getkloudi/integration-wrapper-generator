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
 * The AdvertiseByoipCidrRequest model module.
 * @module model/AdvertiseByoipCidrRequest
 * @version 1.1.0
 */
var AdvertiseByoipCidrRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AdvertiseByoipCidrRequest</code>.
   * @alias module:model/AdvertiseByoipCidrRequest
   * @param cidr {String} 
   */
  function AdvertiseByoipCidrRequest(cidr) {
    _classCallCheck(this, AdvertiseByoipCidrRequest);

    AdvertiseByoipCidrRequest.initialize(this, cidr);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AdvertiseByoipCidrRequest, null, [{
    key: "initialize",
    value: function initialize(obj, cidr) {
      obj['Cidr'] = cidr;
    }
    /**
     * Constructs a <code>AdvertiseByoipCidrRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdvertiseByoipCidrRequest} obj Optional instance to populate.
     * @return {module:model/AdvertiseByoipCidrRequest} The populated <code>AdvertiseByoipCidrRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdvertiseByoipCidrRequest();

        if (data.hasOwnProperty('Cidr')) {
          obj['Cidr'] = _ApiClient["default"].convertToType(data['Cidr'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AdvertiseByoipCidrRequest;
}();
/**
 * @member {String} Cidr
 */


AdvertiseByoipCidrRequest.prototype['Cidr'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AdvertiseByoipCidrRequest.prototype['DryRun'] = undefined;
var _default = AdvertiseByoipCidrRequest;
exports["default"] = _default;