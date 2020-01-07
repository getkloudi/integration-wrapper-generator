"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VpcPeeringConnectionStateReason = _interopRequireDefault(require("./VpcPeeringConnectionStateReason"));

var _VpcPeeringConnectionVpcInfo = _interopRequireDefault(require("./VpcPeeringConnectionVpcInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcPeeringConnection model module.
 * @module model/VpcPeeringConnection
 * @version 1.1.0
 */
var VpcPeeringConnection =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcPeeringConnection</code>.
   * Describes a VPC peering connection.
   * @alias module:model/VpcPeeringConnection
   */
  function VpcPeeringConnection() {
    _classCallCheck(this, VpcPeeringConnection);

    VpcPeeringConnection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcPeeringConnection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcPeeringConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcPeeringConnection} obj Optional instance to populate.
     * @return {module:model/VpcPeeringConnection} The populated <code>VpcPeeringConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcPeeringConnection();

        if (data.hasOwnProperty('AccepterVpcInfo')) {
          obj['AccepterVpcInfo'] = _VpcPeeringConnectionVpcInfo["default"].constructFromObject(data['AccepterVpcInfo']);
        }

        if (data.hasOwnProperty('ExpirationTime')) {
          obj['ExpirationTime'] = _ApiClient["default"].convertToType(data['ExpirationTime'], 'Date');
        }

        if (data.hasOwnProperty('RequesterVpcInfo')) {
          obj['RequesterVpcInfo'] = _VpcPeeringConnectionVpcInfo["default"].constructFromObject(data['RequesterVpcInfo']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _VpcPeeringConnectionStateReason["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcPeeringConnection;
}();
/**
 * @member {module:model/VpcPeeringConnectionVpcInfo} AccepterVpcInfo
 */


VpcPeeringConnection.prototype['AccepterVpcInfo'] = undefined;
/**
 * @member {Date} ExpirationTime
 */

VpcPeeringConnection.prototype['ExpirationTime'] = undefined;
/**
 * @member {module:model/VpcPeeringConnectionVpcInfo} RequesterVpcInfo
 */

VpcPeeringConnection.prototype['RequesterVpcInfo'] = undefined;
/**
 * @member {module:model/VpcPeeringConnectionStateReason} Status
 */

VpcPeeringConnection.prototype['Status'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

VpcPeeringConnection.prototype['Tags'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

VpcPeeringConnection.prototype['VpcPeeringConnectionId'] = undefined;
var _default = VpcPeeringConnection;
exports["default"] = _default;