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
 * The PciId model module.
 * @module model/PciId
 * @version 1.1.0
 */
var PciId =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PciId</code>.
   * Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
   * @alias module:model/PciId
   */
  function PciId() {
    _classCallCheck(this, PciId);

    PciId.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PciId, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PciId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PciId} obj Optional instance to populate.
     * @return {module:model/PciId} The populated <code>PciId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PciId();

        if (data.hasOwnProperty('DeviceId')) {
          obj['DeviceId'] = _ApiClient["default"].convertToType(data['DeviceId'], 'String');
        }

        if (data.hasOwnProperty('SubsystemId')) {
          obj['SubsystemId'] = _ApiClient["default"].convertToType(data['SubsystemId'], 'String');
        }

        if (data.hasOwnProperty('SubsystemVendorId')) {
          obj['SubsystemVendorId'] = _ApiClient["default"].convertToType(data['SubsystemVendorId'], 'String');
        }

        if (data.hasOwnProperty('VendorId')) {
          obj['VendorId'] = _ApiClient["default"].convertToType(data['VendorId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PciId;
}();
/**
 * @member {String} DeviceId
 */


PciId.prototype['DeviceId'] = undefined;
/**
 * @member {String} SubsystemId
 */

PciId.prototype['SubsystemId'] = undefined;
/**
 * @member {String} SubsystemVendorId
 */

PciId.prototype['SubsystemVendorId'] = undefined;
/**
 * @member {String} VendorId
 */

PciId.prototype['VendorId'] = undefined;
var _default = PciId;
exports["default"] = _default;