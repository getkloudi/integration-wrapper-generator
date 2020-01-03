"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AssociatedNetworkType = _interopRequireDefault(require("./AssociatedNetworkType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AssociatedTargetNetwork model module.
 * @module model/AssociatedTargetNetwork
 * @version 1.0.0
 */
var AssociatedTargetNetwork =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociatedTargetNetwork</code>.
   * Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
   * @alias module:model/AssociatedTargetNetwork
   */
  function AssociatedTargetNetwork() {
    _classCallCheck(this, AssociatedTargetNetwork);

    AssociatedTargetNetwork.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociatedTargetNetwork, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssociatedTargetNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociatedTargetNetwork} obj Optional instance to populate.
     * @return {module:model/AssociatedTargetNetwork} The populated <code>AssociatedTargetNetwork</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociatedTargetNetwork();

        if (data.hasOwnProperty('NetworkId')) {
          obj['NetworkId'] = _ApiClient["default"].convertToType(data['NetworkId'], 'String');
        }

        if (data.hasOwnProperty('NetworkType')) {
          obj['NetworkType'] = _AssociatedNetworkType["default"].constructFromObject(data['NetworkType']);
        }
      }

      return obj;
    }
  }]);

  return AssociatedTargetNetwork;
}();
/**
 * @member {String} NetworkId
 */


AssociatedTargetNetwork.prototype['NetworkId'] = undefined;
/**
 * @member {module:model/AssociatedNetworkType} NetworkType
 */

AssociatedTargetNetwork.prototype['NetworkType'] = undefined;
var _default = AssociatedTargetNetwork;
exports["default"] = _default;