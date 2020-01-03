"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DomainType = _interopRequireDefault(require("./DomainType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AllocateAddressRequest model module.
 * @module model/AllocateAddressRequest
 * @version 1.0.0
 */
var AllocateAddressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AllocateAddressRequest</code>.
   * @alias module:model/AllocateAddressRequest
   */
  function AllocateAddressRequest() {
    _classCallCheck(this, AllocateAddressRequest);

    AllocateAddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AllocateAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AllocateAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllocateAddressRequest} obj Optional instance to populate.
     * @return {module:model/AllocateAddressRequest} The populated <code>AllocateAddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllocateAddressRequest();

        if (data.hasOwnProperty('Address')) {
          obj['Address'] = _ApiClient["default"].convertToType(data['Address'], 'String');
        }

        if (data.hasOwnProperty('CustomerOwnedIpv4Pool')) {
          obj['CustomerOwnedIpv4Pool'] = _ApiClient["default"].convertToType(data['CustomerOwnedIpv4Pool'], 'String');
        }

        if (data.hasOwnProperty('Domain')) {
          obj['Domain'] = _DomainType["default"].constructFromObject(data['Domain']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('PublicIpv4Pool')) {
          obj['PublicIpv4Pool'] = _ApiClient["default"].convertToType(data['PublicIpv4Pool'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AllocateAddressRequest;
}();
/**
 * @member {String} Address
 */


AllocateAddressRequest.prototype['Address'] = undefined;
/**
 * @member {String} CustomerOwnedIpv4Pool
 */

AllocateAddressRequest.prototype['CustomerOwnedIpv4Pool'] = undefined;
/**
 * @member {module:model/DomainType} Domain
 */

AllocateAddressRequest.prototype['Domain'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AllocateAddressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

AllocateAddressRequest.prototype['NetworkBorderGroup'] = undefined;
/**
 * @member {String} PublicIpv4Pool
 */

AllocateAddressRequest.prototype['PublicIpv4Pool'] = undefined;
var _default = AllocateAddressRequest;
exports["default"] = _default;