"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IcmpTypeCode = _interopRequireDefault(require("./IcmpTypeCode"));

var _PortRange = _interopRequireDefault(require("./PortRange"));

var _RuleAction = _interopRequireDefault(require("./RuleAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkAclEntry model module.
 * @module model/NetworkAclEntry
 * @version 1.1.0
 */
var NetworkAclEntry =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkAclEntry</code>.
   * Describes an entry in a network ACL.
   * @alias module:model/NetworkAclEntry
   */
  function NetworkAclEntry() {
    _classCallCheck(this, NetworkAclEntry);

    NetworkAclEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkAclEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkAclEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAclEntry} obj Optional instance to populate.
     * @return {module:model/NetworkAclEntry} The populated <code>NetworkAclEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkAclEntry();

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('Egress')) {
          obj['Egress'] = _ApiClient["default"].convertToType(data['Egress'], 'Boolean');
        }

        if (data.hasOwnProperty('IcmpTypeCode')) {
          obj['IcmpTypeCode'] = _IcmpTypeCode["default"].constructFromObject(data['IcmpTypeCode']);
        }

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('PortRange')) {
          obj['PortRange'] = _PortRange["default"].constructFromObject(data['PortRange']);
        }

        if (data.hasOwnProperty('Protocol')) {
          obj['Protocol'] = _ApiClient["default"].convertToType(data['Protocol'], 'String');
        }

        if (data.hasOwnProperty('RuleAction')) {
          obj['RuleAction'] = _RuleAction["default"].constructFromObject(data['RuleAction']);
        }

        if (data.hasOwnProperty('RuleNumber')) {
          obj['RuleNumber'] = _ApiClient["default"].convertToType(data['RuleNumber'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NetworkAclEntry;
}();
/**
 * @member {String} CidrBlock
 */


NetworkAclEntry.prototype['CidrBlock'] = undefined;
/**
 * @member {Boolean} Egress
 */

NetworkAclEntry.prototype['Egress'] = undefined;
/**
 * @member {module:model/IcmpTypeCode} IcmpTypeCode
 */

NetworkAclEntry.prototype['IcmpTypeCode'] = undefined;
/**
 * @member {String} Ipv6CidrBlock
 */

NetworkAclEntry.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {module:model/PortRange} PortRange
 */

NetworkAclEntry.prototype['PortRange'] = undefined;
/**
 * @member {String} Protocol
 */

NetworkAclEntry.prototype['Protocol'] = undefined;
/**
 * @member {module:model/RuleAction} RuleAction
 */

NetworkAclEntry.prototype['RuleAction'] = undefined;
/**
 * @member {Number} RuleNumber
 */

NetworkAclEntry.prototype['RuleNumber'] = undefined;
var _default = NetworkAclEntry;
exports["default"] = _default;