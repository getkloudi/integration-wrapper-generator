"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IpRange = _interopRequireDefault(require("./IpRange"));

var _Ipv6Range = _interopRequireDefault(require("./Ipv6Range"));

var _PrefixListId = _interopRequireDefault(require("./PrefixListId"));

var _UserIdGroupPair = _interopRequireDefault(require("./UserIdGroupPair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IpPermission model module.
 * @module model/IpPermission
 * @version 1.0.0
 */
var IpPermission =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IpPermission</code>.
   * Describes a set of permissions for a security group rule.
   * @alias module:model/IpPermission
   */
  function IpPermission() {
    _classCallCheck(this, IpPermission);

    IpPermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IpPermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IpPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpPermission} obj Optional instance to populate.
     * @return {module:model/IpPermission} The populated <code>IpPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IpPermission();

        if (data.hasOwnProperty('FromPort')) {
          obj['FromPort'] = _ApiClient["default"].convertToType(data['FromPort'], 'Number');
        }

        if (data.hasOwnProperty('IpProtocol')) {
          obj['IpProtocol'] = _ApiClient["default"].convertToType(data['IpProtocol'], 'String');
        }

        if (data.hasOwnProperty('IpRanges')) {
          obj['IpRanges'] = _ApiClient["default"].convertToType(data['IpRanges'], [_IpRange["default"]]);
        }

        if (data.hasOwnProperty('Ipv6Ranges')) {
          obj['Ipv6Ranges'] = _ApiClient["default"].convertToType(data['Ipv6Ranges'], [_Ipv6Range["default"]]);
        }

        if (data.hasOwnProperty('PrefixListIds')) {
          obj['PrefixListIds'] = _ApiClient["default"].convertToType(data['PrefixListIds'], [_PrefixListId["default"]]);
        }

        if (data.hasOwnProperty('ToPort')) {
          obj['ToPort'] = _ApiClient["default"].convertToType(data['ToPort'], 'Number');
        }

        if (data.hasOwnProperty('UserIdGroupPairs')) {
          obj['UserIdGroupPairs'] = _ApiClient["default"].convertToType(data['UserIdGroupPairs'], [_UserIdGroupPair["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IpPermission;
}();
/**
 * @member {Number} FromPort
 */


IpPermission.prototype['FromPort'] = undefined;
/**
 * @member {String} IpProtocol
 */

IpPermission.prototype['IpProtocol'] = undefined;
/**
 * @member {Array.<module:model/IpRange>} IpRanges
 */

IpPermission.prototype['IpRanges'] = undefined;
/**
 * @member {Array.<module:model/Ipv6Range>} Ipv6Ranges
 */

IpPermission.prototype['Ipv6Ranges'] = undefined;
/**
 * @member {Array.<module:model/PrefixListId>} PrefixListIds
 */

IpPermission.prototype['PrefixListIds'] = undefined;
/**
 * @member {Number} ToPort
 */

IpPermission.prototype['ToPort'] = undefined;
/**
 * @member {Array.<module:model/UserIdGroupPair>} UserIdGroupPairs
 */

IpPermission.prototype['UserIdGroupPairs'] = undefined;
var _default = IpPermission;
exports["default"] = _default;