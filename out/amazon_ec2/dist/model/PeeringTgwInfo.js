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
 * The PeeringTgwInfo model module.
 * @module model/PeeringTgwInfo
 * @version 1.1.0
 */
var PeeringTgwInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PeeringTgwInfo</code>.
   * Information about the transit gateway in the peering attachment.
   * @alias module:model/PeeringTgwInfo
   */
  function PeeringTgwInfo() {
    _classCallCheck(this, PeeringTgwInfo);

    PeeringTgwInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PeeringTgwInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PeeringTgwInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeeringTgwInfo} obj Optional instance to populate.
     * @return {module:model/PeeringTgwInfo} The populated <code>PeeringTgwInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeeringTgwInfo();

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Region')) {
          obj['Region'] = _ApiClient["default"].convertToType(data['Region'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PeeringTgwInfo;
}();
/**
 * @member {String} OwnerId
 */


PeeringTgwInfo.prototype['OwnerId'] = undefined;
/**
 * @member {String} Region
 */

PeeringTgwInfo.prototype['Region'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

PeeringTgwInfo.prototype['TransitGatewayId'] = undefined;
var _default = PeeringTgwInfo;
exports["default"] = _default;