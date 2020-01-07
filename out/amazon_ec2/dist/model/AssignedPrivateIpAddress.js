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
 * The AssignedPrivateIpAddress model module.
 * @module model/AssignedPrivateIpAddress
 * @version 1.1.0
 */
var AssignedPrivateIpAddress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssignedPrivateIpAddress</code>.
   * Describes the private IP addresses assigned to a network interface.
   * @alias module:model/AssignedPrivateIpAddress
   */
  function AssignedPrivateIpAddress() {
    _classCallCheck(this, AssignedPrivateIpAddress);

    AssignedPrivateIpAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssignedPrivateIpAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssignedPrivateIpAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignedPrivateIpAddress} obj Optional instance to populate.
     * @return {module:model/AssignedPrivateIpAddress} The populated <code>AssignedPrivateIpAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignedPrivateIpAddress();

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssignedPrivateIpAddress;
}();
/**
 * @member {String} PrivateIpAddress
 */


AssignedPrivateIpAddress.prototype['PrivateIpAddress'] = undefined;
var _default = AssignedPrivateIpAddress;
exports["default"] = _default;